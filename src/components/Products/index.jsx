import { Badge, Card, Image, List, Rate, Spin, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllProducts, getProductsByCategory } from "../../api";
import AddToCard from "./component/AddToCard";
import "./index.css";

function Products() {
  const [isLoading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  useEffect(() => {
    setLoading(true);
    (categoryId ? getProductsByCategory(categoryId) : getAllProducts()).then(
      (res) => {
        setProducts(res.products);
        setLoading(false);
      }
    );
  }, [categoryId]);

  if (isLoading) {
    return <Spin spinning={isLoading} indicator="" />;
  }
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
