import React from 'react'
import Button from './Button'
import { useLocation } from 'react-router-dom';

function Header({ isOpenTaskModal, setTaskModalState }) {
    const location = useLocation();

    return (
        <div className="header">
            <h1>Task Tracker</h1>
            {location.pathname === '/' && <Button
                onClickHandler={setTaskModalState}
                title={isOpenTaskModal ? "Close" : "Create Task"}
                className={`${isOpenTaskModal ? "btn-closed" : "create-task-open"} btn btn-header`}
            />}
        </div>
    )
}

export default Header
