const Select = (
  { options, value, onChange, name, disabled, placeholder, error, ...props },
  ref
) => {
  return (
    <>
      <select
        ref={ref}
        value={value}
        onChange={onChange}
        name={name}
        disabled={disabled}
        className={`w-full p-2 border border-teal-500  rounded ${error ? "border-red-500" : "border-gray-300"}`}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option, index) => (
          <option key={index} value={option} className="text-slate-800">
            {option}
          </option>
        ))}
      </select>
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </>
  );
};

export { Select };
