import { useMemo } from 'react';

const ALL_CATEGORIES = [
  'Software Testing',
  'QA',
  'Automation',
  'SDET',
  'DevOps',
  'Cypress',
  'Selenium',
  'Playwright',
  'Performance Testing',
  'Security Testing',
  'Agile QA',
  'Test Management',
];

export default function CategorySelector({ selected, onChange }) {
  const selectedSet = useMemo(() => new Set(selected), [selected]);

  const toggle = (name) => {
    const next = new Set(selectedSet);
    if (next.has(name)) next.delete(name); else next.add(name);
    onChange(Array.from(next));
  };

  const clear = () => onChange([]);
  const selectAll = () => onChange(ALL_CATEGORIES);

  return (
    <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 md:p-8">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold">Choose your focus</h3>
          <p className="text-neutral-400 mt-1">We’ll hide posts that don’t match your selected topics.</p>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={selectAll} className="rounded-lg bg-neutral-800 border border-neutral-700 px-4 py-2 text-sm hover:bg-neutral-700">Select all</button>
          <button onClick={clear} className="rounded-lg bg-neutral-800 border border-neutral-700 px-4 py-2 text-sm hover:bg-neutral-700">Clear</button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {ALL_CATEGORIES.map((name) => {
          const active = selectedSet.has(name);
          return (
            <button
              key={name}
              onClick={() => toggle(name)}
              className={`text-left rounded-xl border px-4 py-3 transition-colors ${active ? 'border-emerald-400/30 bg-emerald-500/10 text-emerald-200' : 'border-neutral-800 bg-neutral-900 hover:bg-neutral-800/60 text-neutral-200'}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">{name}</span>
                <span className={`inline-block w-2.5 h-2.5 rounded-full ${active ? 'bg-emerald-400' : 'bg-neutral-700'}`} />
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-4 text-sm text-neutral-400">{selected.length} selected</div>
    </div>
  );
}
