import axios from 'axios';
import { storeToken, getToken,storeUser } from "../auth";
const BASE = 'https://fitnesstrac-kr.herokuapp.com/api'


export async function registerUser(userName, password) {
  try {
    const { data } = await axios.post(`${BASE}/users/register`, {
     
        username: userName,
        password: password
      
    });

    // try to add email element?
    // console.log(data)
    return data;
  } catch (error) {
    throw error;
  }
}

export async function loginUser(userName, password) {
  try {
    const { data } = await axios.post(`${BASE}/users/login`, {
     
        username: userName,
        password: password,
      
    });
    storeToken(data.token);
    storeUser(data.user.username);

    return data;
  } catch (error) {
    throw error;
  }
}
export async function deleteActivities(id) {
  const myToken = getToken();

  try {
    const { data } = await axios.delete(`${BASE}/routine_activities/${id}`, {
      headers: {
        "Content-Type": "application/JSON",
        "Authorization": `Bearer ${myToken}`
      }
    });
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}
export async function deleteRoutines(routineId) {
  const myToken = getToken()
  try {
    const { data } = await axios.delete(
      `${BASE}/routines/${routineId}`,
      {
        headers: {
          "Content-Type": "application/JSON",

          "Authorization": `Bearer ${myToken}`,
        },
      }
    );
    console.log(data)
    return data;
  } catch (error) {
    throw error;
  }finally{
    location.reload();
  }
}
export async function getCurrentUser() {
  const myToken = getToken();
  try {
    const { data } = await axios.get(`${BASE}/users/me`, {
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
export async function getRoutines() {
  try {
    const { data } = await axios.get(`${BASE}/routines`);
    return data;
  } catch (error) {
    throw error;
  }
}
export async function getPublicRoutines() {
  const myToken = getToken()
  
  try {
    const { data } = await axios.get(`${BASE}/users/:username/routines`, {
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
export async function getAllActivities() {
  try {
    const { data } = await axios.get(`${BASE}/activities`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
}
export async function createRoutines(name, goal, Public) {
  const myToken = getToken();
  try {
    const { data } = await axios.post(
      `${BASE}/routines`,
      {
        name: name,
        goal: goal,
        isPublic: true
      },
      {
        headers: {
          "Content-Type": "application/JSON",
          Authorization: `Bearer ${myToken}`
        }
      }
    );
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}


export async function createActivities(name, description, count, duration) {
  const token = getToken();

  try {
    const { data } = await axios.get(
      `${BASE}/activities`,
      {
        post: {
          name: name,
          description: description,
          count: count,
          duration: duration
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