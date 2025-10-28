import Spline from '@splinetool/react-spline';
import { Rocket, Filter } from 'lucide-react';

export default function HeroCover() {
  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-neutral-950/90" />

      <div className="relative z-10 container mx-auto px-4 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-400/20 px-3 py-1 mb-4">
            <Filter size={16} />
            <span className="text-sm font-medium">Smart LinkedIn Feed Filtering</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
            See only what you want on LinkedIn
          </h1>
          <p className="mt-4 text-neutral-300 text-lg md:text-xl">
            Choose topics like Software Testing, Automation, or DevOps. Our extension hides the rest—so your feed stays relevant and productive.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
            <a href="#configure" className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 text-black font-medium px-5 py-3 hover:bg-emerald-400 transition-colors">
              <Rocket size={18} />
              Try the demo
            </a>
            <a href="#preview" className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 px-5 py-3 hover:bg-neutral-900 transition-colors text-white">
              Preview filtered feed
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
