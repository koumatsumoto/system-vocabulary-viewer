"use client";

import WordSearch from "./components/WordSearch";
import { Header } from "./components/Header";
import { loadWords } from "./data/loader";

const words = loadWords();

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Header />
      <WordSearch words={words} />
    </div>
  );
}
