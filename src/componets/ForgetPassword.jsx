import { useState } from "react";
import axios from "axios";
import Input_Text from "./Input_Text";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://127.0.0.1:3007/api/user/forgotPassword",
        { email }
      );
      setIsLoading(false);
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Error: " + error.response.data.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h2 className="Auth-form-title">Forgot Password</h2>
          <div className="form-group mt-3"></div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <Input_Text
              type="email"
              name="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required={true}
            />
          </div>
        </div>
        <div className="d-grid gap-2 mx-5 my-3">
          <button
            className="btn btn-primary"
            type="submit"
            disabled={isLoading}
          >
            Submit
          </button>
          {message && <p className="text-center mt-2">{message}</p>}
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
