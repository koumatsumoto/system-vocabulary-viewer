import data from "./data.json" assert { type: "json" };
import { wordSchema } from "./schema";
import { z } from "zod";

export function loadWords() {
  const words = z.array(wordSchema).parse(data);

  return words;
}
