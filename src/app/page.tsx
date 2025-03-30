"use client";

import WordSearch from "./word/WordSearch";
import data from "./data.json" assert { type: "json" };
import { wordSchema } from "./word/schema";
import { z } from "zod";
import { useState } from "react";
import Image from "next/image";

const words = z.array(wordSchema).parse(data);

export type Language = "en" | "ja";

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">System Development Vocabulary</h1>
        <button
          onClick={() => setLanguage(language === "en" ? "ja" : "en")}
          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-800 flex items-center gap-2 cursor-pointer"
        >
          <Image src="./globe.svg" alt="Language" width={20} height={20} className="w-5 h-5" />
          {language === "en" ? "日本語" : "English"}
        </button>
      </div>
      <WordSearch words={words} language={language} />
    </div>
  );
}
