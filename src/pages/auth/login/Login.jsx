import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import wave from "assets/svg/wave.svg";

import Form from "components/login/Form";
import restClient from "restClient";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const { data } = await restClient({
        method: "POST",
        url: "/auth/login",
        data: {
          email,
          password,
        },
      });
      if (data.status === "success") {
        localStorage.setItem("role", data.user.role);
        localStorage.setItem("token", data.token);
        localStorage.setItem("name", data.user.name);

        if (data.user.role === "user") navigate("/my-profile");
        toast.success("Logged in successfully");
      }

      console.log(data);
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="flex flex-col h-[100vh]">
      <Form {...{ email, password, setEmail, setPassword, login }} />
      <img src={wave} alt="" />
    </div>
  );
}

export default Login;
