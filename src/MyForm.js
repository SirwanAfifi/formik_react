import React from "react";
import { Formik } from "formik";

class MyForm extends React.Component {
  render() {
    return (
      <div>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            age: 0
          }}
          onSubmit={values => {
            alert(JSON.stringify(values));
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            setFieldValue
          }) => {
            return (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    name="firstName"
                    className="form-control"
                    value={values.firstName ? values.firstName : ""}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    name="lastName"
                    className="form-control"
                    value={values.lastName ? values.lastName : ""}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    name="email"
                    className="form-control"
                    value={values.email ? values.email : ""}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Age</label>
                  <input
                    type="number"
                    name="age"
                    className="form-control"
                    value={values.age ? values.age : ""}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
            );
          }}
        </Formik>
      </div>
    );
  }
}

export default MyForm;
