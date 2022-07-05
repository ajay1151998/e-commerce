import React, { useState, useEffect } from "react";
import record from "../Data/api.json";
import "../App.css";
const ItemBar = () => {
  const [limit, setLimit] = useState(15);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // attaching scroll event listener
  }, [limit]);

  const handleScroll = () => {
    let userScrollHeight = window.innerHeight + window.scrollY;
    let windowBottomHeight = document.documentElement.offsetHeight;
    if (userScrollHeight >= windowBottomHeight) {
      if (record.length < 100) {
        setLimit(limit + 15);
        handleScroll();
      }
    }
  };
//   for sorting you scroll 1 time
  const handleSort = () => {
    record.sort((a, b) => {
      return a.price - b.price;
    });
  };

  return (
    <div>
      <div className="btn-style">
        <div>
          <button className="btn-success" onClick={handleSort}>
            Sort
          </button>
        </div>
        <div>
          <button className="btn-success" onClick={handleSort}>
            Filter
          </button>
        </div>
      </div>

      {record.slice(0, limit).map((ele) => {
        return (
          <div className="card">
            <div className="main-style col-4">
              <img src={ele.image} alt="img" />
              <h1>{ele.Title}</h1>
              <div className="style-mrp">
                <h3 className="un-mrp">Rs {ele.MRP}</h3>
                <h4>Rs {ele.price}</h4>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemBar;
