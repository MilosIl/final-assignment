const Input = ({
  onChange,
  placeholder,
  type = "text",
  label,
  id,
  error,
  ...props
}) => {
  return (
    <>
      <label htmlFor={id}>
        <span className="mb-2 inline-block">{label}</span>
        <input
          id={id}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          className={`w-full p-2 border border-teal-500 rounded [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${
            error ? "border-red-500" : "border-gray-300"
          }`}
          {...props}
        />
      </label>
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </>
  );
};

export { Input };
