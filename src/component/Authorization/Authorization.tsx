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

function Input({name, placeholder, hint}: Record<string, string>) {
    const [newHint, getHint] = React.useState(hint);

    return (
    <>
    <h1 className="input-name"> { getLocalize("authorization/"+name)} </h1>
            <input type="text" 
                name={name}
                placeholder={placeholder + newHint}
                className='form-border'
            />
            {/* <Image
                src="/button.png"
                style={{
                    marginLeft: "20px",
                }}
                
                width={500}
                height={500}
                objectFit="contain"
                alt="."
            /> */}
            <div/>
        </>
    )
    
}

export default function Authorization({children, state}: IAuthorizationProps) {
    const [show, setShow] = React.useState(true);
    const [form, setEnableForm] = React.useState(false);

    function genPassword() {
        return Math.random().toString(36).slice(2, 10) + "kot" + Math.floor(Math.random() * 256);
    }

    const headerTextStyle = (!form ? 
    { textAlign: "left", marginLeft: "20px" } : {
        
        fontSize: "2rem",
        fontWeight: "bold"
    }) as CSSProperties;

    let headerTextLocalize = getLocalize("authorization/optionalRequest");

    function clickButtonAgree() {
        headerTextLocalize = 
        setEnableForm(true)
        const element = document.getElementById("header_text");
        element && element.innerText && (element.innerText = getLocalize("authorization/authorization"));
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
          <Form action="home">
            <Input name="login" placeholder={getLocalize("authorization/placeholder/login") } hint={"" + Math.floor(Math.random() * 256)}/>
            <Input name="password" placeholder={`${getLocalize("authorization/placeholder/password")}`} hint={" " + genPassword()} className='form-border'/>
            <div></div>
            <button className='button' style={{
                fontSize: "1.4rem",
                fontWeight: "normal",
                width: "170px",
                height: "80px",
                borderRadius: "5px"
            }}> <h1> {getLocalize("send")} </h1> </button>
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