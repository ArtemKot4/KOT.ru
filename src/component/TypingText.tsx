import { useState, useEffect, CSSProperties, HTMLAttributes } from "react";

interface ITypingTextProps extends HTMLAttributes<HTMLDivElement> {
    children?: string;
    speed?: number;
    rebuildAgain?: boolean;
};

export default function TypingText({children, speed = 100, rebuildAgain, ...props}: ITypingTextProps) {
    if(children === undefined) return <h1> children is undefined </h1>;

    const [typedText, setTypedText] = useState("");
    const [isDone, setIsDone] = useState(false);

    useEffect(() => {
        let putId: NodeJS.Timeout;
        let deleteId: NodeJS.Timeout;

        if (!isDone) {

            if(typedText.length < children.length) {
                putId = setTimeout(() => {
                    setTypedText(children.slice(0, typedText.length + 1));
                }, speed);

            } else {
                setIsDone(true);
            };

        } else if (rebuildAgain && typedText.length > 0) {
            deleteId = setTimeout(() => {
                setTypedText(children.slice(0, typedText.length - 1));
        }, speed);
        };
            
        return () => {
            clearTimeout(putId);
            clearTimeout(deleteId)
        };
    }, [isDone, typedText, children, speed]);

    return <h1 {...props}> {typedText.length != children.length && typedText.length > 0 ? typedText + "|" : typedText} </h1>;

}