import React, { useState } from "react";
import { useCommentTree } from "./hooks/useCommentTree";
import type { CommentType } from "./types/types";
import Comment from "./components/Comment";

const App: React.FC = () => {
  const { insertNode, updateNode, deleteNode } = useCommentTree();

  const [comments, setComments] = useState<CommentType>({
    id: "root",
    text: "This is the first comment 🎉",
    author: "Admin",
    children: [],
  });

  const handleReply = (parentId: string, text: string) => {
    const newComment = {
      id: Date.now().toString(),
      text,
      author: "User",
    };
    setComments((prev) => insertNode(prev, parentId, newComment));
  };

  const handleEdit = (id: string, text: string) => {
    setComments((prev) => updateNode(prev, id, text));
  };

  const handleDelete = (id: string) => {
    const updated = deleteNode(comments, id);
    if (updated) setComments(updated);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-2xl font-bold text-center text-blue-400 mb-6">
        💬 Nested Comments (Dark Mode)
      </h1>
      <div className="max-w-2xl mx-auto">
        <Comment
          comment={comments}
          onReply={handleReply}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default App;
