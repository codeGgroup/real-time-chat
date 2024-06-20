import React from 'react';
import HomeSideBar from '../components/HomeSideBar';
import HomeChatArea from "../components/HomeChatArea";
import "../App.css"

const Home = () => {
    return (
        <div className="home-container">
            <HomeSideBar />
            <HomeChatArea />
        </div>
    );
};

export default Home;