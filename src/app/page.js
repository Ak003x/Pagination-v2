"use client";
import React, { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  //*Fetching data form api

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  console.log(data);

  //* Loading state
  if (loading) return <h3>Please Wait Page is been Loading....</h3>;

  return (
    <div>
      <h1>Simple Pagination</h1>
      <ul>
        {data.map((post) => {
          return (
            <li key={post.id}>
              {post.id}-{post.title }
            </li>
          );
        })}
      </ul>
    </div>
  );
}
