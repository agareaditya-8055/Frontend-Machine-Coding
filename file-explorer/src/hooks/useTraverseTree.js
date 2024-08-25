const useTraverseTree = () => {

    const insertNode = (tree, folderId, item, isFolder) => {
        if (tree.id === folderId && tree.isFolder) {
            tree.items.unshift({
                id: new Date().getTime(),
                name: item,
                isFolder,
                items: []
            });
            return tree;
        }

        let latestNode = tree.items.map((obj) => {
            return insertNode(obj, folderId, item, isFolder);
        });

        return { ...tree, items: latestNode };
    };

    const deleteNode = (tree, nodeId) => {
        if (tree.id === nodeId) {
            return null;
        }

        tree.items = tree.items.map(item => deleteNode(item, nodeId)).filter(item => item !== null);

        return tree;
    };

    const updateNode = (tree, nodeId, newName) => {
        if (tree.id === nodeId) {
            tree.name = newName;
            return tree;
        }

        let latestNode = tree.items.map((obj) => {
            return updateNode(obj, nodeId, newName);
        });

        return { ...tree, items: latestNode };
    };

    return { insertNode, deleteNode, updateNode };
};

export default useTraverseTree;
