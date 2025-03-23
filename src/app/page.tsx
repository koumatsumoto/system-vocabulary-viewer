import WordSearch from "./word/search";
import words from "./data.json";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">システム開発用語集</h1>
      <WordSearch words={words} />
    </div>
  );
}
