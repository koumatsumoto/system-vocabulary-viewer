"use client";

import Image from "next/image";
import { useLanguageStore } from "../state/language";

export function Header() {
  const { language, toggleLanguage } = useLanguageStore();

  return (
    <>
      <h1 className="text-2xl font-bold px-4 mb-4">System Development Vocabulary</h1>
      <header className="sticky top-0 z-50">
        <div className="bg-white py-4">
          <div className="max-w-7xl mx-auto px-4 flex justify-end">
            <button
              onClick={() => toggleLanguage()}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-800 flex items-center gap-2 cursor-pointer"
            >
              <Image src="./globe.svg" alt="Language" width={20} height={20} className="w-5 h-5" />
              {language === "en" ? "日本語" : "English"}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
