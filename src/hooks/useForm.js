// write your custom hook here to control your checkout form
import React from "react";
import { useState } from "react";

const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

function useForm(props) {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [values, setValues] = useState(initialValue);

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return [
    showSuccessMessage,
    setShowSuccessMessage,
    values,
    setValues,
    handleChanges,
  ];
}

export default useForm;
