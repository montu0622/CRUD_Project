import axios from "axios";

const api_URL = "http://localhost:8080/user";


export const addTask = async (body) => {
  return await axios.post(api_URL+"/", body);
};

export const getTask = async () => {
  return await axios.get(api_URL+"/");
};
export const deleteTask =  (id) => {
  console.log('delete' , id);
  return  axios.delete(api_URL + "/" + id);
};

export const createUser = async (body) => {
  return await axios.post(api_URL+"/create-user", body);
};
export const getUser = async () => {
  return await axios.get(api_URL+"/getAll-data");
};