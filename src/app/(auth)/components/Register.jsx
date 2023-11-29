import { Link, Button, Input } from "@nextui-org/react";

export const Register = () => {
  return (
    <div className="space-y-4">
      <Input placeholder="name" />
      <Input placeholder="email@domain.com" />
      <Input placeholder="password" type="password" />
      <Button fullWidth color="primary">
        Register
      </Button>
      <div className="flex gap-2">
        <div>Have an account ?</div>
        <Link href="/login">Login</Link>
      </div>
    </div>
  );
};
