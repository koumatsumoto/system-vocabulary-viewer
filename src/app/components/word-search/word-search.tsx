'use client';

import React, { useState, useMemo } from "react";
import { WordData } from "../word/types";
import WordList from "./word-list";

interface WordSearchProps {
  words: WordData[];
}

export default function WordSearch({ words }: WordSearchProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredWords = useMemo(() => {
    const normalizedSearch = searchTerm.toLowerCase();
    return searchTerm
      ? words.filter((word) => word.name.toLowerCase().includes(normalizedSearch))
      : [];
  }, [words, searchTerm]);

  return (
    <div>
      <div className="mb-6">
        <input
          type="text"
          maxLength={20}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="用語を検索"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <WordList words={filteredWords} />
    </div>
  );
}
