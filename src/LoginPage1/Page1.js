import React from "react";
import "./Page1.css";

function LoginPage1() {
  return (
    <div className="login-page-1">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div className="text d-flex flex-column">
            <h1>LOGIN</h1>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>LOGIN</button>
            <div className="d-flex justify-content-between mt-3 ">
              <a href="#">Forget Password</a>
              <a href="#">Register</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex  align-items-center justify-content-center">
        <div class="image-container"></div>
        </div>
      </div>
      <div className="login-page-rectangle">

      </div>
    </div>
  );
}
export default LoginPage1;
