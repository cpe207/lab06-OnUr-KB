// const axios = require("axios");
import axios from "axios";

/* assign interface/type to the function definition properly */
const getUser = async (userId: number) => {
  try{
    const resp = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId} `);
    const users = resp.data;
    return users.name;

  }catch(err){
    return "INVALID USER ID" ;
  }
};

const getTodo = async (todoId: number) => {
  try{

    const resp2 = await axios.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    const todos = resp2.data;
    const onwerName = await getUser(todos.userId)

    return {
      owner : onwerName,
      title : todos.title,
      completed : todos.completed

    }
  }catch(err){
    return "INVALID TODO ID";
  }
};

//test case
const input1 = 15;
const input2 = 60;
const input3 = 250;

//run
getTodo(input1).then((result) => console.log(result));
getTodo(input2).then((result) => console.log(result));
getTodo(input3).then((result) => console.log(result));

export default getTodo;

//660610741
//Kanyawee Srithankaew 