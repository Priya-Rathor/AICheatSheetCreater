import { useState } from 'react';
import { Wand2, Download, Loader2 } from 'lucide-react';
import jsPDF from 'jspdf';
import { handleGenerate } from '../../api/handleGenerate';

export default function CheatSheetApp() {
  const [topic, setTopic] = useState('');
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [cheatSheet, setCheatSheet] = useState('');

  const [response,setResponse] = useState({})
   
  const handleDownload = () => {
    const doc = new jsPDF();
    doc.setFontSize(12);
    const lines = doc.splitTextToSize(cheatSheet, 180);
    doc.text(lines, 10, 20);
    doc.save(`${topic || 'cheatsheet'}.pdf`);
  };

  console.log("response is",response)

  return (
    <div className="h-[calc(100vh-80px)] flex flex-col md:flex-row overflow-hidden">
      {/* Prompt Sidebar - Left */}
      <aside className="md:w-80 bg-gradient-to-br from-white via-indigo-50 to-purple-100 shadow-md border-r p-6 space-y-6 overflow-hidden">
        <h2 className="text-2xl font-bold text-indigo-700">🧠 Custom Prompt</h2>
        <textarea
          placeholder="e.g., Only include functions and examples"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows={16}
          className="w-full h-[calc(100dvh-250px)] border border-indigo-300 bg-white rounded-lg p-3 text-base resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
        />
        <button
          onClick={() => setPrompt('')}
          className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:from-pink-600 hover:to-purple-600 transition"
        >
          ✨ Clear Prompt
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex flex-col items-center px-6 py-10 overflow-hidden">
        <div className="w-full max-w-6xl">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-800 mb-2">✨ AI Cheat Sheet Creator</h1>
            <p className="text-gray-600 text-lg">Create beautiful, helpful cheat sheets instantly for any programming topic or library.</p>
          </div>

          {/* Search Input */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-4">
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Enter a topic like Pandas, Git, Regex..."
              className="w-full md:w-2/3 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
            <button
              onClick={()=>handleGenerate(topic,setResponse)}
              disabled={loading || !topic}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-lg flex items-center gap-2 font-medium shadow-md"
            >
              <Wand2 className="w-5 h-5" />
              {loading ? 'Generating...' : 'Generate'}
            </button>
            <button
              onClick={handleDownload}
              disabled={!cheatSheet}
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg flex items-center gap-2 font-medium shadow-md"
            >
              <Download className="w-5 h-5" /> Download PDF
            </button>
          </div>

          {/* Output Card */}
          <div className="bg-white border shadow-xl rounded-xl p-6 mb-10 w-full">
            <h2 className="text-2xl font-bold text-indigo-700 mb-4 text-center">📄 Output Preview</h2>
            <div className="bg-gray-100 border border-indigo-200 rounded-lg p-4 h-[50vh] overflow-y-auto text-sm whitespace-pre-wrap">
              {loading ? (
                <Loader2 className="animate-spin text-indigo-500 w-8 h-8 mx-auto my-6" />
              ) : cheatSheet ? (
                cheatSheet
              ) : (
                <span className="text-gray-400">Generated content will appear here...</span>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Popular Topics - Right */}
      <aside className="md:w-80 bg-gradient-to-br from-purple-100 via-indigo-50 to-white shadow-md border-l p-6 space-y-4 overflow-hidden">
        <h2 className="text-2xl font-bold text-indigo-700 text-center mb-4">🚀 Popular Topics</h2>
        <div className="grid grid-cols-1 gap-4">
          {['Python Basics', 'React.js', 'Git Commands', 'Regex', 'Docker CLI', 'SQL Queries'].map((tool, index) => (
            <div
              key={index}
              className="bg-gradient-to-tr from-indigo-500 to-purple-500 text-white p-4 rounded-xl shadow-lg hover:scale-105 transition-transform cursor-pointer"
            >
              <h3 className="text-lg font-semibold mb-1">{tool}</h3>
              <p className="text-xs">Click to generate a reference sheet with syntax, examples, and key points.</p>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}