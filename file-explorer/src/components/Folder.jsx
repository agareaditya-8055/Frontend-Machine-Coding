import React, { useState } from 'react';
import { FaFolder, FaFile, FaEdit, FaTrashAlt } from "react-icons/fa";
import { RiFileAddFill } from "react-icons/ri";
import { AiFillFolderAdd } from "react-icons/ai";

const Folder = ({ handleInsertNode, handleDeleteNode, handleUpdateNode, explorerData }) => {
    const [expand, setExpand] = useState(false);
    const [showInput, setShowInput] = useState({
        visible: false,
        isFolder: null
    });
    const [renaming, setRenaming] = useState(false);
    const [newName, setNewName] = useState(explorerData?.name);

    const handleNewFolder = (e, isFolder) => {
        e.stopPropagation();
        setExpand(true);
        setShowInput({
            visible: true,
            isFolder
        });
    };

    const onAddFolder = (e) => {
        if (e.keyCode === 13 && e.target.value) {
            handleInsertNode(explorerData?.id, e.target.value, showInput.isFolder);
            setShowInput({ ...showInput, visible: false });
        }
    };

    const onRename = (e) => {
        if (e.keyCode === 13 && e.target.value) {
            handleUpdateNode(explorerData?.id, e.target.value);
            setRenaming(false);
        }
    };

    const handleDelete = (e) => {
        e.stopPropagation();
        handleDeleteNode(explorerData?.id);
    };

    if (explorerData?.isFolder) {
        return (
            <div className='mt-2'>
                <div className='folder bg-gray-800 w-80 py-1 rounded-md px-3 justify-between flex items-center gap-2 cursor-pointer' onClick={() => setExpand(!expand)}>
                    <div className='flex items-center gap-2'>
                        <span><FaFolder size={"20px"} /></span>
                        {renaming ? (
                            <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} onKeyDown={onRename} onBlur={() => setRenaming(false)} className='rounded-md text-black px-2 py-1' autoFocus />
                        ) : (
                            <span>{explorerData?.name}</span>
                        )}
                    </div>

                    <div className='flex gap-2'>
                        <span onClick={(e) => handleNewFolder(e, true)}><AiFillFolderAdd className='text-gray-400 hover:text-gray-50' size={'23px'} /></span>
                        <span onClick={(e) => handleNewFolder(e, false)}><RiFileAddFill className='text-gray-400 hover:text-gray-50' size={'20px'} /></span>
                        <span onClick={(e) => { e.stopPropagation(); setRenaming(true); }}><FaEdit className='text-gray-400 hover:text-gray-50' size={'18px'} /></span>
                        <span onClick={handleDelete}><FaTrashAlt className='text-gray-400 hover:text-gray-50' size={'18px'} /></span>
                    </div>
                </div>

                <div className={`${expand ? "block" : "hidden"} pl-6`}>

                    {showInput.visible && (
                        <div className='inputContainer flex items-center gap-2 mt-2'>
                            <span>
                                {showInput.isFolder ? <FaFolder /> : <FaFile />}
                            </span>
                            <input type="text" onKeyDown={onAddFolder} onBlur={() => setShowInput({ ...showInput, visible: false })} className='inputContainer__input rounded-md text-black px-2 py-1' autoFocus />
                        </div>
                    )}

                    {explorerData?.items?.map((item, index) => (
                        <Folder key={item?.id} handleInsertNode={handleInsertNode} handleDeleteNode={handleDeleteNode} handleUpdateNode={handleUpdateNode} explorerData={item} />
                    ))}
                </div>
            </div>
        );
    } else {
        return (
            <div className='file flex items-center gap-2 mt-2'>
                <span><FaFile size={"20px"} /></span>
                {renaming ? (
                    <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} onKeyDown={onRename} onBlur={() => setRenaming(false)} className='rounded-md text-black px-2 py-1' autoFocus />
                ) : (
                    <span>{explorerData?.name}</span>
                )}
                <span onClick={(e) => { e.stopPropagation(); setRenaming(true); }}><FaEdit className='text-gray-400 hover:text-gray-50' size={'18px'} /></span>
                <span onClick={handleDelete}><FaTrashAlt className='text-gray-400 hover:text-gray-50' size={'18px'} /></span>
            </div>
        );
    }
};

export default Folder;
