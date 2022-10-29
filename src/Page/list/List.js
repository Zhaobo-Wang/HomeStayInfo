import axios from "axios";
import React from "react";
import "./list.css";
import "./List_Panel.css";
import { Card, Spin, Button, Skeleton, Image, message, Select } from "antd";
import {
  DeleteOutlined,
  StarOutlined,
  LikeOutlined,
  StarFilled,
  SlidersOutlined,
} from "@ant-design/icons";
import cityData from "../../DataSheet/CitySheet.json";
import countryData from "../../DataSheet/CountrySheet.json";

class List extends React.Component {
  state = {
    forms: null,
    loading: true,
    spin: false,
    star: false,
    count: 0,
    imageError: false,
    cities: cityData[countryData[0]],
    country: "",
    city: "",
    sort: false,
  };

  async componentDidMount() {
    console.log(this.state.country);
    console.log(this.state.city);
    try {
      this.setState({ loading: true });
      const response = await axios.get("http://localhost:5000/api/v1", {
        params: {
          sort: false,
          city: this.state.city,
          country: this.state.country,
        },
      });
      this.setState({ forms: response.data.forms });
      this.setState({ loading: false });
      this.setState({ star: false });
    } catch (error) {
      message.error(error);
    }
  }

  async handleDelete(id) {
    try {
      await axios.delete(`http://localhost:5000/api/v1/${id}`);
      this.componentDidMount();
    } catch (error) {
      message.error("handle delete function is not working");
    }
  }

  async handleStar(id) {
    try {
      await axios.patch(`http://localhost:5000/api/v1/star/${id}`);
      this.setState({ star: true });
      this.componentDidMount();
    } catch (error) {
      message.error("handle star function is not working");
    }
  }

  async handleLike(id) {
    try {
      await axios.patch(`http://localhost:5000/api/v1/like/${id}`);
      this.setState({ count: this.state.count + 1 });
      this.componentDidMount();
    } catch (error) {
      message.error("handle like function is not working");
    }
  }

  async handleImageError() {
    try {
      this.setState({ imageError: true });
    } catch (error) {
      message.error("handle image error function is not working");
    }
  }

  async handleCountryChange(value) {
    try {
      this.setState({ country: value });
      this.setState({ cities: cityData[value] });
      // this.setState({ city: this.state.cities[0] });
      this.setState({ loading: true });
      const response = await axios.get("http://localhost:5000/api/v1", {
        params: {
          country: value,
        },
      });
      this.setState({ forms: response.data.forms });
      this.setState({ loading: false });
      this.setState({ star: false });
    } catch (error) {
      message.error("handle country change event is broken");
    }
  }

  async handlecityChange(value) {
    try {
      this.setState({ city: value });
      this.setState({ loading: true });
      const response = await axios.get("http://localhost:5000/api/v1", {
        params: {
          city: value,
        },
      });
      this.setState({ forms: response.data.forms });
      this.setState({ loading: false });
      this.setState({ star: false });
    } catch (error) {
      message.error("handle city change event is broken");
    }
  }

  async handleDateSort(e) {
    console.log(e);
    try {
      this.setState({ sort: !this.state.sort });
      this.setState({ loading: true });
      const response = await axios.get("http://localhost:5000/api/v1", {
        params: {
          sort: this.state.sort,
          city: this.state.city,
          country: this.state.country,
        },
      });
      this.setState({ forms: response.data.forms });
      this.setState({ loading: false });
      this.setState({ star: false });
    } catch (error) {
      message.error("handle Date Sort event is broken");
    }
  }

  render() {
    if (this.state.loading === true) {
      return <Spin size="large" />;
    }
    return (
      <div className="list-page">
        <div className="list_panel">
          <div className="list_title">
            <h1>Display All HomeStay Panel</h1>
          </div>
          <div className="radio_group_panel">
            <div className="radio-group-panel-1">
              <Select
                placeholder="country"
                value={this.state.country}
                onChange={(e) => {
                  this.handleCountryChange(e);
                }}
              >
                {countryData.map((country) => (
                  <Select.Option key={country}>{country}</Select.Option>
                ))}
              </Select>
            </div>
            <div className="radio-group-panel-1">
              <Select
                value={this.state.city}
                onChange={(e) => this.handlecityChange(e)}
              >
                {this.state.cities.map((city) => (
                  <Select.Option key={city}>{city}</Select.Option>
                ))}
              </Select>
            </div>
            <div className="radio-group-panel-1">
              <Button
                icon={<SlidersOutlined />}
                onClick={(e) => this.handleDateSort(e)}
              />
            </div>
          </div>
        </div>
        <div className="List_layout">
          {this.state.forms?.map((form) => {
            return (
              <Card
                className="Card"
                cover={
                  this.imageError ? (
                    <Skeleton.Image className="skeleton" />
                  ) : (
                    <Image
                      src={form.image}
                      placeholder={<Skeleton.Image className="skeleton" />}
                      onError={this.handleImageError}
                    />
                  )
                }
                hoverable
                actions={[
                  <Button
                    type="text"
                    onClick={() => {
                      this.handleLike(form._id);
                    }}
                  >
                    <LikeOutlined /> {form.count}
                  </Button>,
                  <Button
                    type="text"
                    onClick={() => {
                      this.handleStar(form._id);
                    }}
                    icon={
                      form.star ? (
                        <StarFilled style={{ color: "#F8F86B" }} />
                      ) : (
                        <StarOutlined />
                      )
                    }
                  ></Button>,
                  <Button type="text">
                    <DeleteOutlined
                      onClick={() => {
                        this.handleDelete(form._id);
                      }}
                    />
                  </Button>,
                ]}
              >
                <p>
                  <h1 className="line">Contact: {form.host_name}</h1>
                </p>
                <p>
                  Post on{" "}
                  {new Date().getDate() < 10
                    ? form.imageDate.substring(9, 10) ===
                      String(new Date().getDate())
                      ? "Today"
                      : form.imageDate.substring(0, 10)
                    : form.imageDate.substring(8, 10) ===
                      String(new Date().getDate())
                      ? "Today"
                      : form.imageDate.substring(0, 10)}
                </p>
                {/* 以上逻辑说明， 当date < 10 的时候，只取最后一位比较 例如（6===6） ， date > 10 的时候， 取 两位进行比较 例如（13===13）   */}
                {/* <p>
                  <h1 className="line">Email: </h1>
                  {form.email}
                </p>
                <p>
                  <h1 className="line">Phone_number: </h1>
                  {form.phone_number}
                </p>
                <p>
                  <h1 className="line">Apartment_address: </h1>
                  {form.apartment_address}
                </p> */}
              </Card>
            );
          })}
        </div>
      </div>
    );
  }
}

export default List;
