import { Button, message, notification, Spin } from "antd";
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
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="login-wrapper">
                <h2 className="account-h2 u-s-m-b-20">Login</h2>
                <h6 className="account-h6 u-s-m-b-30">
                  Welcome back! Sign in to your account.
                </h6>
                <div className="u-s-m-b-30">
                  <label htmlFor="user-name-email">
                    Username or Email
                    <span className="astk">*</span>
                  </label>
                  <input
                    type="text"
                    id="user-name-email"
                    className="text-field"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Username / Email"
                  />
                </div>
                <div className="u-s-m-b-30">
                  <label htmlFor="login-password">
                    Password
                    <span className="astk">*</span>
                  </label>
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    id="login-password"
                    className="text-field"
                    placeholder="Password"
                  />
                </div>
                <div className="group-inline u-s-m-b-30">
                  <div className="group-1">
                    <input
                      type="checkbox"
                      className="check-box"
                      id="remember-me-token"
                    />
                    <label className="label-text" htmlFor="remember-me-token">
                      Remember me
                    </label>
                  </div>
                  <div className="group-2 text-right">
                    <div className="page-anchor">
                      <a href="lost-password.html">
                        <i className="fas fa-circle-o-notch u-s-m-r-9" />
                        Lost your password?
                      </a>
                    </div>
                  </div>
                </div>
                <div className="m-b-45">
                  <button
                    type="button"
                    className="button button-outline-secondary w-100"
                    onClick={(e) => handleLogin(e)}
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="reg-wrapper">
                <h2 className="account-h2 u-s-m-b-20">Register</h2>
                <h6 className="account-h6 u-s-m-b-30">
                  Registering for this site allows you to access your order
                  status and history.
                </h6>
                <form>
                  <div className="u-s-m-b-30">
                    <label htmlFor="user-name">
                      Full Name
                      <span className="astk">*</span>
                    </label>
                    <input
                      type="text"
                      id="user-name"
                      className="text-field"
                      placeholder="Nguyen Van A"
                    />
                  </div>
                  <div className="u-s-m-b-30">
                    <label htmlFor="user-name">
                      Username
                      <span className="astk">*</span>
                    </label>
                    <input
                      type="text"
                      id="user-name"
                      className="text-field"
                      placeholder="nguyenvana"
                    />
                  </div>
                  <div className="u-s-m-b-30">
                    <label htmlFor="email">
                      Email
                      <span className="astk">*</span>
                    </label>
                    <input
                      type="text"
                      id="email"
                      className="text-field"
                      placeholder="Nguyenvana@gmail.com"
                    />
                  </div>
                  <div className="u-s-m-b-30">
                    <label htmlFor="password">
                      Password
                      <span className="astk">*</span>
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="text-field"
                      value={passWord}
                      onChange={(e) => setPassword(e.value)}
                      placeholder="Password"
                    />
                  </div>
                  <div className="u-s-m-b-30">
                    <label htmlFor="password">
                      Age
                      <span className="astk">*</span>
                    </label>
                    <input
                      type="number"
                      id="password"
                      className="text-field"
                      value={passWord}
                      onChange={(e) => setPassword(e.value)}
                      placeholder="18"
                    />
                  </div>
                  <div className="u-s-m-b-30">
                    <label htmlFor="password">
                      Address
                      <span className="astk">*</span>
                    </label>
                    {/* <input
                      type="textarea"
                      id="password"
                      className="text-field"
                      value={passWord}
                      onChange={(e) => setPassword(e.value)}
                      placeholder="Quan 1, Thanh Pho Ho Chi Minh"
                    /> */}
                    <select className="text-field">
                      <option>AAA</option>
                      <option>AAA</option>
                      <option>AAA</option>
                      <option>AAA</option>
                    </select>
                  </div>
                  <div className="u-s-m-b-30">
                    <label htmlFor="password">
                      Address
                      <span className="astk">*</span>
                    </label>
                    <input
                      type="textarea"
                      id="password"
                      className="text-field"
                      value={passWord}
                      onChange={(e) => setPassword(e.value)}
                      placeholder="Quan 1, Thanh Pho Ho Chi Minh"
                    />
                  </div>
                  <div className="u-s-m-b-30">
                    <input type="checkbox" className="check-box" id="accept" />
                    <label className="label-text no-color" htmlFor="accept">
                      I’ve read and accept the
                      <a href="terms-and-conditions.html" className="u-c-brand">
                        terms &amp; conditions
                      </a>
                    </label>
                  </div>
                  <div className="u-s-m-b-45">
                    <button className="button button-primary w-100">
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginAndSignUp;
