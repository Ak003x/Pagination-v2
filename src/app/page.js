"use client";
import React, { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

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

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  const totalPage = Math.ceil(data.length) / postPerPage;

  const paginate = (page) => setCurrentPage(page);
  //* Loading state
  if (loading) return <h3>Please Wait Page is been Loading....</h3>;

  return (
    <div>
      <h1>Simple Pagination</h1>
      <ul>
        {currentPosts.map((post) => {
          return (
            <li key={post.id}>
              {post.id}-{post.title}
            </li>
          );
        })}
      </ul>

      <div className="space-x-2">
        <button onClick={() => paginate(1)}>First</button>
        <button
          disabled={currentPage === 1}
          onClick={() => paginate(currentPage - 1)}
        >
          Pervious{" "}
        </button>

        {new Array(totalPage).fill(0).map((_, index) => {
          return (
            <button
              className={currentPage === index + 1 ? "text-blue-500" : ""}
              onClick={() => paginate(index + 1)}
              key={index + 1}
            >
              {index + 1}
            </button>
          );
        })}
        <button
          disabled={currentPage === totalPage}
          onClick={() => paginate(currentPage + 1)}
        >
          Next
        </button>
        <button className="bg-red-500 rounded" onClick={() => paginate(totalPage)}>Last</button>
      </div>
    </div>
  );
}
