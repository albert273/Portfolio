import { useState } from "react";
import "./main.css";
import my_projects from "./Data/MyProject";
import { AnimatePresence, motion } from "framer-motion";


const reactProject = my_projects.filter((item) => {
return item.category === "react";
});
const nextPrject = my_projects.filter((item) => {
return item.category === "next";
});
const html_css_project = my_projects.filter((item) => {
return item.category === "HTML&CSS";
});
const JavaScriptProject = my_projects.filter((item) => {
    return item.category === "javaScript";
    });

const Main = () => {
const [active, setactive] = useState("all");
const [arr, setArr] = useState(my_projects);
return (
    <main>
    <section className="left-section">
        <button
        onClick={() => {
            setactive("all");
            setArr(my_projects);
        }}
        className={active === "all" ? "active" : null}
        >
        all projects
        </button>

        <button
        onClick={() => {
            setactive("css");
            setArr(html_css_project);
        }}
        className={active === "css" ? "active" : null}
        >
        HTML & CSS
        </button>

        <button
        onClick={() => {
            setactive("java");
            setArr(JavaScriptProject)
        }}
        className={active === "java" ? "active" : null}
        >
        JavaScript
        </button>

        <button
        onClick={() => {
            setactive("react");
            setArr(reactProject);
        }}
        className={active === "react" ? "active" : null}
        >
        React & MUI
        </button>

        <button
        onClick={() => {
            setactive("next");
            setArr(nextPrject);
        }}
        className={active === "next" ? "active" : null}
        >
        Next
        </button>
    </section>

    <section className=" right-section">
        <AnimatePresence>
        {arr.map((item) => {
            return (
            <motion.article
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                exit={{ transform: "scale(0)" }}
                key={item.id}
                className="card"
            >
                <img src={item.img} alt="" />
                <div className="box">
                <h1 className="title">{item.name}</h1>
                <p className="sub-title">{item.discption}</p>
                <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                    <div className="icon-link"></div>
                    <a href={item.gitHup} alt="code"><div className="icon-github"></div></a>
                    </div>
                    <a className="link flex" href={item.liveProject}>
                    more
                    <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow-right"
                    ></span>
                    </a>
                </div>
                </div>
            </motion.article>
            );
        })}
        </AnimatePresence>
    </section>
    </main>
);
};

export default Main;
