/**
 * Input Button
 * @param {string} [type="text"] -HTML input type
 * @param {string} [placeholder] - Placeholder text
 * @param {string} [value=""] - Controlled value
 * @param {string} [name] - Input's name (used for forms)
 * @param {string} [id] - Input's ID (used for labels)
 * @param {number} [maxLength] - Input's max lenght
 * @param {string} [className] - Tailwind or custom classes
 * @param {boolean} [autoComplete=false] - Enable autocomplete
 * @param {string} [required="false"] - Whether the field is required
 * @param {function} onChange - Input handler function
 * @returns {JSX.Element}
 */

export const Input = ({
    type = "text",
    placeholder = "",
    value = "",
    name,
    id,
    maxLength = 30,
    className = "",
    autoComplete = "off",
    required = false,
    onChange
}) => {
    return (
        <input
            type={type}
            value={value}
            placeholder={placeholder}
            name={name}
            id={id}
            maxLength={maxLength}
            className={`px-2 py-1 border border-zinc-300 rounded-md placeholder-neutral-500 ${className}`}
            autoComplete={autoComplete}
            required={required}
            onChange={onChange}
        />
    )
}