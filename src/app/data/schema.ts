import { z } from "zod";

export const wordSchema = z.object({
  number: z.string().min(1),
  name: z.string().min(1),
  alias: z
    .tuple([z.string().min(1)])
    .rest(z.string().min(1))
    .optional(),
  definitions: z
    .array(
      z.object({
        text: z.string().min(1),
        textJa: z.string().min(1),
        reference: z.string().min(1).optional(),
      }),
    )
    .min(1),
  confer: z
    .tuple([z.string().min(1)])
    .rest(z.string().min(1))
    .optional(),
  example: z.string().min(1).optional(),
  exampleJa: z.string().min(1).optional(),
  note: z.string().min(1).optional(),
  noteJa: z.string().min(1).optional(),
});

export type Word = z.infer<typeof wordSchema>;
