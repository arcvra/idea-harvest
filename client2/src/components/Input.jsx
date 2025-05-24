export const Input = ({
    type = "text",
    placeholder,
    value,
    name,
    id,
    className = "",
    autoComplete,
    required = false,
    onChange
}) => {
    return (
        <input
            type={type}
            value={value}
            placeholder={placeholder}
            className={`${className}`}
            name={name}
            id={id}
            autoComplete={autoComplete}
            required={required}
            onChange={onChange}
        />
    )
}