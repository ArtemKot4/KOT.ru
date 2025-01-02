"use client";
import "./styles.css";
import TypingText from "@->/component/TypingText";
import getLocalize from "./localization";
import Page from "@->/component/Base/Page";

export default function NotFound() {

  return (
    <Page>
    <div className="not-found">
      <div className="left-side">
        <h1 className="error-404">404</h1>
        <div style={{borderBottom: '5px solid black', width: '70%', margin: '1rem auto'}}></div>
        <TypingText className="page-not-found" speed={45}>{getLocalize("pages/not_found", "ru")}</TypingText>
      </div>
      <div className="right-side">
      
      </div>
    </div>
    </Page>
  );
}
