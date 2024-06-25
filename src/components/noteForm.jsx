"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const NoteForm = () => {
  const router = useRouter();

  const [name, setDate] = useState("");
  const [details, setContent] = useState("");
  const [mood, setMood] = useState("");

  const moodOptions = ["🔥", "💗", "⭐", "💧"];

  async function handleCreateData() {
    await fetch("https://v1.appbackend.io/v1/rows/BG88mQ6xVSe5", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([{ name, details, mood }]),
    });

    router.refresh();
    setDate("");
    setContent("");
    setMood("");
  }

  return (
    <div className="space-y-4 mb-8">
      <textarea 
        value={name} 
        onChange={(e) => setDate(e.target.value)} 
        placeholder="Enter Date" 
        className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
      ></textarea>
      <textarea 
        value={details} 
        onChange={(e) => setContent(e.target.value)} 
        placeholder="Enter Details" 
        className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
      ></textarea>
      <select 
        value={mood} 
        onChange={(e) => setMood(e.target.value)} 
        className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
      >
        <option value="" disabled>Select Mood</option>
        {moodOptions.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    <button 
    onClick={handleCreateData} 
    className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition duration-200"
    >Create</button>
    </div>
  );
};
