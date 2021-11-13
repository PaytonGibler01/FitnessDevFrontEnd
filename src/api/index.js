import axios from 'axios';
import { storeToken, getToken } from "../auth";
const BASE = 'https://something-22.herokuapp.com'


export async function registerUser(userName, password) {
  try {
    const { data } = await axios.post(`${BASE}/api/users/register`, {
     
        username: userName,
        password: password
      
    });

    // try to add email element?
console.log(data)
    return data;
  } catch (error) {
    throw error;
  }
}

export async function loginUser(userName, password) {
  try {
    const { data } = await axios.post(`${BASE}/api/users/login`, {
      user: {
        username: userName,
        password: password,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getCurrentUser() {
  const myToken = getToken();
  try {
    const { data } = await axios.get(`${BASE}/api/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${myToken}`,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getPublicRoutines() {
  const myToken = getToken()
  
  try {
    const { data } = await axios.get(`${BASE}/api/users/:username/routines`, {
      headers: {
        "Content-Type": 'application/json',
          'Authorization': `Bearer ${myToken}`
      }
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function createActivities(id, name, description) {
  const token = getToken();

  try {
    const { data } = await axios.get(
      `${BASE}/api/activities`,
      {
        post: {
          name: name,
          description: description,
          id : id
        },
      },
      {
        headers: {
          "Content-Type": "application/JSON",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    throw error;
  }
}