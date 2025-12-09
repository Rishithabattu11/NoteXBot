import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const STORAGE_KEY = "rishi";

type Note = {
  id: number;
  title: string;
  category: string;
  preview?: string;
  updatedAt?: string;
};

const NoteDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [note, setNote] = useState<Note | null>(null);

  useEffect(() => {
    if (!id) return;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const list: Note[] = raw ? JSON.parse(raw) : [];
      const found = list.find((n) => String(n.id) === String(id)) || null;
      setNote(found);
    } catch {
      setNote(null);
    }
  }, [id]);

  if (!note) {
    return (
      <div>
        <p className="text-slate-400">Note not found.</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 rounded-md px-3 py-2 bg-slate-800 text-slate-200"
        >
          Go back
        </button>
      </div>
    );
  }

  return (
    <article className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-100">
            {note.title}
          </h1>
          <div className="mt-1 text-sm text-slate-400">
            <span className="uppercase tracking-wide text-[11px] text-slate-400">
              {note.category}
            </span>
            <span className="ml-3 text-[11px] text-slate-500">
              {note.updatedAt}
            </span>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => navigate(-1)}
            className="rounded-md px-3 py-2 bg-slate-800 text-slate-200"
          >
            Close
          </button>
        </div>
      </div>

      <div className="rounded-md border border-slate-800 bg-slate-900/60 p-6 text-slate-200">
        <p className="whitespace-pre-wrap text-sm">
          {note.preview || "No content"}
        </p>
      </div>
    </article>
  );
};

export default NoteDetailPage;
