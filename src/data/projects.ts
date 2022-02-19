import {Project} from "../classes/classes";

const projects:Array<Project> = [
    new Project(
        "C867 Assessment Project",
        ["C++", "Microsoft Visual Studio IDE"],
        "The assessment project for my C867 Application Scription course for Western Governors University",
        "A github link"
    ),
    new Project(
        "Client Engagement Portal",
        ["Java 8", "Spring", "Spring Boot", "ReactJS + Redux", "TypeScript", "PostgreSQL", "Jenkins", "Docker", "Microservices", "AWS Cognito", "Agile Development", "AWS S3 (front end deployment)", "AWS EC2 (backend deployment)"],
        "Capstone group project for Revature training (25+ people). The project was split into several teams, a front end team, a back end team, architecture, and documentation just to name a few. I was a part of the architecture team (3 man team). The team was responsible for the design of the application, the decision to use Micro services and which microservices to use, and the deployment of the application.",
        "A github link"),
    new Project(
        "Revature Social Network",
        ["Java 8", "Spring", "ReactJS + Redux", "TypeScript", "PostgreSQL"],
        "First group project with Revature (4 man team). I was responsible for implementing Redux for the React components",
        "A github link"
    ),
    new Project(
        "Gem Reimbursement",
        ["Java 8", "PostgreSQL", "JavaScript"],
        "Second solo project during Revature training period",
        "A github link"
    ),
    new Project(
        "Car Dealership",
        ["Java 8", "PostgreSQL"],
        "First solo project during Revature training period",
        "A github link"
    ),
    new Project(
        "Recip-Ease",
        ["Ruby on Rails", "ReactJS + Redux", "PostgreSQL", "HTML5", "CSS3"],
        "First solo project after graduating from Flatiron. It is supposed to be an online cookbook.",
        "A github link"
    ),
    new Project(
        "uDoc",
        ["Ruby", "SQLite"],
        "First project (2 man team) for Flatiron. It is a CLI application. I was in charge of all of the 'back-end code' or the code that pulled back and sorted through the doctors and their information.",
        "A github link"
    ),
];


export default projects;