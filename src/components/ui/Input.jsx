import { forwardRef } from 'react';

const Input = forwardRef(
  (
    { onChange, placeholder, type = 'text', label, id, error, ...props },
    ref
  ) => {
    return (
      <>
        <label htmlFor={id}>
          <span>{label}</span>
          <input
            id={id}
            ref={ref}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
            className={`w-full p-2 border rounded [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${
              error ? 'border-red-500' : 'border-gray-300'
            }`}
            {...props}
          />
        </label>
        {error && <span className='text-red-500 text-sm'>{error}</span>}
      </>
    );
  }
);

export { Input };
