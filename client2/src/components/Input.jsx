export const Input = ({ placeholder, action }) => {
    return (
        <input
            type="text"
            placeholder={placeholder}
            onChange={action}
        />
    )
}