import { FaGithub } from "react-icons/fa";
export default function Footer() {
    return (
        <footer className="flex items-center justify-center py-4 gap-4">
            <a
                href="https://github.com/arcvra/idea-harvest"
                target="blank"
            >
                <FaGithub />
            </a>
            <p className="text-xs">Made by @arcvra with ❤️</p>
        </footer>
    )
}