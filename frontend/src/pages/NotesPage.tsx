import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NewNoteModal from "../components/notes/NewNoteModal";
// import NoteDetailPage from "./pages/NoteDetailPage";
type Note = {
  id: number;
  title: string;
  category: string;
  preview?: string;
  updatedAt?: string;
};

const initialNotes = [
  {
    id: 1,
    title: "ELM boosting idea",
    category: "Study",
    preview:
      "Combine ELM with a second-stage network that learns only from misclassified samples...",
    updatedAt: "5 min ago",
  },
  {
    id: 2,
    title: "Resume bullet points",
    category: "Work",
    preview:
      "Improved API response time by 30% by adding caching layer and optimizing DB indices...",
    updatedAt: "1 hour ago",
  },
  {
    id: 3,
    title: "Diabetes project notes",
    category: "Project",
    preview:
      "Compare ELM vs traditional neural nets on accuracy and training time for diabetes dataset...",
    updatedAt: "Yesterday",
  },
  {
    id: 4,
    title: "NextJS + Tailwind ideas",
    category: "Dev",
    preview:
      "Try using layout.tsx with shared navbar, and add skeleton loading states for AI calls...",
    updatedAt: "2 days ago",
  },
];

// Creates a constant string used as the key when saving/loading notes in localStorage.
const STORAGE_KEY = "rishi";

const NotesPage = () => {
  const navigate = useNavigate();

  // load from a local storage
  const [notes, setNotes] = useState<Note[]>(() => {
    try {
      // tries to read from localstorage
      const raw = localStorage.getItem(STORAGE_KEY);
      // if exists returns the array of notes
      return raw ? JSON.parse(raw) : initialNotes;
    } catch {
      return initialNotes;
    }
  });

  // const [notes, setNotes] = useState(initialNotes);
  const [showModal, setShowModal] = useState(false);
  // put the box visibility to false first

  // The effect attempts to save the notes array into localStorage as a JSON string whenever notesa array changes
  useEffect(() => {
    // persist notes when they change
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    } catch {
      // ignore storage errors
    }
  }, [notes]);

  const handleSave = (payload: {
    title: string;
    preview: string;
    category: string;
  }) => {
    const newNote = {
      id: Date.now(),
      title: payload.title,
      category: payload.category,
      preview: payload.preview || "",
      updatedAt: "Just now",
    };
    setNotes((prev) => [newNote, ...prev]);
    setShowModal(false);
  };

  return (
    <section className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <div>
          {/* <h1 className=" text-xl font-semibold mb-1">Notes</h1> */}
          <p className="text-slate-400 text-xl">
            Create,edit and organize your notes.Later we’ll connect this to the
            AI assistant and backend.
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="inline-flex items-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow shadow-indigo-500/30 hover:bg-indigo-500 transition"
        >
          + New Note
        </button>
      </div>

      {/* Notes list area (placeholder for now)
      <div className="border border-slate-800 rounded-xl bg-slate-900/50 p-6 text-sm text-slate-400">
        No notes yet. Click{" "}
        <span className="text-indigo-400 font-medium">New Note</span> to create
        your first one.
      </div> */}

      {/* Notes grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {notes.map((note) => (
          <article
            key={note.id}
            onClick={() => {
              navigate(`/notes/${note.id}`);
            }}
            className="bg-slate-900/60 border-2 border-slate-800 rounded-xl p-4
            hover:border-indigo-800
            hover:bg-slate-900 transition"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <h2 className="text-sm font-semibold text-slate-50">
                {note.title}
              </h2>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-200 uppercase tracking-wide">
                {note.category}
              </span>
            </div>

            <p className="text-xs text-slate-400 mb-3 h-10 overflow-hidden">
              {note.preview}
            </p>

            <p className="text-[11px] text-slate-500">
              Updated {note.updatedAt}
            </p>
          </article>
        ))}
      </div>

      {/* New Note Modal */}
      {/* User clicks + New Note */}

      {/* setShowModal(true) → modal appears */}

      {/* React renders this: */}
      {showModal && (
        <NewNoteModal onClose={() => setShowModal(false)} onSave={handleSave} />
      )}
    </section>
  );
};

export default NotesPage;
