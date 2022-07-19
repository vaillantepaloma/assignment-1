import React from "react";
import "./style.css";
import {BsLayers,BsFolder2Open,BsLightning, BsTrophy, BsChat} from 'react-icons/bs'
import {FiLifeBuoy} from "react-icons/fi";
import {AiOutlineAlipayCircle} from "react-icons/ai";

export class LeftSide extends React.Component{

    render(){
        return(
            <div>
                <header id="header" className="left_side">
                    <AiOutlineAlipayCircle size="80px" className="circle" />
                    <h1>Orizon Academy</h1>
                    <h3>Learning with Fun</h3>
                </header>
                <section id="first_section" className="left_side">
                    <ul id="menu">
                        <li><BsLayers/><p>My Courses</p></li>
                        <li><BsFolder2Open/> <p>Bookmarks</p></li>
                        <li><BsLightning/><p>Trending Courses</p></li>
                        <li><FiLifeBuoy/><p>Help Articles</p></li>
                        <li><BsTrophy/><p>Completed Courses</p></li>
                    </ul>
                </section>
                <section id="last_section" className="left_side">
                        <h1>My Tutors</h1>
                        <ul id="tutors">
                            <li>
                            
                                <div id="names">
                                    <h3>Kathlyn Murphy</h3>
                                    <p>PHP developer</p>
                                </div> <BsChat className="chat" size="1.3em"/></li>
                            <li>
                                <div id="names">
                                    
                                    <h3>Annette Black</h3>
                                    <p>python developer</p>
                                </div>
                                 <BsChat className="chat" size="1.3em"/></li>
                            <li>
                                <div>
                                    
                                </div>
                                <div id="names">
                                    <h3>Eleanor Pena</h3>
                                    <p>UI developer</p>
                                </div>
                                 <BsChat className="chat" size="1.3em"/></li>
                        </ul>
                </section>
            </div>
        );
    }
}