import prisma from '../prisma';

export const getAllNotes = () => {
  return prisma.note.findMany({});
};
