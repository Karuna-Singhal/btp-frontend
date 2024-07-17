import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Form from "components/login/Form";
import restClient from "restClient";

import wave from "assets/svg/wave.svg";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const login = async () => {
    try {
      setIsLoading(true);

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
        if (data.user.role === "admin") navigate("/admin-dashboard");
        toast.success("Logged in successfully");
      }

      console.log(data);
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[100vh]">
      <Form {...{ email, password, setEmail, setPassword, login, isLoading }} />
      <img src={wave} alt="" />
    </div>
  );
}

export default Login;
