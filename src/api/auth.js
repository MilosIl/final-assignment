import { apiInstance } from "./baseInstance";

const login = async (username, password) => {
  try {
    const response = await apiInstance.post("/auth/login", {
      username,
      password,
    });

    if (response.data) {
      localStorage.setItem("authToken", response.data.accessToken);
      localStorage.setItem("user", JSON.stringify(response.data));

      return {
        success: true,
        user: response.data,
      };
    }
  } catch (error) {
    console.error("Login error:", error);
    return {
      success: false,
      error: error.response?.data?.message || "Invalid username or password",
    };
  }
};

const logout = () => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("user");
};

const isLoggedIn = () => {
  return !!localStorage.getItem("authToken");
};

const getUser = async () => {
  // const user = localStorage.getItem("user");
  // return user ? JSON.parse(user) : null;

  const response = await apiInstance.get("/auth/me").then((res) => res.data);

  return JSON.parse(response);
};

export { login, logout, isLoggedIn, getUser };
