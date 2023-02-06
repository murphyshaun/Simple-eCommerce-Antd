import { Badge, Card, Image, List, Rate, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../api";
import AddToCard from "./component/AddToCard";
import "./index.css";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then((res) => {
      setProducts(res.products);
    });
  }, []);
  return (
    <div>
      <List
        grid={{ column: 3 }}
        renderItem={(product, index) => {
          return (
            <Badge.Ribbon
              className="itemCardBage"
              text={product.discountPercentage}
              color="pink"
            >
              <Card
                className="itemCard"
                key={index}
                title={product.title}
                cover={
                  <Image src={product.thumbnail} className="itemCardImage" />
                }
                actions={[
                  <Rate allowHalf disabled value={product.rating} />,
                  <AddToCard item={product} />,
                ]}
              >
                <Card.Meta
                  title={
                    <Typography.Paragraph>
                      Price: ${product.price}{" "}
                      <Typography.Text delete type="danger">
                        $
                        {parseFloat(
                          product.price +
                            (product.price * product.discountPercentage) / 100
                        ).toFixed(2)}
                      </Typography.Text>
                    </Typography.Paragraph>
                  }
                  description={
                    <Typography.Paragraph
                      ellipsis={{ rows: 1, expandable: true, symbol: "more" }}
                    >
                      {product.description}
                    </Typography.Paragraph>
                  }
                ></Card.Meta>
              </Card>
            </Badge.Ribbon>
          );
        }}
        dataSource={products}
      ></List>
    </div>
  );
}

export default Products;
