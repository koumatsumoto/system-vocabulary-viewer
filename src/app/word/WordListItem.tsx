"use client";

import React from "react";
import { Word } from "./schema";

export default function WordListItem({ word }: { word: Word }) {
  return (
    <div className="mx-auto bg-white rounded-lg shadow-lg p-5 text-left mb-8">
      <span className="text-sm text-gray-500 block mb-2">{word.number}</span>
      <h2 className="text-2xl text-gray-800 font-bold mb-2">{word.name}</h2>
      {word.alias && <h3 className="text-lg text-gray-600 mb-4">({word.alias.join(", ")})</h3>}

      <div className="space-y-4">
        <div className="my-4">
          {word.definitions.map((def, index) => (
            <div key={index} className="my-2">
              <p className="text-base text-gray-800">
                {index + 1}. {def.text}
              </p>
              {def.reference && <p className="text-sm text-gray-500 mt-2">Reference: {def.reference}</p>}
            </div>
          ))}
        </div>

        <div className="mt-8">
          {word.example && (
            <div className="py-2 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-700">Example: {word.example}</p>
            </div>
          )}

          {word.confer && (
            <div className="py-2 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-700">c.f. {word.confer.join(", ")}</p>
            </div>
          )}

          {word.note && (
            <div className="py-2 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-700 italic">Note: {word.note}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
