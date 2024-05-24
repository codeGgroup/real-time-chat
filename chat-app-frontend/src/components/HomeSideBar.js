import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fetchUsers } from "../api";
import {
    faEllipsis,
    faVideoSlash,
    faPenToSquare,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import ChatList from "./ChatList";

const HomeSideBar = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const usersList = await fetchUsers();
                setUsers(usersList);
            } catch (err) {
                console.error('Error fetching users:', err);
            }
        };
        fetchUserData();
    }, []);

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
            <div className="contacts">
                <ChatList users={users} />
            </div>
        </div>
    );
};

export default HomeSideBar;
