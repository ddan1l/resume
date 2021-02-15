import React from "react";
import {connect} from "react-redux"
import {getData} from "../redux/actions";

import Basics from "../components/basics";
import About from "../components/about";
import Skills from "../components/skills";
import Loader from "../components/loader"
import Education from "../components/education";

class Profile extends React.Component{
    constructor(props) {
        super(props);
        this.props.getData()
    }
    render() {
        const profileData = this.props.profile.profileData
        const processing = this.props.app.processing
        if (!processing){
            return <div>
                <Basics basics = {profileData.basics} />
                <About about = {profileData.about} />
                <Skills skills = {profileData.skills} />
                <Education  education = {profileData.basics.education} />
            </div>
        }
        else {
            return <Loader/>
         }
    }
}


const mapDispatchToProps = {
   getData
}
const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
