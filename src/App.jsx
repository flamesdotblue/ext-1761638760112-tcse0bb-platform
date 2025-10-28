import { useState } from 'react';
import HeroCover from './components/HeroCover';
import CategorySelector from './components/CategorySelector';
import PreviewFeed from './components/PreviewFeed';
import HowItWorks from './components/HowItWorks';

export default function App() {
  const [selected, setSelected] = useState(['Software Testing']);

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <HeroCover />

      <main className="relative z-10">
        <section id="configure" className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Tune your feed to what matters</h2>
            <p className="text-neutral-400 mt-3">Pick topics and our extension automatically hides unrelated posts on LinkedIn, so you stay focused.</p>
          </div>
          <CategorySelector selected={selected} onChange={setSelected} />
        </section>

        <section id="preview" className="bg-neutral-900/40 border-y border-neutral-800">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-5xl mx-auto">
              <PreviewFeed selected={selected} />
            </div>
          </div>
        </section>

        <section id="how" className="container mx-auto px-4 py-16 md:py-24">
          <HowItWorks />
        </section>

        <footer className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-semibold">Ready to filter the noise?</h3>
            <p className="text-neutral-400 mt-3">Install the extension and choose your focus. It’s that simple.</p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <a href="#configure" className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 text-black font-medium px-5 py-3 hover:bg-emerald-400 transition-colors">Get Started</a>
              <a href="#how" className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 px-5 py-3 hover:bg-neutral-900 transition-colors">How it works</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
