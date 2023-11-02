
import { useEffect, useState } from 'react';
import Formapi from "../../services/api";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function UpdateFormData({ show_model, handle_close }) {


  /*=====[ # Declare a State Variable  # ]=====*/


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [planDetails, setPlanDetails] = useState({
    name: "",
    email: "",
    age: "",
    address:""
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length != 0) {
      setErrors({});
    }
  }, [planDetails]);

  useEffect(() => {
    if (show_model != 'hide') {
      setShow(true);
      setPlanDetails(show_model.data);
    }
  }, [show_model]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlanDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  /*=====[ # Validation # ]=====*/

  const validateForm = () => {

    let validationErrors = {};

    if (planDetails.name == '') {
      validationErrors.name = "Destination can not be empty!";
    }

    if (planDetails.email == '') {
      validationErrors.email = "Start date can not be empty!";
    }

    if (planDetails.age == '') {
      validationErrors.age = "End date can not be empty!";
    }

    if (planDetails.address == '') {
      validationErrors.address = "End date can not be empty!";
    }

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };


  /*=====[ # Travel plan Update Function  # ]=====*/

  const handleFormSubmit = (e) => {
    e.preventDefault();

    let isFormValid = validateForm();

    if (isFormValid) {
      setLoading(true);

      Formapi.edit(planDetails, show_model.id)
        .then(response => {
          setLoading(false);
          handleClose();
          handle_close();
        })
        .catch(e => {
          console.log(e);
        });

    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Travel Plan</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="mb-3">
          <label className="form-label">name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            placeholder="Enter the destination!"
            value={planDetails.destination}
            onChange={handleChange}
          />
          <span className="text-danger">{errors.name}</span>
        </div>

        <div className="mb-3">
          <div className="d-flex align-items-start">
            <div className="flex-grow-1">
              <label className="form-label">Email</label>
            </div>
          </div>

          <div className="input-group auth-pass-inputgroup">
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="Enter the start date!"
              value={planDetails.email}
              onChange={handleChange}
            />
          </div>
          <span className="text-danger">{errors.email}</span>
        </div>

        <div className="mb-3">
          <div className="d-flex align-items-start">
            <div className="flex-grow-1">
              <label className="form-label">End Date</label>
            </div>
          </div>

          <div className="input-group auth-pass-inputgroup">
            <input
              type="number"
              className="form-control"
              name="age"
              id="age"
              placeholder="Enter the end date!"
              value={planDetails.age}
              onChange={handleChange}
            />
          </div>
          <span className="text-danger">{errors.age}</span>
        </div>
        <div className="mb-3">
          <div className="d-flex align-items-start">
            <div className="flex-grow-1">
              <label className="form-label">End Date</label>
            </div>
          </div>

          <div className="input-group auth-pass-inputgroup">
            <textarea
              className="form-control"
              name="address"
              id="address"
              placeholder="Enter the end date!"
              value={planDetails.address}
              onChange={handleChange}
            />
          </div>
          <span className="text-danger">{errors.address}</span>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={handleFormSubmit}
        >
          {loading ? <span className="spinner-border spinner-border-sm"></span> : "Submit"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}