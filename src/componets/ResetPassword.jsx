import { useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";
import Input_Text from "./Input_Text";

const ResetPassword = () => {
  const { token } = useParams(); // token from the URL
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post(
        `http://127.0.0.1:3007/api/user/resetpassword/${token}`,
        { password, confirmPassword }
      );
      setMessage(response.data.message);
      setTimeout(() => {
      navigate("/login")
      }, 3000);
    } catch (error) {
      setMessage("Error: " + error.response.data.message);
    }
    
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h2 className="Auth-form-title">Reset Password</h2>
          <div className="form-group mt-3"></div>
          <div className="form-group mt-3">
            <label>New Password</label>
            <Input_Text
              type="password"
              placeholder="New Password"
              onChange={(e) => setPassword(e.target.value)}
              required={true}
              value={password}
            />
          </div>
          <div className="form-group mt-3">
            <label>Confirm Password</label>
            <Input_Text
              type="password"
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required={true}
            />
          </div>
        </div>
        <div className="d-grid gap-2 mx-5 my-3">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
          {message && <p className="text-center mt-2">{message}</p>}
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
