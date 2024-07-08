import { useState } from "react";

import wave from "assets/svg/wave.svg";

import Form from "components/login/Form";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col h-[100vh]">
      <Form {...{ email, password, setEmail, setPassword }} />
      <img src={wave} alt="" />
    </div>
  );
}

export default Login;
