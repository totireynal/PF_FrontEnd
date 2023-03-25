import { RiAlertFill } from "react-icons/ri";

const InputeForm = ({
  label,
  type,
  name,
  value,
  handler,
  placeholder,
  id,
  error,
  touched
}) => {
  
const errorStyle = error && touched
  ? "opacity-1 transition-all duration-500"
    : "opacity-0 transition-all duration-500";


  return (
    <div className="m-4 w-60">
      <div>
        <label
          className={`${error && touched ? "text-red-400" : ''} text-base`}
          htmlFor={id}
          valid={error}
        >
          {label}
        </label>
        <input
          className={`${
            error && touched ? "border-red-400 border-2 " : ''
          } rounded-md  block w-60 h-10 px-2 outline-none focus:border-blue-400`}
          type={type}
          name={name}
          value={value}
          onChange={handler}
          placeholder={placeholder}
          id={id}
          valid={error}
        />
      </div>
      <div className="text-end">
        <p className={`${errorStyle} text-red-400 text-xs`}>
          <i className="text-red-400 inline-block">
            <RiAlertFill />
          </i>
          {error}
        </p>
      </div>
    </div>
  );
}

export default InputeForm;
