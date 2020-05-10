import React, { useState, useEttect } from "react";

const useConfirm = (message = "", onConfirm, onCancel) => {
    if (!onConfirm || typeof onConfirm !== "function") {
        return;
    }
    if (onCancel && typeof onCancel !== "function") {
        return;
    }
    const confirmAction = () => {
        if(window.confirm(message)) {
            onConfirm();
        } else {
            onCancel();
        }
    }
    return confirmAction;
}

const UseConfirm = () => {
    const deleteWorld = () => console.log('deleting...');
    const abort = () => console.log('Aborted');
    const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
    return (
        <div className="UseConfirmPreventLeave">
            <h1>useConfirm</h1>
            <p>삭제하기 전, 확인, 취소 다시 한번 확인</p>
            <button onClick={confirmDelete}>Delete the world</button>
        </div>
    )
}

export default UseConfirm;