import { React,useContext,createContext} from "react";
import TopNavBar from "../component/Global/TopNavBar";
import Loader from "../component/main/loader";
import Footer from "../component/Global/Footer"
export default function Dashboard() {

//  usecontext

// const Themecontext = React.creacteContext("dark");
// function button (){
//   retutn <Themecont
// }
const Themecontext =createContext();

export const useTheme = ()=> {
  return useContext(Themecontext);
};

export const Themprovider = ({ children}) =>
{
  const [isDarkMode,setIsDarkMode] = useState(false);
  const togglTheme = () => {
    setIsDarkMode((prev) => !prev);
  }
};

  return (
    <>
      {/* <Loader loderstatus={loderstatus} /> */}
      <TopNavBar pageActive="Dashboard" />
      <div className="main-page">

       <section>
      <p></p>
       </section>

      </div>
      <Footer />
    </>

  );

}

