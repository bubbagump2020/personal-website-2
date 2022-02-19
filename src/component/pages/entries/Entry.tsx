import React from "react";

interface IEntry{
    name?:string
    strength?:string
    title?:string
    license?:string
    issuer?:string
    obtained?:string
    link?:string
    path?:string
    technologies?:Array<string>
    description?:string
    github?:string
    attended?:string
    degree?:string
    company?:string
    position?:string
    duration?:string
}

const Entry:React.FC<IEntry> = (
    {
        name,strength,title,license,
        issuer,obtained,link,path,
        technologies, description, github,
        attended, degree, company, duration,
        position
    }:IEntry
) => {

    const companyNameTitle = (company?:string, name?:string, title?:string, duration?:string, obtained?:string, attended?:string, github?:string) => {
        if(company){
            /* job */
            return <h3 className={"primary-entry-header"}>{company} | {duration}</h3>
        } else if(name && attended){
            /* school */
            return <h3 className={"primary-entry-header"}>{name} | {attended}</h3>
        } else if(name && github) {
            /* project*/
            return <h3 className={"primary-entry-header"}>{name}</h3>
        } else {
            /* cert */
            return <h3 className={"primary-entry-header"}>{title} | {obtained}</h3>
        }
    }

    const degreePositionIssuer = (degree?:string, position?:string, issuer?:string) => {
        if(degree){
            return <h4 className={"secondary-entry-header"}>{degree}</h4>
        } else if (position){
            return <h4 className={"secondary-entry-header"}>{position}</h4>
        } else {
            return <h4 className={"secondary-entry-header"}>{issuer}</h4>
        }
    }

    const descLicenseLink = (description?:string, license?:string, link?:string) => {
        if(description){
            return <p>{description}</p>
        } else {
            /* will need to be changed to else if later to accomodate for the other page entries*/
            return <p>{license} | {link}</p>
        }
    }

    return(
        <div className={"entry"}>
            <div>
                <div>
                    {companyNameTitle(company, name, title, duration, obtained, attended, github)}
                </div>
                {degreePositionIssuer(degree, position, issuer)}
                {descLicenseLink(description, license, link)}
            </div>
        </div>
    )
}

export default Entry