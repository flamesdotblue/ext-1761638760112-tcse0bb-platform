import { useMemo } from 'react';
import { Filter, EyeOff } from 'lucide-react';

const POSTS = [
  { id: 1, author: 'Priya N.', title: 'Writing maintainable Playwright tests', tags: ['Playwright', 'Automation', 'SDET'] },
  { id: 2, author: 'Leo M.', title: 'Designing a data lake on AWS', tags: ['Data Engineering', 'Cloud'] },
  { id: 3, author: 'Asha K.', title: 'Scaling Selenium Grid with Docker', tags: ['Selenium', 'Automation'] },
  { id: 4, author: 'Karim R.', title: 'OKRs for Product Teams in 2025', tags: ['Product', 'Leadership'] },
  { id: 5, author: 'Mina T.', title: 'CI pipelines for Cypress at scale', tags: ['Cypress', 'DevOps', 'Automation'] },
  { id: 6, author: 'David L.', title: 'Threat modeling 101', tags: ['Security Testing'] },
  { id: 7, author: 'Sara P.', title: 'Agile QA rituals that actually work', tags: ['Agile QA', 'QA'] },
  { id: 8, author: 'John D.', title: 'Frontend performance budgets', tags: ['Web Performance'] },
  { id: 9, author: 'Ishaan V.', title: 'Test management: templates and tips', tags: ['Test Management', 'QA'] },
  { id: 10, author: 'Amy W.', title: 'How I passed the AWS DevOps Pro', tags: ['DevOps'] },
];

export default function PreviewFeed({ selected }) {
  const selectedSet = useMemo(() => new Set(selected), [selected]);

  const { visible, hidden } = useMemo(() => {
    if (!selected || selected.length === 0) return { visible: [], hidden: POSTS };
    const visible = POSTS.filter((p) => p.tags.some((t) => selectedSet.has(t)));
    const hidden = POSTS.filter((p) => !p.tags.some((t) => selectedSet.has(t)));
    return { visible, hidden };
  }, [selectedSet]);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-400/20">
            <Filter className="text-emerald-300" size={18} />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Filtered preview</h3>
            <p className="text-neutral-400 text-sm">Showing posts that match your selected topics.</p>
          </div>
        </div>
        <div className="text-sm text-neutral-400">
          <span className="text-emerald-300 font-medium">{visible.length}</span> visible • <span className="text-neutral-300">{hidden.length}</span> hidden
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {visible.map((post) => (
          <article key={post.id} className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">{post.title}</h4>
              <div className="text-xs text-neutral-400">by {post.author}</div>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <span key={t} className="text-xs rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-400/20 px-2 py-1">{t}</span>
              ))}
            </div>
          </article>
        ))}
        {visible.length === 0 && (
          <div className="col-span-full rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 text-center text-neutral-300">
            No matching posts. Add more topics above to see results.
          </div>
        )}
      </div>

      <div className="mt-10">
        <div className="flex items-center gap-2 text-neutral-400 text-sm mb-3">
          <EyeOff size={16} />
          <span>Hidden posts (not shown on your feed)</span>
          <span className="text-neutral-500">• {hidden.length}</span>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          {hidden.slice(0, 4).map((post) => (
            <div key={post.id} className="rounded-xl border border-neutral-900 bg-neutral-950/60 p-4 text-neutral-500">
              <div className="font-medium truncate">{post.title}</div>
              <div className="text-xs mt-1">by {post.author}</div>
            </div>
          ))}
          {hidden.length === 0 && (
            <div className="rounded-xl border border-neutral-900 bg-neutral-950/60 p-4 text-neutral-500">
              Everything matches your current filters.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
