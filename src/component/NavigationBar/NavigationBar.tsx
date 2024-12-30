import NavigationButton from "../NavigationButton/NavigationButton";
import "./NavigationBar.css";

export default function NavigationBar() {
    return (
      <header>
        <div className="border">
          <nav style={{ display: 'flex', alignItems: 'center'}}>
            <h1 className="name" translate="no" style={{ marginLeft: '50px' }}>
              KOT
              <span style={{ fontSize: '1.2rem' }}>.ru</span>
            </h1>
            <NavigationButton link="/a">Home</NavigationButton>
          </nav>
        </div>
      </header>
    );
  }