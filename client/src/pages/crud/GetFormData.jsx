import React, { useEffect, useState } from "react";
import "../../assets/css/getformdata.css";
import Formapi from "../../services/api";
import TopNavBar from "../../component/main/TopNavBar";
import UpdateFormData from "./UpdateFormData";

import { Link } from "react-router-dom";

const GetFormData = () => {

  const [getData, setGetData] = useState([]);
  const [showModel, setShowModel] = useState('hide');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  useEffect(() => {
    getAllDetails();
  }, []);

  function getAllDetails() {
    Formapi.getAll()
      .then(response => {
        setGetData(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  function editTripDetails(id) {
    Formapi.get(id)
      .then(response => {
        setShowModel(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  function handleClose() {
    getAllDetails();
  }

  function deleteFormData(id) {
    Formapi.deletedata(id)
      .then(response => {
        alert("delete success")
        getAllDetails();
      })
      .catch(e => {
        console.log(e);
      });
  }

  // Sort table data
  const sortTable = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });

    const sortedData = [...getData].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === 'asc' ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === 'asc' ? 1 : -1;
      }
      return 0;
    });

    setGetData(sortedData);
  };

  // Filter

  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = getData.filter(data => {
    return (
      data.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.age.toString().includes(searchTerm) ||
      data.address.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleSearch = e => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <TopNavBar pageActive="getformdata" />
      <div className="mainview main-page">
        <div className="addNewPlan text-end mb-3">
        <input type="text" placeholder="Search..." value={searchTerm} onChange={handleSearch} />
          <Link to="/addformdata" className="btn btn-primary">Add Data</Link>
        </div>
        <div className="">
          <table className="table">
            <tr>
              <th onClick={() => sortTable('name')}>Name</th>
              <th onClick={() => sortTable('email')}>Email</th>
              <th onClick={() => sortTable('age')}>Age</th>
              <th onClick={() => sortTable('address')}>Address</th>
              <th>Status</th>
            </tr>
            {
              filteredData.length === 0
                ? <tr><td colSpan="5" className="text-center">No Data Found!</td></tr>
                : filteredData.map((data) => (
                  <tr key={data.form_id}>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.age}</td>
                    <td>{data.address}</td>
                    <td className="text-center">
                      <a onClick={() => editTripDetails(data.form_id)}><i className="fa fa-edit editicon"></i></a>
                      <a onClick={() => deleteFormData(data.form_id)}><i className="fa fa-trash editicon"></i></a>
                    </td>
                  </tr>
                ))
            }
          </table>
        </div>
        <UpdateFormData show_model={showModel} handle_close={handleClose} />
      </div>
    </>
  );
};

export default GetFormData;
