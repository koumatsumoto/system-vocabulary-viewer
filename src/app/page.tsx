import WordSearch from "./word/WordSearch";
import data from "./data.json" assert { type: "json" };
import { wordSchema } from "./word/schema";
import { z } from "zod";

const words = z.array(wordSchema).parse(data);

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">System Development Vocabulary</h1>
      <WordSearch words={words} />
    </div>
  );
}
