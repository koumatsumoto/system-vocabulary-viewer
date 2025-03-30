"use client";

import Image from "next/image";
import { useLanguageStore } from "../state/language";

export function Header() {
  const { language, toggleLanguage } = useLanguageStore();

  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-2xl font-bold">System Development Vocabulary</h1>
      <button
        onClick={() => toggleLanguage()}
        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-800 flex items-center gap-2 cursor-pointer"
      >
        <Image src="./globe.svg" alt="Language" width={20} height={20} className="w-5 h-5" />
        {language === "en" ? "日本語" : "English"}
      </button>
    </div>
  );
}
