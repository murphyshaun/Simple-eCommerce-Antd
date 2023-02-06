import { Button, message } from "antd";
import React, { useState } from "react";
import { addToCard } from "../../../../api";

function AddToCard({ item }) {
  const [loading, setLoading] = useState(false);
  const handleAddProductToCard = () => {
    setLoading(true);
    addToCard(item.id).then((res) => {
      message.success(`${item.title} has been added to card!`);
      setLoading(false);
    });
  };
  return (
    <Button type="link" onClick={handleAddProductToCard} loading={loading}>
      AddToCard
    </Button>
  );
}

export default AddToCard;
