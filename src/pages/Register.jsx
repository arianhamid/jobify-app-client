import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow
          type="text"
          name="name"
          defaultValue="hamid"
        />
        <FormRow
          type="text"
          name="lastName"
          defaultValue="arian"
          labelText="last name"
        />
        <FormRow
          type="text"
          name="location"
          defaultValue="iran"
        />
        <FormRow
          type="email"
          name="email"
          defaultValue="hamid@arian.com"
        />
        <FormRow
          type="password"
          name="password"
          defaultValue="123456"
        />

        <button type="submit" className="btn btn-block undefined ">
          submit
        </button>
        <p>
          Already a member?
          <Link className="member-btn" to="/login">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
