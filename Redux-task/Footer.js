import "./App.css";
import React from "react";
import { useSelector } from "react-redux";

export default function Footer() {
  const name = useSelector((state) => state.user.name1);
  return (
    <div className="Footer">
      <h1>{name}</h1>
    </div>
  );
}