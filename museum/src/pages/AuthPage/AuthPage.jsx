import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import "./authPage.css";

export default function AuthPage({ setUser }) {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const toggleForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <main>
      <div className="page-container">
        <div className="login-signup-form">
          <h1>Welcome!</h1>
          <p>Login or Sign Up to continue</p>
          {showLoginForm ? (
            <>
              <LoginForm setUser={setUser} />
              <p>
                Don't have an account?{" "}
                <button onClick={toggleForm}>Sign Up</button>
              </p>
            </>
          ) : (
            <>
              <SignUpForm setUser={setUser} />
              <p>Already have an account?</p>
              <button onClick={toggleForm}>Log In</button>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
