// types.ts
export interface CommentType {
  id: string;
  text: string;
  author: string;
  children: CommentType[];
}
