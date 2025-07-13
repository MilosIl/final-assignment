import { getUser } from "@/api";
import { useQuery } from "@tanstack/react-query";

const useGetCurrentUser = () => {
  return useQuery({
    queryKey: ["currentUser"],
    queryFn: getUser,
    staleTime: 20 * 60 * 1000,
    cacheTime: 60 * 60 * 1000,
    enabled: !!localStorage.getItem("authToken"),
  });
};

export { useGetCurrentUser };
