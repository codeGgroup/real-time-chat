import React from "react";

const ChatList = ({ users }) => {
    if (!users || users.length === 0){
        //TODO: Display a loading message.
        return <p>Loading chats...</p>
    }
    return (
        <div className="contacts">
            {users.map((user) => (
                <div className="chat-item" key={user._id}>
                    <p className="name">{user.username}</p>
                </div>
            ))}
        </div>
    );
}
export default ChatList
