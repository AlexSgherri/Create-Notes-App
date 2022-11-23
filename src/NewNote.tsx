import React from "react";
import { NoteData, Tag } from "./App";
import NoteForm from "./NoteForm";

type NewNoteProps = {
  onSubmit: (data: NoteData) => void
  onAddTag: (tag: Tag) => void
  availableTags: Tag[]
};

function NewNote({ onSubmit, onAddTag, availableTags }: NewNoteProps) {
  return (
    <>
      <h1 className="mb-4">NewNote</h1>
      <NoteForm onAddTag={onAddTag} availableTags={availableTags} onSubmit={onSubmit} />
    </>
  );
}

export default NewNote;
