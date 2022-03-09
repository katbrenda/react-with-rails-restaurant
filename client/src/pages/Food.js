import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../providers/DataProvider";

const Food = (props) => {
  const { deleteFood } = useContext(DataContext);
  const navigate = useNavigate();
  const { id, username, text, source } = props;
  return (
    <div className="border">
      <h1>Food: {text}</h1>
      <p>{username}</p>
      <p>{id}</p>
      <a href={source}>{source}</a>
      <div
        className="border"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <p
          onClick={() =>
            navigate(`/foods/${id}/edit`, {
              state: { id, username, text, source },
            })
          }
        >
          edit
        </p>
        <p onClick={() => deleteFood(id)}>delete</p>
        <p onClick={() => navigate(`/foods/${id}`, { state: props })}>show</p>
      </div>
    </div>
  );
};

export default Food;