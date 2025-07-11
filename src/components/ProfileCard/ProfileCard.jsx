const ProfileCard = ({ image, email, firstName, lastName, username }) => {
  return (
    <div className="border-2 border-teal-500 p-4 rounded-lg bg-sky-50 dark:bg-slate-800">
      <div className="flex items-center flex-col justify-center gap-4 mb-4">
        <div className="w-20 h-20 rounded-full border border-teal-500 overflow-hidden p-0.5">
          <img
            src={image}
            alt="avatar-image"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="uppercase font-medium text-2xl text-teal-500">
          @{username}
        </p>
      </div>
      <div className="flex flex-col gap-2 text-sky-100">
        <p>Email: {email}</p>
        <p>First name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Username: {username}</p>
      </div>
    </div>
  );
};

export { ProfileCard };
