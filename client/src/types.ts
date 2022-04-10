export interface NoteProps {
  id: number;
  body: string;
  created: string;
  updated?: string;
}

export interface Notes {
  note: NoteProps;
}