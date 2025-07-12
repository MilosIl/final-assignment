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

const isLoggedIn = () => {
  return !!localStorage.getItem("authToken");
};

const getCurrentUser = async () => {
  try {
    const token = localStorage.getItem("authToken");
    if (!token) {
      return { success: false, error: "No auth token" };
    }
    const response = await apiInstance.get("/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.data) {
      return {
        success: true,
        user: response.data,
      };
    }
  } catch (error) {
    console.error("Error fetching current user:", error);
    return {
      success: false,
      error: error.response?.data?.message || "Failed to get user data",
    };
  }
};

export { login, logout, isLoggedIn, getCurrentUser };
