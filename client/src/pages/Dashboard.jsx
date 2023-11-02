import { React } from "react";
import TopNavBar from "../component/main/TopNavBar";
import Loader from "../component/main/Loader";
import Footer from "../component/main/Footer";

export default function Dashboard() {

return (
    <>
      {/* <Loader loderstatus={loderstatus} /> */}
      <TopNavBar pageActive="Dashboard" />
      <div className="main-page">

      </div>
      <Footer />
    </>

  );
  
}

