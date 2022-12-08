import React from "react";
import AboutComponent from "../components/About/AboutComponent";
import BannerComponent from "../components/Banner/BannerComponent";
import RegisterComponent from "../components/Register/RegisterComponent";
import TemplateDefault from "../templates/Default";

export default function Home() {
  return (
    <TemplateDefault>
      <BannerComponent />
      <AboutComponent />
      <RegisterComponent />
    </TemplateDefault>
  );
}
