import getLocalize from "@->/app/localization";
import NavigationButton from "../NavigationButton/NavigationButton";
import "./NavigationBar.css";

export default function NavigationBar({children}: {children?: React.ReactNode}) {
  return (
    <>
    <header style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }}>
      <div className="border">
        <nav style={{ display: 'flex', alignItems: 'center' }}>
          <h1 className="name" translate="no" style={{ marginLeft: '70px', marginTop: "-4px" }}>
            KOT
          </h1>
          <NavigationButton link="/home">{getLocalize("navigation_board/home")}</NavigationButton>
          <NavigationButton link="/profile">{getLocalize("navigation_board/profile")}</NavigationButton>
        </nav>
        </div>
       </header>
    </>
  );
}