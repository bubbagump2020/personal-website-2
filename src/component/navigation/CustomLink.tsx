import React from "react";
import {useHover} from "@mantine/hooks";
import { INav } from "../../type/types";

const CustomLink:React.FC<INav> = ({name, path}:INav) =>{

    const { hovered, ref} = useHover();

    const hoveredStyle:React.CSSProperties = {
        float: "left",
        backgroundColor: "#111",
    }

    const notHoveredStyle:React.CSSProperties = {
        float: "left"
    }

    const anchorStyle:React.CSSProperties = {
        display: "block",
        color: "white",
        textDecoration: "none",
        padding: "24px 24px",
        textAlign: "center"
    }

    const isHovered = (name:string, path:string) => {
        return (
            <li style={hoveredStyle}>
                <a href={path} style={anchorStyle}>{name}</a>
            </li>
        );
    }

    const isNotHovered = (name:string, path:string) => {
        return (
            <li style={notHoveredStyle}>
                <a href={path} style={anchorStyle}>{name}</a>
            </li>
        );
    }


    return(
        <div ref={ref}>
            {hovered ? isHovered(name, path):isNotHovered(name, path)}
        </div>
    )
}

export default CustomLink;