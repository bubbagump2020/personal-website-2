import React from "react";
import {Project} from "../../classes/classes";
import GenericEntry from "./entries/GenericEntry";
import projects from "../../data/projects";
/* style imports */

const ProjectsPage:React.FC = () => {

    const showProjects = (projects:Array<Project>) => {
        return projects.map((project, index) => {
            return(
                <div key={index} className={"entry-wrapper"}>
                    <GenericEntry project={project}/>
                </div>
            )
        })
    }


    return(
        <div className={"entry-container"}>
            {showProjects(projects)}
        </div>
    );
}

export default ProjectsPage;