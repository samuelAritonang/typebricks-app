import { Button, Input } from "@nextui-org/react";
import Link from "next/link";

export const Login = () => {
  return (
    <div className="space-y-4">
      <Input placeholder="email@domain.com" />
      <Input placeholder="password" type="password" />
      <Button fullWidth color="primary">
        Login
      </Button>
      <div className="flex gap-2">
        <div>Don't have an account ?</div>
        <Link href="/register">Register</Link>
      </div>
    </div>
  );
};
