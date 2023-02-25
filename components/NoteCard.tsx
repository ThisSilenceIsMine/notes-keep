import { Prisma } from '@prisma/client';

type Props = Prisma.NoteCreateInput;

export const NoteCard = ({ title, content }: Props) => {
  return (
    <div className="card cursor-pointer card-bordered border-neutral hover:bg-neutral">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};
