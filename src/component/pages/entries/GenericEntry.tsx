import React from 'react';
import {Ability, Cert, Job, Project, School} from "../../../classes/classes";
import Entry from "./Entry";

interface GenericObject {
    job?:Job
    cert?:Cert
    project?:Project
    ability?:Ability
    school?:School
}

const GenericEntry = <Type extends GenericObject> ({job, cert, project, ability, school}:Type) => {

    const showInfo = (job?:Job , cert?:Cert, project?:Project, ability?:Ability, school?:School) => {
        if(job){
            return <Entry company={job.company} description={job.description} duration={job.duration} position={job.position} />
        } else if(cert){
            return <Entry title={cert.title} issuer={cert.issuer} obtained={cert.obtained} link={cert.link} license={cert.license} />
        } else if(school){
            return <Entry name={school.name} attended={school.attended} description={school.description} degree={school.degree}/>;
        } else if (project){
            return <Entry name={project.name} technologies={project.technologies} description={project.description} github={project.github}/>
        }
    }

    return(
        <React.Fragment>
            {showInfo(job, cert, project, ability, school)}
        </React.Fragment>
    )
}

export default GenericEntry;