import React from "react";

export default function Skills(props){
    const listItems = props.skills.basic.map((skill, index) =>
        <div key={index} className={"col s6"}>
            <h4> {skill.title}</h4>
            <p> {skill.description}</p>
        </div>)
    return <div  className={"row"}>
        <div data-aos="fade-up" className={"col s4 sidebar"}>
            <h3>Skills </h3>
            <p>Batman would be jealous. </p>
        </div>
        <div className={"col s8 content"}>
            <div data-aos="fade-up" className={"row"}>
                {listItems}
            </div>
        </div>
    </div>
}