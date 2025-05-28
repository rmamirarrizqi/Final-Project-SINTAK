import React from "react";
import { TfiFaceSad } from "react-icons/tfi";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-center items-center h-screen text-3xl">
        <TfiFaceSad />
        <h1 className="mt-5">404 NOT FOUND</h1>
        <Link to="/">
          <button className="btn btn-outline mt-5">Go Back</button>
        </Link>
      </div>
    </>
  );
}

export default NotFoundPage;
