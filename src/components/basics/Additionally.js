import React from "react";

export default function Additionally(props){
    return <div className={"additionally row"}>
        <div data-aos="fade-up" data-aos-delay="100" className={"col s3"}>
            <h3>Location</h3>
            <p>{props.basics.location}</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="150" className={"col s3"}>
            <h3>Web</h3>
            <p>{props.basics.web}</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="200" className={"col s3"}>
            <h3>Phone</h3>
            <p>{props.basics.phone}</p>
        </div>

        <div data-aos="fade-up" data-aos-delay="250" className={"col s3"}>
            <h3>Email</h3>
            <p>{props.basics.email}</p>
        </div>
    </div>
}