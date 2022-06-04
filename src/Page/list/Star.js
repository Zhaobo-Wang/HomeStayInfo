import React, { Component } from "react";
import axios from "axios";
import { Card, Spin } from "antd";
import { DeleteOutlined, StarFilled, LikeOutlined } from "@ant-design/icons";
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
      <div className="List_layout">
        {this.state.forms?.map((form) => {
          return (
            <Card
              title={form.host_name}
              extra={<a href="#">More</a>}
              style={{ width: 280 }}
              actions={[
                <LikeOutlined />,
                <StarFilled  style={{'color':'#F8F86B'}} onClick={()=>{this.handleStar(form._id)}}/>,
                <DeleteOutlined
                  onClick={() => {
                    this.handleDelete(form._id);
                  }}
                />,
              ]}
            >
              <p>
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
              </p>
            </Card>
          );
        })}
      </div>
    );
  }
}
