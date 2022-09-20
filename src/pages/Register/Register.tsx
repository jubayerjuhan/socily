import React, { useState } from "react";
import { FaUserAstronaut } from "react-icons/fa";
import { MdEmail, MdPassword } from "react-icons/md";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import BigTextInput from "../../components/BigTextInput/BigTextInput";
import AlertPrompt from "../../components/Snackbar/Snackbar";
import SimpleSnackbar from "../../components/Snackbar/Snackbar";
import { registerUser } from "../../redux/api-actions/usersApi";
import { CLEAR_ERROR } from "../../redux/reducers/User/usertypings";
import { State } from "../../typings/redux-typings/redux-typings";
import "./Login.scss";

export interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
}

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const { error } = useSelector((state: State) => state.user);
  const [credentials, setCredentials] = useState<RegisterCredentials>({
    name: "",
    email: " ",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    dispatch({ type: CLEAR_ERROR });
    const created = await dispatch(registerUser(credentials));
    if (created) navigate("/enter-otp");
  };
  return (
    <>
      {error && <AlertPrompt type="error" title={error} />}
      <div className="main-wrap">
        <div className="nav-header bg-transparent shadow-none border-0">
          <div className="nav-top w-100">
            <a href="/">
              <i className="feather-zap text-success display1-size me-2 ms-0"></i>
              <span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0">
                Socily.{" "}
              </span>{" "}
            </a>
            <button className="nav-menu me-0 ms-auto"></button>
            <a
              href="/login"
              className="header-btn d-none d-lg-block bg-dark fw-500 text-white font-xsss p-3 ms-auto w100 text-center lh-20 rounded-xl"
            >
              Login
            </a>
            <a
              href="/login"
              className="header-btn d-none d-lg-block bg-current fw-500 text-white font-xsss p-3 ms-2 w100 text-center lh-20 rounded-xl"
            >
              Register
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-5 d-none d-xl-block p-0 vh-100 bg-image-cover bg-no-repeat loginImageBackground"></div>
          <div className="col-xl-7 vh-100 align-items-center d-flex bg-white rounded-3 overflow-hidden">
            <div className="card shadow-none border-0 ms-auto me-auto login-card">
              <div className="card-body rounded-0 text-left">
                <h2 className="fw-700 display1-size display2-md-size mb-3">
<<<<<<< HEAD
                  Register <br />
=======
                  Login into <br />
>>>>>>> 1148e39152abdd89b9b3dee19d92480d056df1f7
                  your account
                </h2>
                <form autoComplete="on">
                  <BigTextInput
                    icon={<FaUserAstronaut />}
                    placeholder="Enter Your Name"
                    name="name"
                    onChange={handleChange}
                  />

                  <BigTextInput
                    icon={<MdEmail />}
                    placeholder="Enter Email Address"
                    name="email"
                    onChange={handleChange}
                  />
                  <BigTextInput
                    type="password"
                    icon={<MdPassword />}
                    placeholder="Enter Password"
                    name="password"
                    onChange={handleChange}
                  />
                  <div className="form-check text-left mb-3">
                    <input
                      type="checkbox"
                      className="form-check-input mt-2"
                      id="exampleCheck5"
                    />
                    <label className="form-check-label font-xsss text-grey-500">
                      Remember me
                    </label>
                    <a
                      href="/forgot"
                      className="fw-600 font-xsss text-grey-700 mt-1 float-right"
                    >
                      Forgot your Password?
                    </a>
                  </div>
                </form>
                <div className="col-sm-12 p-0 text-left">
                  <div className="form-group mb-1">
                    <p
                      onClick={handleSubmit}
                      className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0 "
                      style={{ cursor: "pointer" }}
                    >
                      Login
                    </p>
                  </div>
                  <h6 className="text-grey-500 font-xsss fw-500 mt-0 mb-0 lh-32">
                    Dont have account{" "}
                    <a href="/register" className="fw-700 ms-1">
                      Register
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
