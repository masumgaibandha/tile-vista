"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { toast } from "react-toastify";

export default function SignInPage() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: '/'
    });
    console.log({ data, error });
    if (error) {
      toast.warn(error.message);
    }
    if (data) {
      toast.success("SignIn Successful");
    }
  };

  return (
    <Card className="border mx-auto w-125 py-10 mt-5">
      <h1 className="text-center text-2xl font-bold">Sign In</h1>

      <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
        <TextField isRequired name="email" type="email">
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField isRequired name="password" type="password">
          <Label>Password</Label>
          <Input placeholder="Enter your password" />

          <FieldError />
        </TextField>
        {/* <Link href={"/"}>
        </Link> */}
          <button className="btn btn-primary w-full" type="submit">
            Sign In
          </button>
        
        <p className="text-center">
          Dont’t Have An Account ?{" "}
          <Link className="text-blue-500 font-bold" href={"/sign-up"}>
            Sign Up
          </Link>
        </p>
      </Form>
    </Card>
  );
}
