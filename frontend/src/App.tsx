import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import DashboardPage from "./pages/DashboardPage";
import AuthPage from "./pages/AuthPage";
import NotesPage from "./pages/NotesPage";
import DocumentsPage from "./pages/DocumentsPage";
import AIAssistantPage from "./pages/AIAssistantPage";
import SearchPage from "./pages/SearchPage";
import "./App.css";
import NoteDetailPage from "./pages/NoteDetailPage";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Fixed navbar at top */}
      <Navbar />

      {/* Page content is pushed down by padding-top so it doesn't go under navbar */}
      <main className="pt-20 px-6 max-w-6xl mx-auto pb-10">
        <Routes>
          <Route path="/notes/:id" element={<NoteDetailPage />} />
          <Route path="/" element={<DashboardPage />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/documents" element={<DocumentsPage />} />
          <Route path="/ai" element={<AIAssistantPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
        {/* <DashboardPage /> */}
        {/* <h1 className="text-2xl font-semibold mb-2">Dashboard (placeholder)</h1>
        <p className="text-slate-400 text-sm">
          This is temporary content just to test the layout.replace this
          with the real Dashboard / Hero section next.
        </p> */}
      </main>
    </div>
  );
}

export default App;
