// Cloudflare Pages Function: receives hiring form submissions and emails them
// via Microsoft Graph (sent from the company mailbox).
//
// Required environment variables (set in Cloudflare Pages -> Settings ->
// Environment variables, as encrypted/secret values):
//   MS_TENANT_ID     - Entra tenant ID (App registration -> Overview)
//   MS_CLIENT_ID     - Application (client) ID (App registration -> Overview)
//   MS_CLIENT_SECRET - Client secret VALUE (App registration -> Certificates & secrets)

const SENDER = 'info@justenuffcabaret.com';
const RECIPIENTS = [
  'info@justenuffcabaret.com',
  'vincentpaik@gmail.com',
  'dakdak1985@gmail.com'
];

const esc = (s) =>
  String(s ?? '').replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])
  );

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' }
  });

export async function onRequestPost({ request, env }) {
  let data;
  try {
    data = await request.json();
  } catch {
    return json({ ok: false, error: 'Invalid request.' }, 400);
  }

  // Honeypot: real users never fill this hidden field. Pretend success for bots.
  if (data.company) return json({ ok: true });

  const required = ['position', 'firstName', 'lastName', 'phone', 'email', 'dob', 'cityState'];
  for (const f of required) {
    if (!data[f] || !String(data[f]).trim()) {
      return json({ ok: false, error: 'Please fill in all required fields.' }, 400);
    }
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return json({ ok: false, error: 'Please enter a valid email address.' }, 400);
  }

  // Get an app-only Microsoft Graph token
  const tokenRes = await fetch(
    `https://login.microsoftonline.com/${env.MS_TENANT_ID}/oauth2/v2.0/token`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: env.MS_CLIENT_ID,
        client_secret: env.MS_CLIENT_SECRET,
        scope: 'https://graph.microsoft.com/.default',
        grant_type: 'client_credentials'
      })
    }
  );
  if (!tokenRes.ok) {
    console.error('Graph token error', tokenRes.status, await tokenRes.text());
    return json({ ok: false, error: 'Mail service unavailable. Please email us directly.' }, 502);
  }
  const { access_token } = await tokenRes.json();

  const rows = [
    ['Position', data.position],
    ['Name', `${data.firstName} ${data.lastName}`],
    ['Phone', data.phone],
    ['Email', data.email],
    ['Date of Birth', data.dob],
    ['City / State', data.cityState],
    ['Prior Experience', data.experience || '(not answered)'],
    ['About', data.about || '(not answered)']
  ]
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 14px 6px 0;font-weight:bold;vertical-align:top;white-space:nowrap;">${esc(k)}</td>` +
        `<td style="padding:6px 0;">${esc(v).replace(/\n/g, '<br/>')}</td></tr>`
    )
    .join('');

  const mail = {
    message: {
      subject: `Job Application: ${data.position} — ${data.firstName} ${data.lastName}`,
      body: {
        contentType: 'HTML',
        content:
          `<h2 style="margin:0 0 4px;">New Job Application</h2>` +
          `<p style="margin:0 0 16px;color:#666;">Submitted via justenuffcabaret.com hiring form</p>` +
          `<table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px;">${rows}</table>` +
          `<p style="margin-top:16px;color:#666;font-size:12px;">Reply directly to this email to reach the applicant.</p>`
      },
      toRecipients: RECIPIENTS.map((address) => ({ emailAddress: { address } })),
      replyTo: [{ emailAddress: { address: data.email } }]
    },
    saveToSentItems: true
  };

  const sendRes = await fetch(
    `https://graph.microsoft.com/v1.0/users/${SENDER}/sendMail`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(mail)
    }
  );
  if (!sendRes.ok) {
    console.error('Graph sendMail error', sendRes.status, await sendRes.text());
    return json({ ok: false, error: 'Could not send your application. Please email us directly.' }, 502);
  }

  return json({ ok: true });
}
