import { useState } from "react";

const Signup = ({
  setShowLogin,
}) => {
  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleSignup = () => {
    const existingUser = JSON.parse(
      localStorage.getItem("user")
    );

    if (
      existingUser &&
      existingUser.email === email
    ) {
      alert(
        "User already exists ❌"
      );

      return;
    }

    const userData = {
      name,
      email,
      password,
    };

    localStorage.setItem(
      "user",
      JSON.stringify(userData)
    );

    alert(
      "Signup Successful "
    );

    setShowLogin(true);
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Create Account </h2>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

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

        <button onClick={handleSignup}>
          Signup
        </button>

        <p className="switch-text">
          Already have an account?
          <span
            onClick={() =>
              setShowLogin(true)
            }
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;