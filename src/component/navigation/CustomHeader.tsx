import React from "react";
import {useLocation} from "react-router-dom";
import Links from "./Links";

const headerStyle:React.CSSProperties = {
    float: "left",
    marginLeft: "2vw",
    fontWeight: "bold",
    fontSize: "18px",
    textAlign: "center"
}


const CustomHeader:React.FC = () =>{

    const [headerName, setHeaderName] = React.useState("Home")
    const {pathname} = useLocation();

    const firstUpperCase = (nonCapString:string):string => {
        let header = nonCapString.substring(1, nonCapString.length);
        return header.charAt(0).toUpperCase() + header.slice(1);
    }

    React.useEffect(() => {
        if(pathname === "/"){
            setHeaderName('Home');
        } else if (pathname === "/about"){
            setHeaderName('About Me');
        } else {
            setHeaderName(firstUpperCase(pathname));
        }

    }, [pathname])

    return(
        <Links />
    )
}

export default CustomHeader