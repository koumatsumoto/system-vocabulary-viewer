"use client";

import React from "react";
import WordListItem from "./WordListItem";
import { Word } from "./schema";
import { Language } from "../page";

interface WordListProps {
  words: Word[];
  language: Language;
}

export default function WordList({ words, language }: WordListProps) {
  return (
    <div className="space-y-6">
      {words.map((word) => (
        <WordListItem key={word.number} word={word} language={language} />
      ))}
    </div>
  );
}
