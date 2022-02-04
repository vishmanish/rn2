// import instance from './baseAxios';
import axios from "axios";


//registration  controller ---
export async function registerUser(data) {
       // console.log("authentication page data", data);

  try {
		const regData = {
      first_name: data.first_name,
      last_name: data.last_name,
      password: data.password,
      username: data.email,
    };
		// console.log(data1, "************");
    const res = await axios.post("http://localhost:8000/auth/create", regData, {
      headers: {
				'Content-Type' : 'application/json',
				"Access-Control-Allow-Origin": "*"    
			}
    })
    return res;
  } catch (err) {
    console.log("error", err);
    return err;
  }
};



// Login Controller---
export async function loginUser(data){
  console.log("login controller data", data);
  try{
    const loginData ={
      username : data.email,
      password : data.password
    };
    console.log("@@", loginData);
    const res = await axios.post("http://localhost:8000/auth/login", loginData, {
      headers: {
				'Content-Type' : 'application/json',
				"Access-Control-Allow-Origin": "*"    
			}
    })
    return res;
  } catch (err) {
    console.log("error login controller ", err);
    // throw new Error(err);
    return err;
  }
};


//reset password authentication controller ---
export async function passwordAuthentication(data){
  console.log("authentication page data", data)
  try{
    const tokenStr = localStorage.getItem("token");
    console.log(tokenStr);
    const id = localStorage.getItem("id");
    console.log(id);
    const passwordData = {
      id : id,
      old_password:data.oldpassword,
      password : data.password1,
      confirm_password : data.password2,
    };
    console.log("@@", passwordData);
    const res = await axios.put("http://localhost:8000/users/changePassword", passwordData, {
      headers: {
				'Content-Type' : 'application/json',
				"Access-Control-Allow-Origin": "*" ,
                "Authorization" : `Bearer ${tokenStr}`,
			}
    })
    return res;
  } catch (err) {
    console.log("error reset controller ", err);
    // throw new Error(err);
    return err;
  }
};



// forgot password controller --
export async function handleForgotPassword(data){
  console.log(data,"forgotpassword authentication page");
  try{
    const forgetData = {
      username : data.username,
      password : data.password,
      confirm_password : data.confirm_password
    };
    console.log("@@", forgetData);
    const res = await axios.post("http://localhost:8000/auth/forgetPassword", forgetData, {
      headers: {
				'Content-Type' : 'application/json',
				"Access-Control-Allow-Origin": "*" 
			}
    });
    return res;
  } catch (err) {
    console.log("error forgot controller ", err);
    return err;
  }
} ;
