import { Box, Heading, ListItem, OrderedList } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Todo.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "../../redux/action/index";

const Todo = () => {
    const [text, setText] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todos.list);
  console.log(list);

 
  const handleClick = () => {
    dispatch(addTodo(text));

    setText("");
  };

  const navigate = useNavigate();
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/");
      }
    });
  }, [auth, navigate]);
  return (
    <div>
      <Box>
        <Navbar />
      </Box>
      <Heading textAlign={"center"} fontWeight="50">
        Todo Data
      </Heading>
      <Box className="center-div">
        <Box className="center-data">
          <input
            type="text"
            placeholder="Add a data"
            className="input-data"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={handleClick} className="plus_button">
            +
          </button>
          <OrderedList>
       
            {list.map((el) => {
              return (
                <div className="list-data-item" key={el.id}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                    alt="delete"
                    className="dlt-img"
                    onClick={() => dispatch(deleteTodo(el.id))}
                  />
                  <ListItem>{el.text}</ListItem>
                </div>
              );
            })}
          </OrderedList>
        </Box>
      </Box>
    </div>
  );
};

export default Todo;
