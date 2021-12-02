import React from "react";
import Body from "../../Component/Body";
import Footer from "../../Component/Footer";
import Kurs from "../../Component/Kurs";
import OurPartners from "../../Component/OurPartners";
import OurTime from "../../Component/OurTime";
import Sertifikat from "../../Component/Sertifikat";
import Youtobe from "../../Component/YouTobe";
import Yutuqlar from "../../Component/Yutuqlar";

export const OnePage = () => {
  return (
    <div>
      <Body />
      <OurTime />
      <OurPartners />
      <Yutuqlar />
      <Kurs />
      {/* <Youtobe /> */}
      <Sertifikat />
      <Footer />
    </div>
  );
};

export default OnePage;
