import React from "react";
import NavBar from "./NavBar";
import { db } from "../Firebase";
import { collection, addDoc } from "firebase/firestore";

function ContactPage() {
  return (
    <>
      <NavBar />
    </>
  );
}

export default ContactPage;
