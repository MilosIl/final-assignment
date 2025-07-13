import { IconEye, IconEyeHidden } from "@/assets";
import { Button, Input } from "../ui";

const LoginForm = ({
  onSubmit,
  register,
  errors,
  loading,
  error,
  passwordVisible,
  togglePassword,
}) => {
  return (
    <>
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-5  bg-sky-100 p-6 rounded-lg shadow-md w-full max-w-md "
      >
        <Input
          {...register("username")}
          label="Username"
          placeholder="Enter your username"
          error={errors.username?.message}
        />

        <Input
          {...register("password")}
          type={passwordVisible ? "text" : "password"}
          label="Password"
          placeholder="Enter your password"
          error={errors.password?.message}
          iconRight={passwordVisible ? <IconEyeHidden /> : <IconEye />}
          handleIconClick={togglePassword}
        />

        {error && <div className="text-red-500 text-sm">{error}</div>}
        <Button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </Button>
      </form>
    </>
  );
};

export { LoginForm };
