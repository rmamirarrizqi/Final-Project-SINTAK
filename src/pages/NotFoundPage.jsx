import React from "react";
import { TfiFaceSad } from "react-icons/tfi";
import NavBar from "./NavBar";

function NotFoundPage() {
  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center">
        <TfiFaceSad />
        <h1>| 404 NOT FOUND</h1>
      </div>
    </>
  );
}

export default NotFoundPage;
