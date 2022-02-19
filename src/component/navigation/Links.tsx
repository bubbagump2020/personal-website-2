import React from "react";
import navs from "../../data/navs";
import {useHover} from "@mantine/hooks";
import CustomLink from "./CustomLink";
import {INav} from "../../type/types";


const Links:React.FC = () => {
    const {hovered, ref} = useHover();

    const barStyle:React.CSSProperties = {
        listStyleType: "none",
        margin: "0",
        padding: "0",
        overflow: "hidden",
        backgroundColor: "#333"
    }

    const listItemStyle:React.CSSProperties = {
        float: "left"
    }

    const anchorStyle:React.CSSProperties = {
        display: "block",
        padding: "14px 16px",
        textDecoration: "none"
    }

    const links = (linksArr:Array<INav>) => {
        return linksArr.map((link, index) => {
            return <CustomLink path={link.path} name={link.name} key={index}/>
        })
    }

    return(
        <ul style={barStyle}>
            {links(navs)}
        </ul>
    )
}

export default Links;