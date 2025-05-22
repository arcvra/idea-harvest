export const Button = ({ feature, action, name }) => {
    return (
        <button
            type={feature}
            onClick={action}
            className="px-2 py-1 cursor-pointer border-2 border-violet-900 rounded-xl"
        >
            {name}
        </button>
    )
}