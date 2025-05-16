// import React from "react";
// import "./CSS/LoginSignup.css";
// import { useState } from "react";

// const LoginSignup = () => {
//   const [state, setState] = useState("Login");
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//     email: "",
//   });

//   const changeHandler = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const login = async () => {
//     console.log("Login Function Executed", formData);
//   };

//   const signup = async () => {
//     console.log("Signup Function Executed", formData);
//     let responseData;
//     await fetch("http://localhost:4000/signup", {
//       method: "POST",
//       headers: {
//         Accept: "application/form-data",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     })
//       .then((response) => response.json())
//       .then((data) => (responseData = data));

//     if (responseData.success) {
//       localStorage.setItem("auth-token", responseData.token);
//       window.location.replace("/");
//     } else {
//       alert(responseData.errors);
//     }
//   };

//   return (
//     <div className="loginsignup">
//       <div className="loginsignup-container">
//         <h1>{state}</h1>
//         <div className="loginsignup-fields">
//           {state === "Sign Up" ? (
//             <input
//               type="text"
//               name="username"
//               value={formData.username}
//               onChange={changeHandler}
//               placeholder="Your Name"
//             />
//           ) : (
//             <></>
//           )}
//           <input
//             name="email"
//             value={formData.email}
//             onChange={changeHandler}
//             type="email"
//             placeholder="Email Address"
//           />
//           <input
//             name="password"
//             value={formData.password}
//             onChange={changeHandler}
//             type="password"
//             placeholder="password"
//           />
//         </div>
//         <div className="loginsignup-agree">
//           <input type="checkbox" name="" id="" />
//           <p>By continuing, i agree to the terms of use & privacy policy.</p>
//         </div>
//         <button
//           onClick={() => {
//             state === "Login" ? login() : signup();
//           }}
//         >
//           Continue
//         </button>
//         {state === "Sign Up" ? (
//           <p className="loginsignup-login">
//             Already have an account?{""}
//             <span
//               onClick={() => {
//                 setState("Login");
//               }}
//             >
//               Login
//             </span>
//           </p>
//         ) : (
//           <p className="loginsignup-login">
//             Create an account?{" "}
//             <span
//               onClick={() => {
//                 setState("Sign Up");
//               }}
//             >
//               Click here
//             </span>
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;

import React, { useState } from "react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (state === "Sign Up" && formData.username.trim() === "") {
      alert("Please enter your name.");
      return false;
    }
    if (formData.email.trim() === "") {
      alert("Please enter your email.");
      return false;
    }
    if (formData.password.trim() === "") {
      alert("Please enter your password.");
      return false;
    }
    return true;
  };

  const login = async () => {
    if (!validateForm()) return;

    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();
      if (data.success) {
        localStorage.setItem("auth-token", data.token);
        window.location.replace("/");
      } else {
        alert(data.error);
      }
    } catch (err) {
      console.error("Login Error:", err);
    }
  };

  const signup = async () => {
    if (!validateForm()) return;

    try {
      const response = await fetch("http://localhost:4000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        localStorage.setItem("auth-token", data.token);
        window.location.replace("/");
      } else {
        alert(data.error);
      }
    } catch (err) {
      console.error("Signup Error:", err);
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" && (
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={changeHandler}
              placeholder="Your Name"
            />
          )}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Email Address"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={changeHandler}
            placeholder="Password"
          />
        </div>
        <div className="loginsignup-agree">
          <input type="checkbox" />
          <p>
            By continuing, I agree to the <b>terms of use</b> &{" "}
            <b>privacy policy</b>.
          </p>
        </div>
        <button onClick={state === "Login" ? login : signup}>Continue</button>
        {state === "Sign Up" ? (
          <p className="loginsignup-login">
            Already have an account?{" "}
            <span onClick={() => setState("Login")}>Login</span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Don't have an account?{" "}
            <span onClick={() => setState("Sign Up")}>Sign Up</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
