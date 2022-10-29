import React, { useState } from "react";
import "./form_choosen.css";

const Form_choosen = ({ setIdentity, Identity }) => {


  const handleEvent = (e) => {
    setIdentity(e.target.value)
    console.log(Identity)
  };

  return (
    <div className="Form_Radio_group">
      <button onClick={handleEvent} value="host" className="host-button">
        I'm Host
      </button>
      <button onClick={handleEvent} value="tenant" className="tenant-button">
        I'm Tenant
      </button>
    </div>
  );
};

export default Form_choosen;
