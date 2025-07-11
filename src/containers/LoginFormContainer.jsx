import { LoginForm } from "@/components";
import { useAuth } from "@/hooks/useAuth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const LoginFormContainer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
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
