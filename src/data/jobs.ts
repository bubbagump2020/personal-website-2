import {Job} from "../classes/classes";

const jobs:Array<Job> = [
    new Job(
        "Revature, LLC",
        "Software Engineer",
        "2020 - Present",
        "8 week training period after being hired. Java 8, Spring, Spring Boot, JavaScript, TypeScript, ReactJS + Redux, and PostgreSQL were taught and used during this training period. Currently contracted out to Cognizant."
    ),
    new Job(
        "Fugro USA Marine, Inc.",
        "Network Controller",
        "2016 - 2018",
        "Oversaw and maintained 160+ remote stations located around the world. Monitored GNSS satellites and signals to judge broadcast health and accuracy. Helped to train new personnel from Singapore for a sister Network Control Center that was opened in Singapore. Monitoring technologies included software that was developed in house as well as 'off the shelf' solutions such as Grafana (to track LBands) and Google Maps (used as a heat map to show broadcast accuracy. The larger the red circle, the more inaccurate it was). Left the position as I could no longer maintain the scheduled demanded by the position and Fugro did not have another opening to place me in."
    )
];

export default jobs;