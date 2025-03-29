"use client";

import React from "react";
import WordListItem from "./WordListItem";
import { Word } from "./schema";

interface WordListProps {
  words: Word[];
}

export default function WordList({ words }: WordListProps) {
  return (
    <div className="space-y-6">
      {words.map((word) => (
        <WordListItem key={word.number} word={word} />
      ))}
    </div>
  );
}
