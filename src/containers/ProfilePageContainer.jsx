import { ProfilePage } from "@/pages";
import { useAuth } from "@/hooks/useAuth";
const ProfilePageContainer = () => {
  const { user } = useAuth();
  return <ProfilePage user={user} />;
};

export { ProfilePageContainer };
