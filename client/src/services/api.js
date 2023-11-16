import axios from "axios";

const API_URL = "http://localhost:8080/api/";

// const getPublicContent = () => {
//   return axios.get(API_URL + "all");
// };

// const addformdata = async (data) => {
//   //   alert(data);
//   const response = await axios.post(API_URL + "formdata", data);
//   console.log(response);
//   return response;
// };

const addformdata = async (data) => {
  const headers = {
    // Add your custom headers here
    'Content-Type': 'application/json', // Example header
    'Authorization': 'Bearer your_access_token', // Example token-based header
  };

  try {
    const response = await axios.post(API_URL + "formdata", data, { headers });
    console.log(response);
    return response;
  } catch (error) {
    console.error('Error occurred:', error);
    throw error; // Propagate the error
  }
};


const edit = async (data, id) => {
  const response = await axios.put(API_URL + "formdata/"+ id, data);
  console.log(response);
  return response;
};

const getAll = async () => {
  //   alert(data);
  const response = await axios.get(API_URL + "formdata");
  console.log(response);
  return response;
};

const get = async (id) => {
  //   alert(data);
  const response = await axios.get(API_URL + "formdata/" + id);
  console.log(response);
  return response;
};

const deletedata = async (id) => {
  const response = await axios.delete(API_URL + "formdata/" + id);
  return response;
};

const formservices = {
  addformdata,
  edit,
  getAll,
  get,
  deletedata
};

export default formservices;
