import React from "react";

export default function About(props){
    return <div  className={"row about"}>
        <div data-aos="fade-up" className={"col s4 sidebar"}>
            <h3>Intro</h3>
            <p>What i am all About</p>
        </div>
        <div className={"col s8 content"}>
            <div data-aos="fade-up">
                <p>{props.about.intro}</p>
            </div>

        </div>
    </div>
}