import React, { Component } from "react";
import axios from "axios";
import { Card, Spin, Button, Skeleton, Image, message, Select } from "antd";
import {
  DeleteOutlined,
  StarOutlined,
  LikeOutlined,
  StarFilled,
  SlidersOutlined,
} from "@ant-design/icons";
import "./list.css";

export default class Star extends Component {
  state = {
    forms: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const response = await axios.get("http://localhost:5000/api/v1/star");
      this.setState({ forms: response.data.forms });
      this.setState({ loading: false });
    } catch (error) {
      console.log("not get the response from the backend");
    }
  }

  async handleStar(id) {
    try {
      await axios.patch(`http://localhost:5000/api/v1/star/${id}`);
      this.componentDidMount();
    } catch (error) {
      console.log('could not handle star');
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
            <h1>Display All Favorite Panel</h1>
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
