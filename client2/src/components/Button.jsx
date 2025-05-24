export const Button = ({ type = "button", onClick, name }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className="px-2 py-1 cursor-pointer border-2 border-violet-900 rounded-xl"
        >
            {name}
        </button>
    )
}