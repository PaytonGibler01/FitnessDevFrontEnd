async function logoutUser(userName, password) {
    try {
      const {data} = await axios.post(`${BASE}/api/users/login`, {
          user:  { 
            username: userName,
            password: password
          }
          })
      
      return data;
    } catch (error) {
      throw error;
    }
  }
  export default logoutUser;