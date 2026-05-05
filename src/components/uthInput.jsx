export default function AuthInput({
  icon,
  type = "text",
  placeholder,
  register,
  error,
}) {
  return (
    <div className="field-group">
      <div className={`input-box ${error ? "input-error" : ""}`}>
        <span>{icon}</span>
        <input type={type} placeholder={placeholder} {...register} />
      </div>

      {error && <p className="field-error">{error.message}</p>}
    </div>
  );
}