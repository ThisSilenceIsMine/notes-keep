import { useOnClickOutside } from '@/lib/hooks/useClickOutside';
import { useRef, useState } from 'react';

type Props = {
  onSubmit?: (title: string, description: string) => void;
};

export const NoteInput = ({ onSubmit }: Props) => {
  const [mode, setMode] = useState<'view' | 'edit'>('view');

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const formRef = useRef<HTMLFormElement>(null);

  useOnClickOutside(formRef, () => {
    setMode('view');

    onSubmit?.(title, description);
  });

  return (
    <>
      {mode === 'view' ? (
        <input
          onFocus={() => setMode('edit')}
          className="input input-bordered mx-8"
          placeholder="Note..."
        />
      ) : (
        <form
          className="card card-bordered mx-8 border-neutral gap-4 p-1"
          ref={formRef}
        >
          <input
            className="input input-ghost focus:outline-none"
            placeholder="Title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <hr className="border border-t-[1px] border-neutral" />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="textarea focus:outline-none"
            placeholder="Description..."
          />
        </form>
      )}
    </>
  );
};
