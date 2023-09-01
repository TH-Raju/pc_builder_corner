/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Form, Input, Button, Row, Col, Card } from "antd";
import {
  UserOutlined,
  LockOutlined,
  GoogleOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import { useForm, Controller } from "react-hook-form";
import Link from "next/link"; // Import Link from Next.js
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
import dynamic from "next/dynamic";
import { customColor } from "../../../utils/colors";
const RootLayout = dynamic(
  () => import("../../components/layouts/RootLayout"),
  {
    ssr: false,
  }
);
const Login = () => {
  const { control, handleSubmit } = useForm();
  const router = useRouter();
  const { callbackUrl } = router.query
  const onSubmit = async (e) => {
    const data = await signIn("credentials", {
      email: e?.email,
      password: e?.password,
      redirect: false,
      // callbackUrl: previousUrl,
    });
    console.log(data);
    if (data?.error) {
      toast.error(data?.error);
    }
    if (data?.ok) {
      router.push("/");
    }
    console.log(data);
  };
  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
      <Col xs={20} sm={16} md={12} lg={8}>
        <Card title="Login" style={{ textAlign: "center" }}>
          <Form onFinish={handleSubmit(onSubmit)} >
            <Form.Item style={{ backgroundColor: customColor.cardColor }}>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{ required: "Email is required" }}
                render={({ field, fieldState }) => (
                  <Input
                    {...field}
                    prefix={<UserOutlined />}
                    placeholder="Email"
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
                Login
              </Button>
            </Form.Item>
          </Form>
          <p >
            Don't have an account?{" "}
            <Link href="/register">
              <span>Register</span>
            </Link>
          </p>
          <div>
            <Button onClick={() => signIn("google", {
              callbackUrl: callbackUrl || "https://pc-builder-pink-pi.vercel.app/"
            })} type="danger" icon={<GoogleOutlined />} size="large">
              Login with Google
            </Button>
            <Button type="default" onClick={() => signIn("github", {
              callbackUrl: callbackUrl || "https://pc-builder-pink-pi.vercel.app/"
            })} icon={<GithubOutlined />} size="large">
              Login with GitHub
            </Button>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
Login.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
