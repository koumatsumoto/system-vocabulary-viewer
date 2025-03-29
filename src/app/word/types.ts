import { z } from "zod";

const wordDefinitionSchema = z.object({
  text: z.string().min(1),
  reference: z.string().min(1).optional(),
});

export const wordDataSchema = z.object({
  number: z.string().min(1),
  name: z.string().min(1),
  alias: z
    .tuple([z.string().min(1)])
    .rest(z.string().min(1))
    .optional(),
  definitions: z.array(wordDefinitionSchema).min(1),
  confer: z
    .tuple([z.string().min(1)])
    .rest(z.string().min(1))
    .optional(),
  example: z.string().min(1).optional(),
  note: z.string().min(1).optional(),
});

export type WordData = z.infer<typeof wordDataSchema>;
