import {School} from "../classes/classes";

const schools:Array<School> = [
    new School(
        "Western Governors University",
        "Expected graduation : Oct. 2022",
        "Bachelor of Science - Software Engineering",
        "A go at your own pace online degree. Primary language is Java 11, but also includes C++, Python 3, SQL, JavaScript, CSS3, and HTML5"
    ),
    new School(
        "Flatiron School",
        "2019",
        "Certificate of Completion - Software Engineering",
        "15 weeks of Ruby, Ruby on Rails, vanilla JavaScript, and ReactJS + Redux. Had a lot of fun and fell in love with React!",
    ),
    new School(
        "Houston Community College System",
        "2015",
        "Associate in Science - Computer Science",
        "Not much to say about this degree. I took (and completed) this degree path as I intended to continue on at the University of Houston pursuing a Bachelor's of Science in the same field. However life got in the way and that plan fell by the wayside. My programming courses exposed me to C++ and Microsoft's Visual Studio IDE."
    ),
    new School(
        "Norwich University - Corps of Cadets",
        "2009 - 2011 : Completed 80 credit hours",
        "Bachelor of Arts - Studies in War and Peace",
        "This degree program was centered around peace and conflict resolution. During my two years study I took courses in History, Military History, Political Science, Philosophy, and several types of Literature. It was here that I polished my critical thinking skills developed through high school as well as learning analytical reasoning and how to couple the two processes together. Additionally, I went through and completed Rook training (Rook training is Norwich's version of the plebe system) during my freshman year. I left in 2011 to become a caretaker for my parents."
    )
];

export default schools;