import { MessageSquare, Send, X } from 'lucide-react';
import { useState } from 'react';

const initialForm = {
  name: '',
  email: '',
  mobile: '',
  company: '',
  rating: '5',
  feedback: '',
};

const feedbackEndpoint = '/api/feedback';

export default function FeedbackWidget() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const updateField = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const submitFeedback = async (event) => {
    event.preventDefault();
    setStatus({ type: 'loading', message: 'Submitting feedback...' });

    try {
      const response = await fetch(feedbackEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          page: window.location.pathname,
        }),
      });

      const contentType = response.headers.get('content-type') || '';
      const result = contentType.includes('application/json')
        ? await response.json()
        : { message: '' };

      if (!response.ok) {
        const isLocalVite =
          window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

        throw new Error(
          result.message ||
            (isLocalVite
              ? 'Feedback API is not running in Vite dev mode. Test this with Vercel dev or after deployment.'
              : 'Feedback could not be submitted right now. Please check the feedback API configuration.')
        );
      }

      setStatus({ type: 'success', message: 'Thanks. Your feedback has been submitted.' });
      setFormData(initialForm);
    } catch (error) {
      setStatus({ type: 'error', message: error.message });
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-glow text-white shadow-2xl shadow-accent/30 transition hover:scale-105 hover:shadow-accent/45 focus:outline-none focus:ring-2 focus:ring-accent-light/60 focus:ring-offset-2 focus:ring-offset-surface"
        aria-label="Submit feedback"
      >
        <MessageSquare className="h-6 w-6" />
      </button>

      {open && (
        <div className="fixed inset-0 z-[70] flex items-end justify-center bg-black/65 p-4 backdrop-blur-sm sm:items-center">
          <div className="w-full max-w-lg overflow-hidden rounded-2xl border border-white/[0.08] bg-surface-raised shadow-2xl shadow-black/50">
            <div className="flex items-start justify-between gap-4 border-b border-white/[0.08] px-5 py-4">
              <div>
                <p className="section-label">Feedback</p>
                <h2 className="mt-1 font-display text-2xl font-bold text-white">Share your experience</h2>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-400 transition hover:bg-white/5 hover:text-white"
                aria-label="Close feedback form"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form className="space-y-4 p-5" onSubmit={submitFeedback}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="feedback-name" className="mb-1.5 block text-xs font-medium text-slate-400">
                    Full Name
                  </label>
                  <input
                    id="feedback-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={updateField}
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="feedback-email" className="mb-1.5 block text-xs font-medium text-slate-400">
                    Email
                  </label>
                  <input
                    id="feedback-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={updateField}
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="feedback-mobile" className="mb-1.5 block text-xs font-medium text-slate-400">
                    Mobile Number
                  </label>
                  <input
                    id="feedback-mobile"
                    name="mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={updateField}
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label htmlFor="feedback-company" className="mb-1.5 block text-xs font-medium text-slate-400">
                    Company / College
                  </label>
                  <input
                    id="feedback-company"
                    name="company"
                    value={formData.company}
                    onChange={updateField}
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
                    placeholder="Organization name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="feedback-rating" className="mb-1.5 block text-xs font-medium text-slate-400">
                  Rating
                </label>
                <select
                  id="feedback-rating"
                  name="rating"
                  value={formData.rating}
                  onChange={updateField}
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
                >
                  <option value="5">5 - Excellent</option>
                  <option value="4">4 - Good</option>
                  <option value="3">3 - Average</option>
                  <option value="2">2 - Needs improvement</option>
                  <option value="1">1 - Poor</option>
                </select>
              </div>

              <div>
                <label htmlFor="feedback-message" className="mb-1.5 block text-xs font-medium text-slate-400">
                  Feedback
                </label>
                <textarea
                  id="feedback-message"
                  name="feedback"
                  rows={4}
                  required
                  value={formData.feedback}
                  onChange={updateField}
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
                  placeholder="Tell us what worked well or what we should improve..."
                />
              </div>

              {status.message && (
                <p
                  className={`rounded-xl px-4 py-3 text-sm ${
                    status.type === 'success'
                      ? 'bg-emerald-500/10 text-emerald-200'
                      : status.type === 'error'
                        ? 'bg-red-500/10 text-red-200'
                        : 'bg-white/[0.05] text-slate-300'
                  }`}
                >
                  {status.message}
                </p>
              )}

              <button type="submit" className="btn-primary w-full" disabled={status.type === 'loading'}>
                {status.type === 'loading' ? 'Submitting...' : 'Submit Feedback'}
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
