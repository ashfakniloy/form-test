import { ErrorMessage, Field } from "formik";

export const TextField = ({ label, name, type }) => {
  return (
    <div className="mb-2">
      <label htmlFor={name}>{label}</label>
      <div className="my-2 relative">
        <Field
          className="p-2 w-full outline-none border border-slate-300 focus:border-custom-blue3"
          id={name}
          name={name}
          type={type}
        />
        <p className="absolute -bottom-4 text-red-600 text-xs">
          <ErrorMessage name={name} />
        </p>
      </div>
    </div>
  );
};

export const SelectField = ({ label, name, type, placeholder, options }) => {
  return (
    <div className="mb-2">
      <label htmlFor={name}>{label}</label>
      <div className="my-2 relative">
        <Field
          as="select"
          name={name}
          id={name}
          className="p-2 w-full outline-none border border-slate-300 focus:border-custom-blue3"
        >
          <option
            value=""
            className="text-slate-400"
            defaultValue={true}
            hidden
          >
            {placeholder}
          </option>
          {options.map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </Field>
        <p className="absolute -bottom-4 text-red-600 text-xs">
          <ErrorMessage name={name} />
        </p>
      </div>
    </div>
  );
};
