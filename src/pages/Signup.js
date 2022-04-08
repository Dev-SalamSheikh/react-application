import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import Form from "../components/Form";
import Illustration from "../components/Illustration";
import TextInput from "../components/TextInput";
import classes from "../styles/Signup.module.css";

export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>
      <div class="column">
        <Illustration />
        <Form className={`${classes.signup}`}>
          <TextInput type="text" placeholder="Enter Your Name" icon="person" />
          <TextInput
            type="text"
            placeholder="Enter Email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter Password" icon="lock" />
          <TextInput
            type="password"
            placeholder="Confirm Password"
            icon="lock_clock"
          />
          <Checkbox text="I agree to the Terms &amp; and Conditions" />
          <Button>
            <span>Submit Now</span>
          </Button>

          <div className="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
