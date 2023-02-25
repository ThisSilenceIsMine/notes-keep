import prisma from '../prisma';

export const deleteNote = (id: string) => {
  return prisma.note.delete({
    where: {
      id,
    },
  });
};
