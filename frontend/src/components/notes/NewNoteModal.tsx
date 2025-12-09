import React, { useState } from "react";

// The Props type is just a way of defining all the “controls” or features your box has.
type Props = {
  initialOpen?: boolean;
  onClose: () => void;
  onSave: (payload: {
    title: string;
    preview: string;
    category: string;
  }) => void;
};

// React.FC<Props> — tells TypeScript this is a React Functional Component which expects props shaped by the Props type.
const NewNoteModal: React.FC<Props> = ({ onClose, onSave, initialOpen }) => {
  // useState("") creates a stateful value inside the component.
  // title is the current state (initially an empty string).
  // setTitle is the function to update the title.
  const [title, setTitle] = useState("");
  const [preview, setPreview] = useState("");
  const [category, setCategory] = useState("Study");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-xs"
        onClick={onClose}
      />

      {/* modal */}
      <div className="relative z-10 w-full max-w-2xl rounded-xl bg-slate-900/80 border border-slate-800 p-6 shadow-lg">
        <header className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-slate-50">New Note</h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-200 text-sm"
          >
            Close
          </button>
        </header>

        <div className="space-y-4">
          <div>
            <label className="block text-xs text-slate-400 mb-1">Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-md border border-slate-700 bg-slate-800/60 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Enter a short title"
            />
          </div>

          <div>
            <label className="block text-xs text-slate-400 mb-1">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="rounded-md border border-slate-700 bg-slate-800/60 px-3 py-2 text-sm text-slate-100"
            >
              <option>Study</option>
              <option>Work</option>
              <option>Project</option>
              <option>Dev</option>
              <option>Personal</option>
            </select>
          </div>

          {/* summary box  */}
          <div>
            <label className="block text-xs text-slate-400 mb-1">Content</label>
            <textarea
              value={preview}
              onChange={(e) => setPreview(e.target.value)}
              rows={6}
              // height stays fixed of the box
              className="w-full rounded-md border border-slate-700 bg-slate-800/60 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Write a short note or paste a summary..."
            />
          </div>
        </div>

        {/* footer cancel and save buttons  */}
        <footer className="mt-5 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-md px-4 py-2 text-sm bg-slate-800 text-slate-300 hover:bg-slate-700"
          >
            Cancel
          </button>

          <button
            onClick={() => {
              if (title.trim().length === 0) return; // simple validation
              onSave({
                title: title.trim(),
                preview: preview.trim(),
                category,
              });
              setTitle("");
              setPreview("");
            }}
            className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500"
          >
            Save note
          </button>
        </footer>
      </div>
    </div>
  );
};

export default NewNoteModal;
