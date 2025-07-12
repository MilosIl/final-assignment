import { capitalizeFirstLetter } from "./capitelizeFirstLetter";

const nameInitials = (firstName, lastName) => {
  const firstInitial = firstName ? capitalizeFirstLetter(firstName) : "";
  const lastInitial = lastName ? capitalizeFirstLetter(lastName) : "";
  const initials = `${firstInitial}${lastInitial}`;
  return initials;
};

export { nameInitials };
