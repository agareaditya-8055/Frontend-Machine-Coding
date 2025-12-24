import React, { useState } from "react";
import type { CommentType } from "../types/types";

interface CommentProps {
  comment: CommentType;
  onReply: (parentId: string, text: string) => void;
  onEdit: (id: string, text: string) => void;
  onDelete: (id: string) => void;
}

const Comment: React.FC<CommentProps> = ({ comment, onReply, onEdit, onDelete }) => {
  const [replying, setReplying] = useState(false);
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(comment.text);
  const [replyText, setReplyText] = useState("");

  return (
    <div className="ml-4 mt-4">
      <div className="bg-gray-800 p-4 rounded-xl shadow-md border border-gray-700">
        {editing ? (
          <div className="flex gap-2">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="flex-1 bg-gray-900 text-gray-200 px-3 py-2 rounded-md focus:outline-none"
            />
            <button
              onClick={() => { onEdit(comment.id, text); setEditing(false); }}
              className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded-md"
            >
              Save
            </button>
          </div>
        ) : (
          <p className="text-gray-200">
            <span className="font-semibold text-blue-400">{comment.author}</span>: {comment.text}
          </p>
        )}

        {/* Actions */}
        <div className="flex gap-4 text-sm mt-2 text-gray-400">
          <button onClick={() => setReplying(!replying)} className="hover:text-blue-400">
            Reply
          </button>
          <button onClick={() => setEditing(!editing)} className="hover:text-yellow-400">
            Edit
          </button>
          <button onClick={() => onDelete(comment.id)} className="hover:text-red-400">
            Delete
          </button>
        </div>

        {/* Reply Box */}
        {replying && (
          <div className="mt-3 flex gap-2">
            <input
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="Write a reply..."
              className="flex-1 bg-gray-900 text-gray-200 px-3 py-2 rounded-md focus:outline-none"
            />
            <button
              onClick={() => {
                if (replyText.trim()) {
                  onReply(comment.id, replyText);
                  setReplyText("");
                  setReplying(false);
                }
              }}
              className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
            >
              Post
            </button>
          </div>
        )}
      </div>

      {/* Render Children */}
      <div className="ml-6 border-l border-gray-700">
        {comment.children.map((child) => (
          <Comment
            key={child.id}
            comment={child}
            onReply={onReply}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Comment;
