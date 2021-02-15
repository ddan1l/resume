import React from "react";
export default function Links(props){
    return <div className={"links"}>
        <a data-aos="zoom-in" data-aos-delay="100" target={"_blank"} href={props.links.facebook}>
            <i className="fab fa-facebook-f"/>
        </a>
        <a  data-aos="zoom-in" data-aos-delay="200" target={"_blank"} href={props.links.twitter}>
            <i className="fab fa-twitter"/>
        </a>
        <a  data-aos="zoom-in" data-aos-delay="300" target={"_blank"} href={props.links.instagram}>
            <i className="fab fa-instagram"/>
        </a>
    </div>
}