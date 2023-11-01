import { React } from "react";
import TopNavBar from "../component/Global/TopNavBar";
import Loader from "../component/main/loader";
import Footer from "../component/Global/Footer";
import {useTheme} from '../services/ThemeContext.js';

export default function Dashboard() {

const { isDarkMode, toggleTheme } = useTheme();

const themeClass = isDarkMode ? 'dark' : 'light';
const handleCopy = (event) => {
  console.log(event);
  // Prevent default behavior to avoid copying to clipboard by default
  event.preventDefault();

  // Get the text to be copied
  const text = 'Text you want to copy to clipboard';

  // Copy text to the clipboard
  event.clipboardData.setData('text/plain', text);

  // Log that text was copied (optional)
  console.log('Text has been copied to the clipboard:', text);
};
return (
    <>
      {/* <Loader loderstatus={loderstatus} /> */}
      <TopNavBar pageActive="Dashboard" />
      <div className="main-page">

      <header >
        <h1 className={`header ${themeClass}`}>My App</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <button onCopyCapture={handleCopy} style={{ cursor: 'pointer' }}>Copt Text</button>
      </header>

      </div>
      <Footer />
    </>

  );

}

