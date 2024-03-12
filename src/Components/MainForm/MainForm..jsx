/* eslint-disable react/prop-types */
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./MainForm.scss";

export const MainForm = ({ showDateTimeGuests = true }) => {
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = (event) => {
  event.preventDefault();

    if (!captchaValue) {
      alert("Please complete the captcha");
      return;
    }

    const formData = new FormData(event.target);
    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });

    setCaptchaValue(null);
  };

  return (
    <div className="container reservation-form px-3 px-lg-0">
      <div className="d-flex justify-content-center align-items-center">
        <form onSubmit={handleSubmit}>
          {showDateTimeGuests && (
            <div className="row">
              <div className="col-md-4">
                <h4>Select Date</h4>
                <input
                  type="date"
                  defaultValue={"2023-12-31"}
                  className="w-100 mb-4"
                />
              </div>
              <div className="col-md-4">
                <h4>Select Time</h4>
                <input
                  type="time"
                  defaultValue="12:00"
                  className="w-100 mb-4"
                />
              </div>
              <div className="col-md-4">
                <h4>How Many Guests?</h4>
                <select name="" id="" className="w-100 mb-4">
                  <option value="option-1">1-4</option>
                  <option value="option-2">5-10</option>
                  <option value="option-3">11-20</option>
                  <option value="option-4">More Than 20</option>
                </select>
              </div>
            </div>
          )}
          {showDateTimeGuests && (
            <div className="row">
              <div className="col-xl-12">
                <h4>Enter Your Details</h4>
              </div>
            </div>
          )}
          <div className="row">
            <div className="col-md-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-100 mb-4"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-100 mb-4"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Your Phone"
                  className="w-100 mb-4"
                  required
                />
              </div>
              <div className="mb-4">
                <ReCAPTCHA
                  sitekey="6LfiZxwpAAAAAGsxCSe8FrO__wedSUorfifmzQ4G"
                  onChange={handleCaptchaChange}
                />
              </div>
              <div>
                <button type="submit" className="mb-4">
                  Submit
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <textarea
                name=""
                id=""
                cols="45"
                rows="7"
                className="w-100"
                placeholder="Your Message"
              ></textarea>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
