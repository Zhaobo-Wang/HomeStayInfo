import React, { useState } from "react";
import "./form.css";
import Form_Choosen from "../../Component/form_choosen/Form_choosen";
import Host_form from "../../Component/host_form/Host_form";
import Tenant_form from "../../Component/tenant_form/Tenant_form";


const Form_data = () => {
  const [Identity, setIdentity] = useState("host");

  return (
    <div className="whole-form">
      <div className="form-chosen">
        <Form_Choosen setIdentity={setIdentity} Identity={Identity} />
      </div>
      {Identity === "host" ? <Host_form /> : <Tenant_form />}
    </div>
  );
};

export default Form_data;
