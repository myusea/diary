import { NoteForm } from "@/components/noteForm";
import { NoteCard } from "@/components/noteCard";

export default async function Home() {
  const res = await fetch("https://v1.appbackend.io/v1/rows/BG88mQ6xVSe5", { cache: "no-store" });
  const { data } = await res.json();
  console.log(data);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white py-4">
        <div className="container mx-auto flex justify-center items-center px-4">
          <h1 className="text-4xl font-semibold text-gray-800">Dear Diary</h1>
        </div>
      </header>
      <main className="container mx-auto py-8 px-4">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 text-center">Write a New Entry</h2>
          <NoteForm />
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 text-center">Diary Entries</h2>
          <div className="space-y-6">
            {data.map((item) => (
              <NoteCard key={item._id} item={item} />
            ))}
          </div>
        </section>
      </main>
      <footer className="bg-white py-4 shadow">
        <div className="container mx-auto text-center text-gray-600">
          <p class="text-sm">© Adelia Tiara 2024. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
