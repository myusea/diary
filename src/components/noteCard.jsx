"use client";
import { useRouter } from "next/navigation";

export const NoteCard = ({ item }) => {
  const router = useRouter();

  async function handleDeleteData() {
    await fetch("https://v1.appbackend.io/v1/rows/BG88mQ6xVSe5", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([item._id]),
    });
    router.refresh();
  }

  return (
    <div key={item.id} className="flex items-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="text-4xl mr-4">{item.mood}</div>
      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
        <p className="text-sm text-gray-600">{item.details}</p>
      </div>
      <button onClick={handleDeleteData} className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">Delete</button>
    </div>
  );
};
