"use client";

import React, { useState, useMemo } from "react";
import { Word } from "./schema";
import WordList from "./WordList";

interface WordSearchProps {
  words: Word[];
}

export default function WordSearch({ words }: WordSearchProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredWords = useMemo(() => {
    const normalizedSearch = searchTerm.toLowerCase();
    if (searchTerm.length < 3) return [];
    return words.filter((word) => word.name.toLowerCase().includes(normalizedSearch));
  }, [words, searchTerm]);

  const showError = searchTerm.length > 0 && searchTerm.length < 3;

  return (
    <div>
      <div className="mb-6">
        <input
          type="text"
          maxLength={20}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search terms"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {showError && <p className="mt-2 text-red-500 text-sm">Please enter at least 3 characters</p>}
      </div>
      {searchTerm.length >= 3 && <div className="mb-4 text-gray-600">{filteredWords.length} results found</div>}
      <WordList words={filteredWords} />
    </div>
  );
}
