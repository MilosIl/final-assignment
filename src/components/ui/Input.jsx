const Input = ({
  onChange,
  placeholder,
  type = "text",
  label,
  id,
  error,
  iconLeft,
  iconRight,
  handleIconClick,
  className = "",
  ...props
}) => {
  return (
    <>
      <label htmlFor={id}>
        <span className="mb-2 inline-block">{label}</span>
        <div className="relative">
          {iconLeft && (
            <span className="absolute left-2 top-2.5 cursor-pointer ">
              {iconLeft}
            </span>
          )}
          <input
            id={id}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
            className={`w-full relative p-2 border border-teal-500 rounded [appearance:textfield] focus-within:outline-teal-500 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${
              error ? "border-red-500" : "border-gray-300"
            }${className} `}
            {...props}
          />
          {iconRight && (
            <span
              className="absolute right-2 top-3 cursor-pointer "
              onClick={handleIconClick}
            >
              {iconRight}
            </span>
          )}
        </div>
      </label>
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </>
  );
};

export { Input };
