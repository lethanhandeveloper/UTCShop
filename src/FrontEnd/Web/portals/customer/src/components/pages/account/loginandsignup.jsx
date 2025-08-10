import { Button, message } from "antd";
import BreadCrumb from "../../layout/breadcrumb";
import { useState } from "react";
import authAPI from "../../../services/api/authAPI";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCustomerInfo } from "../../../redux/auth/auth.slice";

function LoginAndSignUp() {
  const [userName, setUserName] = useState("");
  const [passWord, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    var res = await authAPI.login(userName, userName, passWord, 2);
    if (res.success) {
      await dispatch(getCustomerInfo());
      navigate("/");
    } else {
      message.error(res.message);
    }
  };

  return (
    <>
      <BreadCrumb />
      <div className="page-account u-s-p-t-80">
        {/* container-fluid cho full width */}
        <div className="container-fluid">
          <div className="reg-wrapper">
            <h2 className="account-h2 u-s-m-b-20">Register</h2>
            <h6 className="account-h6 u-s-m-b-30">
              Registering for this site allows you to access your order status and history.
            </h6>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginAndSignUp;
