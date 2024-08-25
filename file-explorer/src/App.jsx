import React, { useState } from 'react';
import explorer from './data/folderData';
import Folder from './components/Folder';
import useTraverseTree from './hooks/useTraverseTree';

const App = () => {
    const [explorerData, setExplorerData] = useState(explorer);

    const { insertNode, deleteNode, updateNode } = useTraverseTree();

    const handleInsertNode = (folderId, item, isFolder) => {
        const finalTree = insertNode(explorerData, folderId, item, isFolder);
        setExplorerData({ ...finalTree });
    };

    const handleDeleteNode = (nodeId) => {
        const finalTree = deleteNode(explorerData, nodeId);
        setExplorerData({ ...finalTree });
    };

    const handleUpdateNode = (nodeId, newName) => {
        const finalTree = updateNode(explorerData, nodeId, newName);
        setExplorerData({ ...finalTree });
    };

    return (
        <div className='bg-gray-900 w-full max-w-[1280px] mx-auto min-h-screen p-5 text-gray-50'>
            <h1 className='text-center font-medium text-3xl'>Explore this file explorer</h1>

            <Folder handleInsertNode={handleInsertNode} handleDeleteNode={handleDeleteNode} handleUpdateNode={handleUpdateNode} explorerData={explorerData} />

        </div>
    );
};

export default App;
