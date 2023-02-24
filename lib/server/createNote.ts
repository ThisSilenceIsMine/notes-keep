import { Prisma } from '@prisma/client';
import prisma from '../prisma';

export const createNote = ({ title, content }: Prisma.NoteCreateInput) =>
  prisma.note.create({
    data: {
      title,
      content,
    },
  });
