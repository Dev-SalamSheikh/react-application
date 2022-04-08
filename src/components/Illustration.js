import SignupImage from "../assets/signup.svg";
import classes from "../styles/Illustration.module.css";

export default function Illustration() {
  return (
    <div className={classes.illustration}>
      <img src={SignupImage} alt="Signup" />
    </div>
  );
}
