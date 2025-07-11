import { LoginForm } from "@/components";
import { useAuth } from "@/hooks/useAuth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";
import { z } from "zod";

const loginSchema = z.object({
  username: z.string().min(1, "Username is requered"),
  password: z
    .string()
    .min(6, "Password needs to be at least 6 characters long"),
});

const LoginFormContainer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
  });
  const { login, loading, error } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const result = await login(data.username, data.password);
      if (result.success) {
        navigate("/");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <LoginForm
      onSubmit={handleSubmit(onSubmit)}
      register={register}
      errors={errors}
      loading={loading}
      error={error}
    />
  );
};

export { LoginFormContainer };
