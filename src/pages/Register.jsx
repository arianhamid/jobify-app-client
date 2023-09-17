import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo } from "../components";

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            required={true}
            // value=""
          />
        </div>
        <div className="form-row">
          <label htmlFor="lastName" className="form-label">
            last name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="form-input"
            required={true}
            // value=""
          />
        </div>
        <div className="form-row">
          <label htmlFor="location" className="form-label">
            location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            className="form-input"
            required={true}
            // value=""
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            required={true}
            // value=""
          />
        </div>
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-input"
            required={true}
            // value=""
          />
        </div>
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
