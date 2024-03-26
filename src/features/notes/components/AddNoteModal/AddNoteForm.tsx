import type { FC, MouseEventHandler } from 'react';

interface AddNoteFormProps {
  title: string;
  handleTitleChange: (title: string) => void;
  description: string;
  handleDescriptioChange: (description: string) => void;
  handleSubmit: MouseEventHandler<HTMLButtonElement>;
}

export const AddNoteForm: FC<AddNoteFormProps> = ({
  title,
  description,
  handleTitleChange,
  handleDescriptioChange,
  handleSubmit,
}) => {
  return (
    <form style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', gap: 8 }}>
      <label>title</label>
      <input
        value={title}
        onChange={(e) => {
          handleTitleChange(e.target.value);
        }}
      />

      <label>description</label>
      <textarea
        value={description}
        onChange={(e) => {
          handleDescriptioChange(e.target.value);
        }}
      />

      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};
