"use client";

import React from "react";
import { WordData } from "./types";

export default function Word({ word }: { word: WordData }) {
  return (
    <div className="mx-auto bg-white rounded-lg shadow-lg p-5 text-left mb-8">
      <span className="text-sm text-gray-500 block mb-2">{word.number}</span>
      <h2 className="text-2xl text-gray-800 font-bold mb-2">{word.name}</h2>
      {word.alias && <h3 className="text-lg text-gray-600 mb-4">({word.alias})</h3>}

      <div className="space-y-12">
        {word.definitions.map((def, index) => (
          <div key={index} className="text-gray-800">
            <p className="text-base">{def.text}</p>
            {def.reference && <p className="text-sm text-gray-500 mt-2">Reference: {def.reference}</p>}
          </div>
        ))}

        {word.example && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-700">Example: {word.example}</p>
          </div>
        )}

        {word.confer && <p className="text-sm text-gray-600 mt-4">c.f. {word.confer}</p>}

        {word.note && <p className="text-sm text-gray-600 italic mt-4">Note: {word.note}</p>}
      </div>
    </div>
  );
}
