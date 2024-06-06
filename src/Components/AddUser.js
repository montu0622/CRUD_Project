import React, { useState } from "react";
import { createUser } from "../Services/services";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddUser = ({ setShowContactForm, setUserLoad }) => {
  const user = {
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    contact_number: "",
    password: "",
    date_of_birth: "",

  };
  const [userData, setUserData] = useState(user);

  const handleUser = (e) => {
    const { name, value, checked } = e.target;
    if (checked) {
      setUserData((prev) => ({ ...prev, gender: value }));
    } else {
      setUserData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const [showPassword, setShowPassword] = useState();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        contact_number: "",
        password: "",
        date_of_birth: "",

        
       
      },
      validationSchema: Yup.object({
        first_name: Yup.string()
          .min(3, "must contain atleast 3 characters")
          .max(25)
          .required("Please enter your fristnamename"),
         last_name: Yup.string()
          .min(3, "must contain atleast 3 characters")
          .max(25)
          .required("Please enter your lastname"),
          username: Yup.string()
          .min(3, "must contain atleast 3 characters")
          .max(25)
          .required("Please enter your username"),
        email: Yup.string()
          .email()
          .matches(
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "invalid email address"
          )
          .required("Please enter your email"),
          contact_number: Yup.string()
          .min(10, "invalid phone number")
          .max(10, "invalid phone number")
          .required("Please enter your contact"),
          password: Yup.string()
          .min(8, "Password must contain minimum 8 characters")
          .required("Please enter a password"),
          date_of_birth: Yup.date().required("Please enter your birth date"),
       
      }),
      onSubmit: (values) => {},
    });

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleUserSubmit = (e) => {
    e.preventDefault();
    if (
      !userData.first_name ||
      !userData.last_name ||
      !userData.username ||
      !userData.email ||
      !userData.contact_number ||
      !userData.password ||
      !userData.date_of_birth 
      
    ) {
      toast.error("Please Fill the Details", {
        autoClose: 1200,
        pauseOnHover: false,
      });
    } else {
      createUser(userData)
        .then((res) => {
          setShowContactForm(false);
          setUserLoad(false);
          toast.success("User Added sucessfully", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1200,
            pauseOnHover: false,
          });
        })
        .catch((err) => {
          console.log("err");
          toast.error("something went wrong", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1200,
            pauseOnHover: false,
          });
        });
    }
  };

  return (
    <>
      <div className="form-body">
        <div className="row">
          <div className="form-holder">
            <div className="form-content">
              <div className="form-items">
                <button
                  className="cross"
                  onClick={() => {
                    setShowContactForm(false);
                  }}
                >
                  <img src="../assets/icons/close.svg" alt="" />
                </button>
                <h3>Add Contact</h3>
                <p>Fill in the data below.</p>
                <form
                  className="requires-validation"
                  noValidate
                  onSubmit={handleSubmit}
                >
                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="text"
                      name="first_name"
                      placeholder="Frist name"
                      value={values.first_name}
                      onChange={(e) => {
                        handleUser(e);
                        handleChange(e);
                      }}
                      onBlur={handleBlur}
                    />
                    {touched.first_name && errors.first_name ? (
                      <div className="invalid-feedback">{errors.first_name}</div>
                    ) : (
                      <div className="valid-feedback">first_name field is valid!</div>
                    )}
                  </div>
                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="text"
                      name="last_name"
                      placeholder="Last name"
                      value={values.last_name}
                      onChange={(e) => {
                        handleUser(e);
                        handleChange(e);
                      }}
                      onBlur={handleBlur}
                    />
                    {touched.last_name && errors.last_name ? (
                      <div className="invalid-feedback">{errors.last_name}</div>
                    ) : (
                      <div className="valid-feedback">lastname field is valid!</div>
                    )}
                  </div>

                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="text"
                      name="username"
                      placeholder="User Name"
                      value={values.username}
                      onChange={(e) => {
                        handleUser(e);
                        handleChange(e);
                      }}
                      onBlur={handleBlur}
                    />
                    {touched.username && errors.username ? (
                      <div className="invalid-feedback">{errors.username}</div>
                    ) : (
                      <div className="valid-feedback">
                        Username field is valid!
                      </div>
                    )}
                  </div>

                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="E-mail Address"
                      value={values.email}
                      onChange={(e) => {
                        handleUser(e);
                        handleChange(e);
                      }}
                      onBlur={handleBlur}
                    />
                    {touched.email && errors.email ? (
                      <div className="invalid-feedback">{errors.email}</div>
                    ) : (
                      <div className="valid-feedback">
                        Email field is valid!
                      </div>
                    )}
                  </div>

                  <div className="col-md-12">
                    <input
                      maxLength="10"
                      className="form-control"
                      type="text"
                      name="contact_number"
                      placeholder="Contact"
                      value={values.contact_number}
                      onChange={(e) => {
                        handleUser(e);
                        handleChange(e);
                      }}
                      onBlur={handleBlur}
                    />
                    {touched.contact && errors.contact ? (
                      <div className="invalid-feedback">{errors.contact_number}</div>
                    ) : (
                      <div className="valid-feedback">
                        You selected a contact!
                      </div>
                    )}
                  </div>

                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      value={values.password}
                      onChange={(e) => {
                        handleUser(e);
                        handleChange(e);
                      }}
                      onBlur={handleBlur}
                    />
                    <div className="hidePassword" onClick={handlePassword}>
                      {showPassword ? (
                        <img src="../assets/icons/unlock.svg" alt="unlock" />
                      ) : (
                        <img src="../assets/icons/lock.svg" alt="lock" />
                      )}
                    </div>
                    {touched.password && errors.password ? (
                      <div className="invalid-feedback">{errors.password}</div>
                    ) : (
                      <div className="valid-feedback">
                        Password field is valid!
                      </div>
                    )}
                  </div>

                  <div className="col-md-12 d-flex">
                    <label className="mt-4 me-4" htmlFor="DOB">
                      DOB:{" "}
                    </label>
                    <input
                      className="form-control"
                      type="date"
                      name="date_of_birth"
                      value={values.date_of_birth}
                      id="DOB"
                      onChange={(e) => {
                        handleUser(e);
                        handleChange(e);
                      }}
                      onBlur={handleBlur}
                    />
                  </div>
                  {touched.date_of_birth && errors.date_of_birth ? (
                    <div className="invalid-feedback">{errors.date_of_birth}</div>
                  ) : (
                    <div className="valid-feedback">DOB field is valid!</div>
                  )}

                  {/* <div className="col-md-12 mt-3">
                    <label className="mb-3 me-1" htmlFor="gender">
                      Gender:{" "}
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="gender"
                      id="Male"
                      value="Male"
                      autoComplete="off"
                      onChange={(e) => {
                        handleUser(e);
                        handleChange(e);
                      }}
                      onBlur={handleBlur}
                    />
                    <label
                      className="btn btn-sm btn-outline-secondary me-2"
                      htmlFor="Male"
                    >
                      Male
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="gender"
                      value="Female"
                      id="Female"
                      autoComplete="off"
                      onChange={(e) => {
                        handleUser(e);
                        handleChange(e);
                      }}
                      onBlur={handleBlur}
                    />
                    <label
                      className="btn btn-sm btn-outline-secondary"
                      htmlFor="Female"
                    >
                      Female
                    </label>
                    {touched.gender && errors.gender ? (
                      <div className="invalid-feedback">{errors.gender}</div>
                    ) : (
                      <div className="valid-feedback">
                        Username field cannot be blank!
                      </div>
                    )}
                  </div> */}

                  <div className="form-button mt-3">
                    <button
                      id="submit"
                      type="submit"
                      onClick={(e) => {
                        handleUserSubmit(e);
                        handleSubmit(e);
                      }}
                      className="btn btn-primary"
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUser;
