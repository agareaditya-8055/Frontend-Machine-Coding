
import type { CommentType } from "../types/types";

export const useCommentTree = () => {
  const insertNode = (
    tree: CommentType,
    parentId: string,
    newComment: Omit<CommentType, "children">
  ): CommentType => {
    if (tree.id === parentId) {
      return {
        ...tree,
        children: [
          { ...newComment, children: [] },
          ...tree.children,
        ],
      };
    }

    return {
      ...tree,
      children: tree.children.map((child) =>
        insertNode(child, parentId, newComment)
      ),
    };
  };

  const updateNode = (
    tree: CommentType,
    nodeId: string,
    newText: string
  ): CommentType => {
    if (tree.id === nodeId) {
      return { ...tree, text: newText };
    }

    return {
      ...tree,
      children: tree.children.map((child) =>
        updateNode(child, nodeId, newText)
      ),
    };
  };

  const deleteNode = (tree: CommentType, nodeId: string): CommentType | null => {
    if (tree.id === nodeId) {
      return null;
    }

    return {
      ...tree,
      children: tree.children
        .map((child) => deleteNode(child, nodeId))
        .filter((c): c is CommentType => c !== null),
    };
  };

  return { insertNode, updateNode, deleteNode };
};
