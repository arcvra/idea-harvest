export const Input = ({ type = "text", placeholder, value, onChange }) => {
    return (
        <input
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    )
}