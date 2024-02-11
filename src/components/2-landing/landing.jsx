import "./landing.css";
import Lottie from "lottie-react";
import ComputerAnimation from "../../../public/Animation/Animation - 1701692837667.json";
import { motion } from "framer-motion";
export default function Landing() {
return (
    <>
    <section className="section flex">
        <div className="leftSection">
        <div className="myPicture">
            <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 5, type: "spring" }}
            src="./public/WhatsApp Image 2023-06-13 at 17.19.14-modified.png"
            alt="myPicture"
            />
            <span className="icon-verified"></span>
        </div>
        <div className="description">
            <h1>Software engineering, and Frontend developer</h1>
            <p>
            I’m Albert Nabil, a Software engineering, and Frontend developerI
            live in Cairo, Egypt and I graduated from New Cairo Academy,
            Computer Science Department, in 2024
            </p>
        </div>
        <div className="socialMedia">
            <div className="icon-facebook2 " />
            <div className="icon-instagram " />
            <div className="icon-github" />
            <div className="icon-linkedin" />
        </div>
        </div>

        <div className="rightSection">
        <Lottie
            className="ComputerAnimation"
            animationData={ComputerAnimation}
        />
        </div>
    </section>
    </>
);
}
