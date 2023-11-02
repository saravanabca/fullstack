import React, { useEffect, useState } from "react";
import "../../assets/css/getformdata.css";
import Formapi from "../../services/api";
import TopNavBar from "../../component/main/TopNavBar";
import UpdateFormData from "./UpdateFormData";

import { Link } from "react-router-dom";

const GetFormData = () => {

  const [ getData, SetGetData ] = useState([]);
  const [ showModel, SetShowModel ] = useState('hide');

  useEffect(()=>{
    getAllDetails();
  },[]);

  function getAllDetails(){
    Formapi.getAll()
    .then(response => {
      SetGetData(response.data);
    })
    .catch(e => {
      console.log(e);
    });
  }

  function editTripDetails(id){
    // alert(id);
    Formapi.get(id)
    .then(response => {
        SetShowModel(response.data);
        // alert(response.data);
        return;
    })
    .catch(e => {
      console.log(e);
    });
  }

  function handleClose(){
    getAllDetails();
  }

  function deleteFormData(id){
    Formapi.deletedata(id)
    .then(response => {
        alert("delete success")
      getAllDetails();
    })
    .catch(e => {
      console.log(e);
    });
  }

  return (
    <>
     <TopNavBar pageActive="getformdata" />
      <div className="mainview main-page">

        <div className="addNewPlan text-end mb-3">
          <Link to="addformdata" className="btn btn-primary">Add Data</Link>
        </div>
        <table className="table">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Address</th>
              <th>Status</th>
            </tr>
            {
              getData.length == 0
              ?
                <tr>
                  <td colspan="4" className="text-center">No Data Found!</td>
                </tr>
              :
              getData.map((data)=>{
                return(
                  <tr key={data.formid}>
                    <td>{ data.name }</td>
                    <td>{ data.email }</td>
                    <td>{ data.age }</td>
                    <td>{ data.address }</td>
                    <td className="text-center">
                      <a onClick={ () => { editTripDetails(data.form_id) } }><i className="fa fa-edit editicon"></i></a>  
                      <a onClick={ ()=> { deleteFormData(data.form_id) } }><i className="fa fa-trash editicon"></i></a>
                    </td>
                  </tr>)
              })
            }

        </table>

        <UpdateFormData show_model={showModel} handle_close={handleClose}/>

      </div>
    </>
  );
};

export default GetFormData;
