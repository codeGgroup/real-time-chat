import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEllipsis,
    faVideoSlash,
    faPenToSquare,
    faMagnifyingGlass,
}  from '@fortawesome/free-solid-svg-icons';

const HomeSideBar = () => {
    return (
        <div className="sidebar">
            <div className="topbar">
                <h2>Chats</h2>
                <div className="icons">
                    <FontAwesomeIcon className="icon" icon={faEllipsis} />
                    <FontAwesomeIcon className="icon" icon={faVideoSlash} />
                    <FontAwesomeIcon className="icon" icon={faPenToSquare} />
                </div>
            </div>
            <div className="searchbar">
                <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
                <input name="search" placeholder="Search" />
            </div>
        </div>
    );
}

export default HomeSideBar;