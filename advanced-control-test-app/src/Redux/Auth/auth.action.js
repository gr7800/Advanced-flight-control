// import axios from "axios";
import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS } from "./auth.types";
import { BaseUrl } from "../../utills/helper";

export const login = (creds) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST })
  try {
    const response = await fetch(`${BaseUrl}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(creds),
    });
    const data = await response.json();
    if (data.message === "Login successful") {
      dispatch({ type: LOGIN_SUCCESS, payload: data })
      alert(data.message);
    } else {
      alert(data.message);
    }
    return data;
  }
  catch (e) {
    dispatch({ type: LOGIN_ERROR, payload: e.message })
    console.log(e)
  }
}


export const updateScore = (creds) => async (dispatch) => {
  console.log(creds);
  const user = JSON.parse(localStorage.getItem("user"))
  try {
    const response = await fetch(`${BaseUrl}/user/profileupdate/${user._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(creds),
    });
    const data = await response.json();
    alert(data.message);
    localStorage.setItem("user", JSON.stringify(data.user))
    return data;
  }
  catch (e) {
    dispatch({ type: LOGIN_ERROR, payload: e.message })
    console.log(e)
  }
}


export const getAllUser = async () => {
  const token = JSON.parse(localStorage.getItem("token"));
  let res = await fetch(`${BaseUrl}/user/alluser`, {
    method: 'GET',
    headers: {
      'token': token
    }
  })
  let data = await res.json();
  return data.user;
}

export const singleuser = () => async (dispatch) => {
  const token = JSON.parse(localStorage.getItem("token"));
  try {
    let res = await fetch(`${BaseUrl}/user/singleuser`, {
      method: 'GET',
      headers: {
        'token': token
      }
    })
    let data = await res.json();
    dispatch({ type: LOGIN_SUCCESS, payload: data })
    return data.user;
  } catch (error) {
    console.log(error);
  }
}

export const deleteAuser = async (id) => {
  const token = JSON.parse(localStorage.getItem("token"));
  console.log(token);
  let res = await fetch(`${BaseUrl}/user/delete/${id}`, {
    method: 'DELETE',
    headers: {
      'token': token
    }
  })
  let data = await res.json();
  alert(data.message)
  return data.user;
}

export const forgetpassword = async(creds) => {
  try {
    const response = await fetch(`${BaseUrl}/user/updatepassword`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(creds),
    });
    const data = await response.json();
    alert(data.message);
    if(data.message=="Password updated successfully"){
    return true;
    }else{
      return false
    }
  }
  catch (e) {
    console.log(e)
  }
}


const authlogout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  window.location.reload();
}

export default authlogout;
