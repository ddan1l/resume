import React from "react";
export default function Education(props){
    return <div  className={"row education"}>
        <div data-aos="fade-up" className={"col s4 sidebar"}>
            <h3>Education</h3>
            <p>What about knowledge?</p>
        </div>
        <div className={"col s8 content"}>
            <div data-aos="fade-up">
                <p>
                    <span>
                        <i style={{marginRight: 10 + 'px'}} className="fas fa-star"/>
                    </span>{props.education}
                </p>
            </div>
        </div>
    </div>
}