import { HTMLAttributes } from 'react'

interface IBorderConfigProps extends HTMLAttributes<HTMLDivElement>  {
    children?: React.ReactNode;
    backgroundColor?: string;
    opacity?: number;
    fontSize?: string;
    margin?: string;
    borderWidth?: string;
    borderRadius?: string;
    width?: string;
}

export default function TranslurentBorder({
    children,
    backgroundColor = "#e3e3e3",
    opacity = .6, 
    fontSize = "1.2rem",
    margin = "5rem auto",
    borderWidth = "50px",
    borderRadius = "10px",
    width = "50%",
    ...props
}: IBorderConfigProps) {
    return <h2 style={{...props.style,
        backgroundColor,
        opacity,
        fontSize, 
        margin, 
        borderWidth, 
        borderRadius,
        width,
    }}> {children} </h2>
}