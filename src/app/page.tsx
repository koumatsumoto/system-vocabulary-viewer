import WordSearch from "./word/search";
import words from "./data.json" assert { type: "json" };
import { wordDataSchema } from "./word/types";
import { z } from "zod";

const typedWords = z.array(wordDataSchema).parse(words);

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">System Development Vocabulary</h1>
      <WordSearch words={typedWords} />
    </div>
  );
}
