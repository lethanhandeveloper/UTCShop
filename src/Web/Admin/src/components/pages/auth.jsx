import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, message, notification } from "antd";
import { useState } from "react";
import authAPI from "../../services/api/authAPI";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isLoadingLoginButton, setIsLoadingLoginButton] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setIsLoadingLoginButton(true);
    const res = await authAPI.login(
      values.email,
      values.email,
      values.password,
      1,
    );
    debugger;

    if (res.data) {
      navigate("/dashboard");
    } else {
      message.info(res.message);
    }

    setIsLoadingLoginButton(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        background: "linear-gradient(135deg, #a2c2e0, #c8d6e5)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        className="demo-logo-vertical"
        style={{ textAlign: "center", marginBottom: "30px" }}
      >
        <img
          style={{ width: "150px", borderRadius: "50%" }}
          src={`/images/logo.png`}
          alt="Logo"
        />
      </div>

      <h2
        style={{
          color: "#fff",
          marginBottom: "20px",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        Đăng nhập quản trị
      </h2>

      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        style={{
          width: "100%",
          maxWidth: "400px",
          background: "rgba(255, 255, 255, 0.9)",
          padding: "40px 30px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
            style={{
              borderRadius: "8px",
              padding: "12px",
              border: "1px solid #ddd",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            style={{
              borderRadius: "8px",
              padding: "12px",
              border: "1px solid #ddd",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Form.Item>

        <Form.Item>
          {/* <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox style={{ color: "#333" }}>Remember me</Checkbox>
          </Form.Item> */}

          <a
            className="login-form-forgot"
            href=""
            style={{ color: "#ff7f00", fontWeight: "bold", fontSize: "14px" }}
          >
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              fontWeight: "bold",
              background: "#ff7f00",
              color: "#fff",
              border: "none",
              transition: "background-color 0.3s",
            }}
            type="primary"
            htmlType="submit"
            className="login-form-button"
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#e67e00")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#ff7f00")}
            loading={isLoadingLoginButton}
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Auth;
