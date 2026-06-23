const allowedRatings = new Set(['1', '2', '3', '4', '5']);

function clean(value) {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, 2000);
}

function sendJson(response, status, body) {
  response.statusCode = status;
  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify(body));
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return sendJson(response, 405, { message: 'Method not allowed.' });
  }

  const webhookUrl = process.env.FEEDBACK_WEBHOOK_URL;

  if (!webhookUrl) {
    return sendJson(response, 503, {
      message: 'Feedback storage is not configured. Add FEEDBACK_WEBHOOK_URL to append submissions to your sheet.',
    });
  }

  const body = request.body || {};
  const payload = {
    submittedAt: new Date().toISOString(),
    name: clean(body.name),
    email: clean(body.email),
    mobile: clean(body.mobile),
    company: clean(body.company),
    rating: allowedRatings.has(String(body.rating)) ? String(body.rating) : '',
    feedback: clean(body.feedback),
    page: clean(body.page),
    userAgent: clean(request.headers['user-agent']),
  };

  if (!payload.name || !payload.email || !payload.feedback) {
    return sendJson(response, 400, { message: 'Name, email, and feedback are required.' });
  }

  try {
    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!webhookResponse.ok) {
      const text = await webhookResponse.text().catch(() => '');
      throw new Error(text || `Webhook failed with ${webhookResponse.status}`);
    }

    return sendJson(response, 200, { ok: true });
  } catch (error) {
    console.error('Feedback webhook failed:', error);
    return sendJson(response, 502, { message: 'Feedback could not be saved. Please try again later.' });
  }
}
