import { Button, Input } from "../ui";

const LoginForm = ({ onSubmit, register, errors, loading, error }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <Input
          {...register("username")}
          label="Username"
          placeholder="Enter your username"
          error={errors.username?.message}
        />
        <Input
          {...register("password")}
          type="password"
          label="Password"
          placeholder="Enter your password"
          error={errors.password?.message}
        />
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <Button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </Button>
      </form>
    </div>
  );
};

export { LoginForm };
