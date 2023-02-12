import { Badge, Menu, Typography } from "antd";
import React from "react";
import "./index.css";
import { HomeFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import Cart from "../Cart";
function Header() {
  const navigate = useNavigate();

  const handleMenuClick = (item) => {
    navigate(`${item.key}`);
  };

  return (
    <div className="header">
      <Menu
        className="menu"
        onClick={handleMenuClick}
        mode="horizontal"
        items={[
          {
            label: <HomeFilled />,
            key: "",
          },
          {
            label: "Men",
            key: "men",
            children: [
              {
                label: "Men's Shirts",
                key: "mens-shirts",
              },
              {
                label: "Men's Shoes",
                key: "mens-shoes",
              },
              {
                label: "Men's Watches",
                key: "mens-watches",
              },
            ],
          },
          {
            label: "Women",
            key: "women",
            children: [
              {
                label: "Women's Dresses",
                key: "womens-dresses",
              },
              {
                label: "Women's Shoes",
                key: "womens-shoes",
              },
              {
                label: "Women's Watches",
                key: "womens-watches",
              },
              {
                label: "Women's Bags",
                key: "womens-bags",
              },
              {
                label: "Women's Jewellery",
                key: "womens-jewellery",
              },
            ],
          },
          {
            label: "Fragrances",
            key: "fragrances",
          },
        ]}
      ></Menu>
      <Typography.Title>Hoang Mai Market</Typography.Title>
      <Cart />
    </div>
  );
}

export default Header;
