import { Header } from '@/components/Header';
import { NoteCard } from '@/components/NoteCard';
import { NoteInput } from '@/components/NoteInput';
import { trpc } from '@/lib/client';

export default function Home() {
  const notes = trpc.allNotes.useQuery();
  const createNote = trpc.createNote.useMutation();

  const onSubmit = (title: string, content: string) => {
    createNote.mutate(
      { title, content },
      {
        onSuccess: () => {
          notes.refetch();
        },
      }
    );
  };

  return (
    <div className="flex flex-col">
      <Header />

      <NoteInput onSubmit={onSubmit} />

      <div className="flex flex-col mt-8 gap-4 px-4">
        {notes.data?.map((v) => (
          <NoteCard key={v.id} {...v} />
        ))}
      </div>
    </div>
  );
}
