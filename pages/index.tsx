import { Header } from '@/components/Header';
import { NoteInput } from '@/components/NoteInput';
import { trpc } from '@/lib/client';

export default function Home() {
  const notes = trpc.allNotes.useQuery();
  const createNote = trpc.createNote.useMutation();

  const onSubmit = (title: string, content: string) => {
    createNote.mutate({ title, content });
  };

  return (
    <div className="flex flex-col">
      <Header />

      <NoteInput onSubmit={onSubmit} />
    </div>
  );
}
