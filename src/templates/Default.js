import React from "react";
import { Container } from "@material-ui/core";
import Header from "../components/header/Header";
import Footer from "../components/Footer/Footer";
export default function Default({ children }) {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
}
