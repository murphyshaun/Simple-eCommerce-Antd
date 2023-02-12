import { Typography } from "antd";
import React from "react";
import "./index.css";

function Footer() {
  return (
    <div className="footer">
      <Typography.Link href="https://www.google.com" target="_blank">
        Privacy Policy
      </Typography.Link>
      <Typography.Link href="https://www.google.com" target="_blank">
        Terms & Conditions
      </Typography.Link>
      <Typography.Link href="https://www.google.com" target="_blank">
        Return Policy
      </Typography.Link>
      <Typography.Link href="tel: +1234234" target="_blank">
        +84-0118908098234
      </Typography.Link>
    </div>
  );
}

export default Footer;
