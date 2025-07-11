const ProfileCard = ({ image, email, firstName, lastName, username }) => {
  return (
    <div className="border p-4 rounded-lg">
      <div className="flex items-center flex-col justify-center gap-4 mb-4">
        <div>
          <img src={image} alt="avatar-image" />
        </div>
        <p className="uppercase font-medium text-2xl">@{username}</p>
      </div>
      <div className="flex flex-col gap-3.5">
        <p>Email: {email}</p>
        <p>First name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Username: {username}</p>
      </div>
    </div>
  );
};

export { ProfileCard };
