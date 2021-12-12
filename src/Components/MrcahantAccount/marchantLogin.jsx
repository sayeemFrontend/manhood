import React from 'react';
import { Link } from 'react-router-dom';
import "./marchant.css"

const MarchantLoging = () => {
    return (
        <section className="login-page">
            <div className="login-body login-body-opacity">
                <div className="login-form-container d-flex justify-content-around">
                    <div className="machant-account-picture d-none d-md-block">
                        <img src="/Image/MArchantAccount Login.png" alt="" />
                    </div>
                    <div>
                        <div className="login-header">Sign in</div>
                        <div className="marchant-account-signup-sub-header">To your merchant account</div>
                        <div className="mt-5">
                            <input type="text" className="py-2 form-control customInputField" id="phone-number" placeholder=" " />
                            <label for="phone-number" >Phone number</label>
                        </div>
                        <div className="my-3">
                            <input type="text" className="form-control customInputField" id="password" placeholder=" " />
                            <label for="password" >Password</label>
                        </div>
                        <div className="mb-4 forgot-password">Forgot Password ?</div>
                        <Link to="/marchant/dashboard/">
                            <button type="button" className="customButton btn-background">Login</button>
                        </Link>
                        <div className="account-register">Don't have an account?<span><Link to="/marchant/signup/">Register</Link></span></div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default MarchantLoging;