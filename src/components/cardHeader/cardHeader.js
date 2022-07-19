import React from "react";
import "./cardHeader.css";


export class CardHeader extends React.Component{

    render(){
        return(
            <div id="card1_header">
                <header>
                    <h1>Your Courses</h1>
                    <button>PREMIUM</button>
                    <p className="number">26 courses</p>
                </header>

            </div>
        );
    }
}