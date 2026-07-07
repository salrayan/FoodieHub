import { useState } from "react";

const Login = ({
  setIsLoggedIn,
  setShowLogin,
}) => {
  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = () => {
    const storedUser = JSON.parse(
      localStorage.getItem("user")
    );

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      alert("Login Successful ");

      setIsLoggedIn(true);
    } else {
      alert(
        "Invalid Email or Password ❌"
      );
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Welcome Back </h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button onClick={handleLogin}>
          Login
        </button>

        <p className="switch-text">
          Don't have an account?
          <span
            onClick={() =>
              setShowLogin(false)
            }
          >
            Signup
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;