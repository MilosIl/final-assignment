import { apiInstance } from "./baseInstance";

const login = async (username, password) => {
  try {
    const response = await apiInstance.post("/auth/login", {
      username,
      password,
    });

    if (response.data) {
      localStorage.setItem("authToken", response.data.accessToken);

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
};

const getUser = async () => {
  try {
    const response = await apiInstance.get("/auth/me");
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

export { login, logout, getUser };
