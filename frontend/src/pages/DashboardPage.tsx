const DashboardPage = () => {
  return (
    <section>
      <div className="mb-9">
        <p className="text-xss font-semibold uppercase tracking-[0.5em] text-indigo-400 mb-10">
          Your AI Workspace
        </p>

        <h1 className="text-3xl md:text-3xl font-semibold text-slate-50 mb-3">
          Organize notes & documents with AI assistance.
        </h1>

        <p className="text-sm md:text-base text-slate-400 max-w-2xl">
          Create structured notes, upload PDFs, and let Gemini summarize,
          categorize and search everything from one clean interface.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
          <p className="text-xs uppercase font-semibold text-slate-400 mb-1">
            Notes
          </p>
          <h2 className="text-sm font-semibold text-slate-50 mb-1">
            All Notes
          </h2>
          <p className="text-xs text-slate-400">
            Create, edit and tag your notes with AI-ready content.
          </p>
        </div>

        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
          <p className="text-xs uppercase font-semibold text-slate-400 mb-1">
            Documents
          </p>
          <h2 className="text-sm font-semibold text-slate-50 mb-1">
            Uploaded Files
          </h2>
          <p className="text-xs text-slate-400">
            Upload PDFs and text files and make them fully searchable.
          </p>
        </div>

        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
          <p className="text-xs uppercase font-semibold text-slate-400 mb-1">
            AI Assistant
          </p>
          <h2 className="text-sm font-semibold text-slate-50 mb-1">
            Ask Gemini
          </h2>
          <p className="text-xs text-slate-400">
            Get summaries, explanations and Q&amp;A over your content.
          </p>
        </div>

        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
          <p className="text-xs uppercase font-semibold text-slate-400 mb-1">
            Search
          </p>
          <h2 className="text-sm font-semibold text-slate-50 mb-1">
            Unified Search
          </h2>
          <p className="text-xs text-slate-400">
            Instantly find anything using full-text search and filters.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
