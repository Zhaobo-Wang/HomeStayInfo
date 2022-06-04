import React, { useState } from "react";
import "./form_choosen.css";
import { Select, Radio } from "antd";

const Form_choosen = ({setIdentity,Identity}) => {


  const handleEvent = (e) => {
    setIdentity(e.target.value)
    console.log(Identity)
  };

  return (
    <Radio.Group onChange={handleEvent} value={Identity}>
      <Radio.Button value="host">I'm Host</Radio.Button>
      <Radio.Button value="tenant">I'm Tenant</Radio.Button>
    </Radio.Group>
  );
};

export default Form_choosen;
