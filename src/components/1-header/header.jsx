import { useEffect, useState } from "react";
import "./header.css";

export default function Header() {
const [showModel, setShowModel] = useState(false);
const [theme, setTheme] = useState(
    localStorage.getItem("currentMoode") ?? "dark"
);

useEffect(() => {
    if (theme === "light") {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    } else {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    }
}, [theme]);
return (
    <>
    <header>
        <button className="icon-menu menu" onClick={() => setShowModel(true)} />
        <div />
        <nav>
        <ul className="flex">
            <li>
            <a href="">About</a>
            </li>
            <li>
            <a href="">Articles</a>
            </li>
            <li>
            <a href="">Projects</a>
            </li>
            <li>
            <a href="">Speaking</a>
            </li>
            <li>
            <a href="">Uses</a>
            </li>
        </ul>
        </nav>

        <button
        onClick={() => {
            localStorage.setItem(
            "currentMoode",
            theme === "dark" ? "light" : "dark"
            );
            setTheme(localStorage.getItem("currentMoode"));
        }}
        className="mood"
        >
        <span className="icon-moon-o"></span>
        </button>
        
        {showModel && (
        <div className="menuBack">
            <ul className="model">
            <div className="navigation">
                <h3 className="title">Navigation</h3>
                <button
                className="icon-cross"
                onClick={() => setShowModel(false)}
                ></button>
            </div>
            <li>
                <a href="">About</a>
            </li>
            <li>
                <a href="">Articles</a>
            </li>
            <li>
                <a href="">Projects</a>
            </li>
            <li>
                <a href="">Speaking</a>
            </li>
            <li>
                <a href="">Uses</a>
            </li>
            </ul>
        </div>
        )}
    </header>
    </>
);
}
