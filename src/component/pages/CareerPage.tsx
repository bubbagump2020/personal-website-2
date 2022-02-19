import React from 'react';
/* style import */
import '../../style/Page.sass';
/* view component import */
import {Job} from "../../classes/classes";
import GenericEntry from "./entries/GenericEntry";
import jobs from "../../data/jobs";
import certs from "../../data/certs";
/* type and data imports */

const CareerPage:React.FC = () => {

    // @ts-ignore
    const showEntry = (arr:Array<Type>) => {
        if(arr[0] instanceof Job){
            return arr.map((job, index) => {
                return(
                    <div key={index} className={"entry-wrapper"}>
                        <GenericEntry job={job}/>
                    </div>
                );
            });
        } else {
            return arr.map((cert, index) => {
                return(
                    <div key={index} className={"entry-wrapper"}>
                        <GenericEntry cert={cert}/>
                    </div>
                );
            });
        }
    }

    return(
        <div className={"entry-container"}>
            <div>
                <p>Jobs</p>
            </div>
            {showEntry(jobs)}
            <div>
                <p>Certifications</p>
            </div>
            {showEntry(certs)}
        </div>
    );
}

export default CareerPage;