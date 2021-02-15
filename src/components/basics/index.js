import React from "react";
import Additionally from "./Additionally";
import Links from "./Links";

export default function Basics(props) {
    return <div  className={"row basics "}>
        <div className={"col s4 sidebar"}>
            <img data-aos="fade-up"  src={props.basics.picture} alt=""/>
        </div>
        <div className={"col s8 content"}>
            <p data-aos="fade-right" className={"name"}>{props.basics.name}</p>
            <p data-aos="fade-right" className={"surName"}>{props.basics.surName}</p>
            <div className={"linksContainer"}>
                <p  data-aos="fade-right" className={"label"}>{props.basics.label}</p>
                <Links links={props.basics.links}/>
            </div>
            <div className="divider"/>
                <Additionally basics={props.basics}/>
        </div>
    </div>
}
