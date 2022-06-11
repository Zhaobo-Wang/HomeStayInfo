import React, { useState } from "react";
import "./Host_form.css";
import { Form, Input, Button, Checkbox, message, Upload, Select } from "antd";
import axios from "axios";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import ImgCrop from "antd-img-crop";

const Host_form = () => {
  const countryData = ["CA", "USA", "AU", "UK"];
  const cityData = {
    CA: [
      "Toronto",
      "Montreal",
      "Calgary",
      "Ottawa",
      "Edmonton",
      "Winnipeg",
      "Mississauga",
      "Vancouver",
      "Brampton",
      "Hamilton",
    ],
    USA: [
      "New York City",
      "Los Angeles",
      "Chicago",
      "Houston",
      "Phoenix",
      "Philadelphia",
      "San Diego",
      "Dallas",
      "San Jose",
      "Seattle",
    ],
    AU: [
      "Sydney",
      "Melbourne",
      "Brisbane",
      "Perth",
      "Alelaide",
      "GoldCoast",
      "Darwin",
      "Newcastle",
      "Canberra",
    ],
    UK: [
      "London",
      "Birmingham",
      "Glasgow",
      "Bristol",
      "Liverpool",
      "Sheffield",
      "Manchester",
      "Leeds",
      "Edinburgh",
      "Leicester",
    ],
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [apartment_address, setApartment_address] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const [imageDate, setImageDate] = useState("");
  const { Option } = Select;
  const [cities, setCities] = useState(cityData[countryData[0]]);
  const [secondCity, setSecondCity] = useState(cityData[countryData[0]][0]);
  const [country, setCountry] = useState("CA");
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
        country: country,
        city: secondCity,
        apartment_address: apartment_address,
        image: imageSrc,
        imageDate: imageDate,
      });
      message.success("Submit success!");
    } catch (error) {
      message.error(error.response.data.msg.split(",")[0]);
    }
  };

  const handleCountryChange = async (value) => {
    try {
      setCountry(value);
      setCities(cityData[value]);
      setSecondCity(cityData[value][0]);
    } catch (error) {
      message.error("handle country change event is broken");
    }
  };

  const onSecondCityChange = (value) => {
    setSecondCity(value);
  };

  return (
    <Form {...layout} className="form">
      <Form.Item label="Host Name" className="host-form-input">
        <Input
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Form.Item>
      <Form.Item label="Email" className="host-form-input">
        <Input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </Form.Item>
      <Form.Item label="Phone Number" className="host-form-input">
        <Input
          onChange={(e) => {
            setPhone_number(e.target.value);
          }}
        />
      </Form.Item>
      <Form.Item label="Country/City Address" className="host-form-input">
        <Select
          defaultValue={countryData[0]}
          style={{ width: "33%", marginRight: "2rem" }}
          onChange={(e) => {
            handleCountryChange(e);
          }}
        >
          {countryData.map((country) => (
            <Option key={country}>{country}</Option>
          ))}
        </Select>
        <Select
          value={secondCity}
          style={{ width: "60%" }}
          onChange={(e) => onSecondCityChange(e)}
        >
          {cities.map((city) => (
            <Option key={city}>{city}</Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="House/Apartment Address" className="host-form-input">
        <Input
          onChange={(e) => {
            setApartment_address(e.target.value);
          }}
        />
      </Form.Item>
      <Form.Item label="Cover Image" className="host-form-input">
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
