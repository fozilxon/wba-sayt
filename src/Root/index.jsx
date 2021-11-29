import React from "react";
import Body from "../Component/Body";
import Navbar from "../Component/Navbar";
import OurPartners from "../Component/OurPartners";
import OurTime from "../Component/OurTime";
import Yutuqlar from "../Component/Yutuqlar";

export const Root = () => {
  return (
    <div>
      <Navbar />
      <Body />
      <OurTime />
      <OurPartners />
      <Yutuqlar />
    </div>
  );
};

export default Root;
