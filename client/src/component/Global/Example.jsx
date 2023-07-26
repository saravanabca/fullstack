import React, { useState,useRef } from 'react';
import './Example.css';

const MyForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });
  const formRef = useRef(null);
  const [errors, setErrors] = useState({});
  const [validationError, setValidationError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Validation:
  const validateForm = () => {
    let validationErrors = {};

    if (!formData.title.trim()) {
      validationErrors.title = 'title is required';
    }else if (formData.title.length < 4){
      validationErrors.title = "Input must be at least 4 characters long."
    }

   else if (!formData.description.trim()) {
      validationErrors.description = 'description is required';
    } 

    // if (!formData.password.trim()) {
    //   validationErrors.password = 'Password is required';
    // } else if (formData.password.length < 6) {
    //   validationErrors.password = 'Password should be at least 6 characters long';
    // }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isFormValid = validateForm();
    //  console.log(isFormValid);
    // const answer =JSON.stringify(formData);
    // console.log(answer);



    if (isFormValid) {

      const jsonData = JSON.stringify(formData);
      console.log(jsonData);

      // const fetchData = async () => {
      //   try {
      //     const response = await fetch('http://localhost:8080/api/tutorials/', {
      //       method: 'POST',
      //       headers: {
      //         'Content-Type': 'application/json',
      //         // Add any other required headers
      //       },
      //       body: JSON.stringify(formData),
            
      //     });
        
      //     if (!response.ok) {
      //       throw new Error('Network response was not ok');
      //     }
      //     console.log(response);
      //     // const jsonData = await response.json();
      //     // formData(jsonData);
      //     // setError(null); // Clear any previous error
      //   } catch (error) {
      //     console.error('Error fetching data:', error);
      //     // setError('Error fetching data. Please try again later.');
      //   }
      
      // };
      // Perform actions with the form data
      // console.log(formData);
      
    }
  };

  return (
    <div className='dashboard'>
    <form onSubmit={handleSubmit} ref={formRef}>
      <div>
        <label>Title:</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} />
        {errors.title && <span className='text-danger'>{errors.title}</span>}
        {validationError && <div className='text-danger'>{validationError}</div>}
      </div>
      <div>
        <label>description:</label>
        <input type="text" name="description" value={formData.description} onChange={handleChange} />
        {errors.description && <span className='text-danger'>{errors.description}</span>}
      </div>
      {/* <div>
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        {errors.password && <span className='text-danger'>{errors.password}</span>}
      </div> */}

      <button type="submit">Submit</button>
      {/* <div><input type="reset" value="Reset Form"/></div> */}
    </form>
    </div>
  );
};

export default MyForm;
