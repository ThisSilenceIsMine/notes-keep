import { initTRPC } from '@trpc/server';
import { getAllNotes } from '../getAllNotes';
import { z } from 'zod';
import { createNote } from '../createNote';
import { deleteNote } from '../deleteNote';

const t = initTRPC.create();
const router = t.router;

export const appRouter = router({
  allNotes: t.procedure.query(async () => {
    const notes = await getAllNotes();
    console.log({ notes });
    return notes;
  }),
  createNote: t.procedure
    .input(
      z.object({
        title: z.string().min(1).optional(),
        content: z.string().min(5),
      })
    )
    .mutation(async (req) => {
      const res = await createNote(req.input);

      return res;
    }),

  deleteNote: t.procedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async (req) => {
      const { id } = req.input;

      const res = await deleteNote(id);

      return res;
    }),
});

export type AppRouter = typeof appRouter;
