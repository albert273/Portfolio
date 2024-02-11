import Lottie from "lottie-react";
import "./connect.css";
import { useForm, ValidationError } from "@formspree/react";
import DoneAnimation from "../../../public/Animation/Animation - 1701691262588.json";

import EmailAnimation from "../../../public/Animation/email.json";
export default function Connect() {
const [state, handleSubmit] = useForm("mzblllbj");

return (
    <main className="main">
    <section className="top-section">
        <div className="title flex">
        <i className="icon-envelope"></i>
        <h1>Contact Us</h1>
        </div>
        <div className="sub-title">
        <p>
            Contact us for mor information and get notified when i publish
            something new.
        </p>
        </div>
    </section>
    <section className="bottom-section flex">
        <div className="right">
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="email">Email Address : </label>
            <input
                required
                type="email"
                name="email"
                autoComplete="off"
            />{" "}
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            </div>
            <div>
            <label htmlFor="Message" className="label-message">
                Your message :{" "}
            </label>
            <textarea required className="message" name="message" />{" "}
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            </div>
            <button type="submit" disabled={state.submitting}>
            {state.submitting ? "sending ..." : "send"}
            </button>
            {state.succeeded && (
            <p
                className="flex"
                style={{ fontSize: "18px", marginTop: "1.7rem" }}
            >
                <Lottie
                loop={false}
                style={{
                    height: "50px",
                    alignItems: "center",
                    position: "relative",
                    top: "8px",
                    left: "7px",
                }}
                animationData={DoneAnimation}
                />
                Your message has been sent successfully 👌
            </p>
            )}
        </form>
        </div>
        <div className="animation">
        <Lottie
            style={{ width: "370px", translate: "90px" }}
            animationData={EmailAnimation}
        />
        </div>
    </section>
    </main>
);
}
