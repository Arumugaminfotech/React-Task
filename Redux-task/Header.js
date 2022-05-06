import "./App.css";
import React from "react";
import { useSelector } from "react-redux";

export default function Header() {
  const name = useSelector((state) => state.user.name);
  return (
    <div className="Header">
    <h1>{name}</h1>
    </div>
  );
}