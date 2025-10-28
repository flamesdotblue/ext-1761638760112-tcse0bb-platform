import { Rocket } from 'lucide-react';

export default function FooterCTA() {
  return (
    <footer id="get" className="mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/15 via-emerald-400/10 to-green-500/20 p-6">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_200px_at_80%_-20%,rgba(16,185,129,0.15),transparent)]" />
          <div className="relative z-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h4 className="text-xl font-semibold text-white">Get early access</h4>
              <p className="mt-1 text-sm text-neutral-200">Be the first to try the LinkedIn filter extension. No spam, unsubscribe anytime.</p>
            </div>
            <form
              className="flex w-full max-w-md items-center gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                const email = new FormData(e.currentTarget).get('email');
                window.location.href = `mailto:hello@example.com?subject=Early%20Access&body=Please%20add%20me%20to%20the%20waitlist:%20${encodeURIComponent(email)}`;
              }}
            >
              <input
                required
                type="email"
                name="email"
                placeholder="you@company.com"
                className="flex-1 rounded-lg border border-white/15 bg-neutral-950 px-3 py-2 text-sm text-white placeholder-neutral-500 outline-none ring-emerald-400/30 focus:ring"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-emerald-950 transition hover:bg-emerald-400"
              >
                <Rocket className="h-4 w-4" />
                Join
              </button>
            </form>
          </div>
        </div>
        <div className="py-8 text-center text-xs text-neutral-500">© {new Date().getFullYear()} FocusedFeed. All rights reserved.</div>
      </div>
    </footer>
  );
}
