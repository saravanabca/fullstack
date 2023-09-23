
import axios from "axios";

const API_URL = "http://localhost:8080/api";

// const getPublicContent = () => {
//   return axios.get(API_URL + "all");
// };

const addformdata = async (data) => {
  const response = await axios
        .post(API_URL + "adddorm", {
            data
        });
    return response;
};

const formservices ={
addformdata
}
             
export default formservices;