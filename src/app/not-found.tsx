"use client";
import "./styles.css";
import TypingText from "@->/component/TypingText";
import getLocalize from "./localization";
import NavigationBar from "@->/component/NavigationBar/NavigationBar";

export default function NotFound() {

  return (
    <>
    <NavigationBar />
    <div className="not-found">
      <div className="left-side">
        <h1 className="error-404">404</h1>
        <div style={{borderBottom: '5px solid black', width: '70%', margin: '1rem auto'}}></div>
        <TypingText className="page-not-found">{getLocalize("pages/not_found", "ru")}</TypingText>
      </div>
      <div className="right-side">
      
      </div>
    </div>
    </>
  );
}
