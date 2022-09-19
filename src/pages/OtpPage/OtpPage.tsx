import React from "react";
import { MdPassword } from "react-icons/md";
import BigTextInput from "../../components/BigTextInput/BigTextInput";
// import LoginActionButton from "../../components/LoginActionButton/LoginActionButton";
import "./Login.scss";

const OtpPage = () => {
  const resendOtp = () => {};
  return (
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
        </div>
      </div>
      <div className="row">
        <div className="col-xl-5 d-none d-xl-block p-0 vh-100 bg-image-cover bg-no-repeat loginImageBackground"></div>
        <div className="col-xl-7 vh-100 align-items-center d-flex bg-white rounded-3 overflow-hidden">
          <div className="card shadow-none border-0 ms-auto me-auto login-card">
            <div className="card-body rounded-0 text-left">
              <h2 className="fw-700 display1-size display2-md-size mb-3">
                Enter Your <br />
                OTP
              </h2>
              <form>
                <BigTextInput
                  type="number"
                  name="otp"
                  icon={<MdPassword />}
                  placeholder="Enter OTP"
                />
              </form>
              <div className="col-sm-12 p-0 text-left">
                <div className="form-group mb-1">
                  <a
                    href="/login"
                    className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0 "
                  >
                    Submit OTP
                  </a>
                </div>
                <h6 className="text-grey-500 font-xsss fw-500 mt-0 mb-0 lh-32 resendOtpWrapper">
                  Didn't Recived OTP?{" "}
                  <p className="fw-700 ms-1 resendOtp" onClick={resendOtp}>
                    Resend OTP
                  </p>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpPage;
