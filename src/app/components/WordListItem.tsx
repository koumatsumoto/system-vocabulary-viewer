"use client";

import React from "react";
import { Word } from "../data/schema";
import { useLanguageStore } from "../state/language";

interface WordListItemProps {
  word: Word;
}

export default function WordListItem({ word }: WordListItemProps) {
  const { language } = useLanguageStore();

  return (
    <div className="mx-auto bg-white rounded-lg shadow-lg p-5 text-left mb-8">
      <span className="text-sm text-gray-500 block mb-2">{word.number}</span>
      <div className="flex justify-between items-start">
        <h2 className="text-2xl text-gray-800 font-bold mb-2">{language === "en" ? word.name : word.name_ja}</h2>
        {word.categories && word.categories.length > 0 && (
          <div className="flex gap-2 flex-wrap justify-end">
            {word.categories.map((category, index) => (
              <span key={index} className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">
                {category}
              </span>
            ))}
          </div>
        )}
      </div>
      {word.alias && <h3 className="text-lg text-gray-600 mb-4">({word.alias.join(", ")})</h3>}

      <div className="space-y-4">
        <div className="my-4">
          {word.definitions.map((def, index) => (
            <div key={index} className="my-2">
              <p className="text-base text-gray-800">
                {index + 1}. {language === "en" ? def.text : def.textJa}
              </p>
              {def.reference && <p className="text-sm text-gray-500 mt-2">Reference: {def.reference}</p>}
            </div>
          ))}
        </div>

        <div className="mt-8">
          {(language === "en" ? word.example : word.exampleJa) && (
            <div className="py-2 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-700">
                {language === "en" ? "Example:" : "例:"} {language === "en" ? word.example : word.exampleJa}
              </p>
            </div>
          )}

          {word.confer && (
            <div className="py-2 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-700">c.f. {word.confer.join(", ")}</p>
            </div>
          )}

          {(language === "en" ? word.note : word.noteJa) && (
            <div className="py-2 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-700 italic">
                {language === "en" ? "Note:" : "備考:"} {language === "en" ? word.note : word.noteJa}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
