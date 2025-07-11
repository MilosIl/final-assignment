import { forwardRef } from "react";

const Select = forwardRef(
  (
    { options, value, onChange, name, disabled, placeholder, error, ...props },
    ref
  ) => {
    return (
      <div>
        <select
          ref={ref}
          value={value}
          onChange={onChange}
          name={name}
          disabled={disabled}
          className={`w-full p-2 border rounded ${error ? "border-red-500" : "border-gray-300"}`}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        {error && <span className="text-red-500 text-sm">{error}</span>}
      </div>
    );
  }
);

export { Select };
