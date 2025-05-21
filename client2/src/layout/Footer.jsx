import { FaGithub } from "react-icons/fa";
export default function Footer() {
    return (
        <footer className="flex items-center justify-center">
            <a
                href="https://github.com/arcvra/idea-harvest"
                target="blank"
            >
                <FaGithub />
            </a>
            <p>Made by @arcvra with ❤️</p>
        </footer>
    )
}