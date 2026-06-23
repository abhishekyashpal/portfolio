# Feedback Sheet Setup

The floating feedback form posts submissions to `/api/feedback`.

Set this environment variable in Vercel:

```text
FEEDBACK_WEBHOOK_URL=https://your-webhook-url
```

Use a webhook that appends one row to your Excel table, Google Sheet, or automation flow.

Expected JSON payload:

```json
{
  "submittedAt": "2026-06-23T10:00:00.000Z",
  "name": "User Name",
  "email": "user@example.com",
  "mobile": "+91 98765 43210",
  "company": "Company / College",
  "rating": "5",
  "feedback": "Feedback message",
  "page": "/corporate-training",
  "userAgent": "Browser user agent"
}
```

Recommended Excel columns:

```text
Submitted At, Name, Email, Mobile, Company, Rating, Feedback, Page, User Agent
```

For Microsoft Excel Online, create a Power Automate flow with an HTTP request trigger, then add a row into an Excel table using the fields above. Paste the generated HTTP POST URL into `FEEDBACK_WEBHOOK_URL`.
