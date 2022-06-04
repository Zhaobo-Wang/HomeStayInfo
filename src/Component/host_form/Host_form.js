import React, { useState } from "react";
import "./Host_form.css";
import { Form, Input, Button, Checkbox, message, Upload } from "antd";
import axios from "axios";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import ImgCrop from "antd-img-crop";

const Host_form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [apartment_address, setApartment_address] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const [imageDate, setImageDate] = useState("");

  const layout = {
    labelCol: { span: 9 },
    wrapperCol: { span: 15 },
  };

  const handleUpload = async (info) => {
    try {
      if (info.file.status === "uploading") {
        setLoading(true);
      }
      setLoading(false);
      setImageSrc(info.file.response.image.src);
      setImageDate(info.file.lastModifiedDate);
    } catch (error) {
      message.error(
        "Check your image file: maybe it is too large or format wrong!"
      );
    }
  };

  const handleFinish = async () => {
    try {
      await axios.post("http://localhost:5000/api/v1", {
        host_name: name,
        email: email,
        phone_number: phone_number,
        apartment_address: apartment_address,
        image: imageSrc,
        imageDate: imageDate,
      });
      message.success("Submit success!");
    } catch (error) {
      message.error(error.response.data.msg.split(",")[0]);
    }
  };

  return (
    <Form
      {...layout}
      style={{ width: "60rem", padding: "5rem" }}
      className="form"
    >
      <Form.Item label="Host Name">
        <Input
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Form.Item>
      <Form.Item label="Email">
        <Input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </Form.Item>
      <Form.Item label="Phone Number">
        <Input
          onChange={(e) => {
            setPhone_number(e.target.value);
          }}
        />
      </Form.Item>
      <Form.Item label="House/Apartment Address">
        <Input
          onChange={(e) => {
            setApartment_address(e.target.value);
          }}
        />
      </Form.Item>
      <Form.Item label="Cover Image">
        <ImgCrop
          rotate
          modalTitle="Edit your Cover!"
          quality={1}
          aspect={8 / 6}
        >
          <Upload
            name="Image"
            listType="picture-card"
            onChange={handleUpload}
            showUploadList={true}
            action="http://localhost:5000/api/v1/uploads/cover"
          >
            <div className="upload-div">
              <div>{loading ? <LoadingOutlined /> : <PlusOutlined />}</div>
              <div style={{ marginTop: "0.5rem" }}>
                {loading ? "Uploading" : "Upload"}
              </div>
            </div>
          </Upload>
        </ImgCrop>
      </Form.Item>
      <div class="bot-box">
        <Form.Item>
          <Checkbox>Home_Stay</Checkbox>
        </Form.Item>
        <Form.Item>
          <Checkbox>Rent</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            onClick={() => {
              handleFinish();
            }}
          >
            Sumbit
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default Host_form;
