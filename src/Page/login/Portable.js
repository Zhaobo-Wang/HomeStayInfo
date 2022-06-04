import React, { useContext } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { AuthContext } from "../../Context/AuthContext";
import { UserNameContext } from "../../Context/UserNameContext";

const Portable = (userSignUpAlready) => {
  const { authentication, setAuthentication } = useContext(AuthContext);
  const { userName, setUserName } = useContext(UserNameContext);
  return (
    <>
      {userSignUpAlready.userSignUpAlready ? (
        <LoginForm
          userName={userName}
          setUserName={setUserName}
          authentication={authentication}
          setAuthentication={setAuthentication}
        />
      ) : (
        <SignupForm
          userName={userName}
          setUserName={setUserName}
          authentication={authentication}
          setAuthentication={setAuthentication}
        />
      )}
    </>
  );
};

export default Portable;
