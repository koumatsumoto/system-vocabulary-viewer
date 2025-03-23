'use client';

import React from "react";
import { WordData } from "./types";

export default function Word({ word }: { word: WordData }) {
  return (
    <div className="mb-8 p-4 border border-gray-200 rounded-lg">
      <div className="flex items-baseline gap-4 mb-4">
        <span className="text-sm text-gray-500">{word.number}</span>
        <h2 className="text-xl font-bold">{word.name}</h2>
        {word.alias && <span className="text-gray-600">({word.alias})</span>}
      </div>

      <div className="space-y-3">
        {word.definitions.map((def, index) => (
          <div key={index} className="text-gray-800">
            <p>{def.text}</p>
            {def.reference && <p className="text-sm text-gray-500 mt-1">出典: {def.reference}</p>}
          </div>
        ))}

        {word.example && (
          <div className="mt-4 p-3 bg-gray-50 rounded">
            <p className="text-sm text-gray-700">例: {word.example}</p>
          </div>
        )}

        {word.confer && <p className="text-sm text-gray-600 mt-2">参照: {word.confer}</p>}

        {word.note && <p className="text-sm text-gray-600 italic mt-2">注: {word.note}</p>}
      </div>
    </div>
  );
}
