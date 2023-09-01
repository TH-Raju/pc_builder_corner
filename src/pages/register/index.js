import React, { useContext } from "react";
import { Form, Input, Button, Row, Col, Card } from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  GithubOutlined,
  GoogleOutlined,
} from "@ant-design/icons";
import { useForm, Controller } from "react-hook-form";
import Link from "next/link";

import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import AuthContext from "@/context/AuthContext";
const RootLayout = dynamic(
  () => import("../../components/layouts/RootLayout"),
  {
    ssr: false,
  }
);
const Register = () => {
  const { control, handleSubmit } = useForm();
  const { error, registerUser, clearErrors, user, loading } =
    useContext(AuthContext);
  const router = useRouter();
  const onSubmit = (data) => {
    registerUser({
      name: data?.name,
      email: data?.email,
      password: data?.password,
    });
    if (!error) {
      router.push("/login");
      toast.success("User Created Successful");
    }
  };
  if (error) {
    toast.error(error);
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
      <Col xs={20} sm={16} md={12} lg={8}>
        <Card title="Register" style={{ textAlign: "center" }}>
          <Form onFinish={handleSubmit(onSubmit)}>
            <Form.Item>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                rules={{ required: "Username is required" }}
                render={({ field, fieldState }) => (
                  <Input
                    {...field}
                    prefix={<UserOutlined />}
                    placeholder="Username"
                    size="large"
                    autoFocus
                    autoComplete="off"
                    addonAfter={
                      fieldState.error && fieldState.touched ? (
                        <span style={{ color: "red" }}>
                          {fieldState.error.message}
                        </span>
                      ) : null
                    }
                  />
                )}
              />
            </Form.Item>
            <Form.Item>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address",
                  },
                }}
                render={({ field, fieldState }) => (
                  <Input
                    {...field}
                    prefix={<MailOutlined />}
                    placeholder="Email"
                    size="large"
                    autoComplete="off"
                    addonAfter={
                      fieldState.error && fieldState.touched ? (
                        <span style={{ color: "red" }}>
                          {fieldState.error.message}
                        </span>
                      ) : null
                    }
                  />
                )}
              />
            </Form.Item>

            <Form.Item>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={{ required: "Password is required" }}
                render={({ field, fieldState }) => (
                  <Input.Password
                    {...field}
                    prefix={<LockOutlined />}
                    placeholder="Password"
                    size="large"
                    autoComplete="off"
                    addonAfter={
                      fieldState.error && fieldState.touched ? (
                        <span style={{ color: "red" }}>
                          {fieldState.error.message}
                        </span>
                      ) : null
                    }
                  />
                )}
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" size="large" block>
                Register
              </Button>
            </Form.Item>
          </Form>
          <p>
            Already have an account?{" "}
            <Link href="/login">
              <span>Login</span>
            </Link>
          </p>
          <div>
            <Button type="default" icon={<GithubOutlined />} size="large">
              Sign up with GitHub
            </Button>
            <Button type="danger" icon={<GoogleOutlined />} size="large">
              Sign up with Google
            </Button>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default Register;
Register.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
