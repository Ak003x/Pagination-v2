"use client";
import React, { useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  if (loading) return <h3>Please Wait Page is been Loading....</h3>;

  return (
    <div>
      <h1>Simple Pagination</h1>
    </div>
  );
}
