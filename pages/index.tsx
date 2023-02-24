import { Header } from '@/components/Header';
import { NoteInput } from '@/components/NoteInput';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />

      <NoteInput />
    </div>
  );
}
