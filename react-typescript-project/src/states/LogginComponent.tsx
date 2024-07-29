import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const LogginComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState<AuthUser | null>(null);
  const loginHandler = () => {
    setIsLoggedIn(true);
    setUser({
      name: "Tester 1",
      email: "tester01@test.com",
    });
  };
  const logOutHandler = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <div>
      <button onClick={loginHandler}>Login</button>
      <button onClick={logOutHandler}>LogOut</button>
      <div>User is {isLoggedIn ? "Logged in" : "logged out"}</div>
      {user !== null && (
        <p>
          User Name - {user?.name}
          <br />
          User Email - {user?.email}
        </p>
      )}
    </div>
  );
};

export default LogginComponent;
