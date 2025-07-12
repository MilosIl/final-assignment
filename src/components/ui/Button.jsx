const Button = ({
  children,
  onClick,
  className = "",
  type = "button",
  disabled,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 bg-teal-400 text-slate-800 font-medium rounded hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400 ${className}`}
    >
      {children}
    </button>
  );
};

export { Button };
