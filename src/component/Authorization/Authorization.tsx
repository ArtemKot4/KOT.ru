import React, { CSSProperties } from 'react'
import Form from 'next/form'
import getLocalize from '@->/app/localization';
import './Authorization.css';
import TypingText from '../TypingText';

interface IAuthorizationProps {
    children?: React.ReactNode,
    state: (state: boolean) => void, 
    [key: string]: any
};

export default function Authorization({children, state}: IAuthorizationProps) {
    const [show, setShow] = React.useState(true);
    const [form, setEnableForm] = React.useState(false);

    const headerTextStyle = (!form ? 
    { textAlign: "center" } : {
        textAlign: "left",
        marginLeft: "20px"
    }) as CSSProperties;

    let headerTextLocalize = getLocalize("authorization/optionalRequest");

    function clickButtonAgree() {
        headerTextLocalize = 
        setEnableForm(true)
        const element = document.getElementById("header_text");
        element && element.innerText && (element.innerHTML = getLocalize("authorization/authorization"));
    };

    function clickButtonDisagree() {
        setShow(false)
        state(true);
    }

    const buttonContent = (
    <>
        <button className="button" onClick={clickButtonAgree} > <h1> Да </h1></button>
        <button className="button" onClick={clickButtonDisagree} > <h1> Нет </h1></button>
    </>
    );

    const formContent = (
        <>
          <Form action="home" className="form">
            <input type="text" name="login" />
            <button type="submit">{getLocalize("authorization/login")}</button>
          </Form>
        </>
    );

    return show && (
        <>
        <div className="authorization-padding">
            <TypingText className="request-h1" style={headerTextStyle} speed={25} id="header_text">
                {headerTextLocalize}
            </TypingText>
            <div style={{borderBottom: '3px solid rgb(204, 204, 204)', width: '98%', margin: '1rem auto'}}></div>
            {form ? formContent : buttonContent}
        </div>
        </>
    )
}