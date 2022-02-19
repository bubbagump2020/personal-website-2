import React from "react";
// view component import
// type and data imports
import schools from "../../data/schools";
import {School} from "../../classes/classes";
import GenericEntry from "./entries/GenericEntry";

const EducationPage:React.FC = () => {

    const showEducation = (schools:Array<School>):JSX.Element[] => {
        return schools.map((school, index) => {
            return(
                <div className={"entry-wrapper"} key={index}>
                    <GenericEntry school={school}/>
                </div>
            )
        })
    }

    return(
        <div className={"entry-container"}>
            {showEducation(schools)}
        </div>
    );
}

export default EducationPage;