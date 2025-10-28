import { Shield, Settings, CheckCircle2 } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <Settings size={18} />, title: 'Pick topics', body: 'Choose categories like Software Testing, QA, or DevOps to keep in focus.'
    },
    {
      icon: <Shield size={18} />, title: 'Smart filtering', body: 'We scan post text, hashtags, and metadata to hide off-topic content.'
    },
    {
      icon: <CheckCircle2 size={18} />, title: 'A focused feed', body: 'Your LinkedIn starts showing only what helps you grow your craft.'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-semibold tracking-tight">How it works</h3>
        <p className="text-neutral-400 mt-2">Three simple steps to eliminate noise and boost relevance.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {steps.map((s, i) => (
          <div key={i} className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-neutral-800 text-neutral-200 border border-neutral-700">
              {s.icon}
            </div>
            <h4 className="mt-4 text-lg font-semibold">{s.title}</h4>
            <p className="mt-2 text-neutral-400">{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
