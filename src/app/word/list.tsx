"use client";

import React from "react";
import Word from "./word";
import { WordData } from "./types";

interface WordListProps {
  words: WordData[];
}

export default function WordList({ words }: WordListProps) {
  return (
    <div className="space-y-6">
      {words.map((word) => (
        <Word key={word.number} word={word} />
      ))}
    </div>
  );
}
