/**
 * 
 * @param {string} [type="button"] - HTML button type
 * @param {string} [name] - Button's name (used for forms)
 * @param {string} [id] - Button's ID (used for labels)
 * @param {string} [className] - Tailwind or custom classes
 * @param {function} [onClick] - Button click handler
 * @param {React.ReactNode} children - Button inner content
 * @returns {JSX.Element}
 */

export const Button = ({
    type = "button",
    name,
    id,
    className = "",
    onClick,
    children }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            name={name}
            id={id}
            className={`px-2 py-1 cursor-pointer border-2 border-violet-900 rounded-xl ${className}`}
        >
            {children}
        </button >
    )
}