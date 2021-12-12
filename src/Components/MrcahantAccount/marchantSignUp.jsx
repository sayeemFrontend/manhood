import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./marchant.css"

const MarchantSignUp = () => {
    const fields = [{ f_name: "name", label: "Your name" }, { f_name: "email", label: "Email address" }, { f_name: "phone", label: "Phone number" }, { f_name: "password", label: "Password" }, { f_name: "password2", label: "Confirm password" }]
    return (
        <section className="login-page">
            <div className="login-body login-body-opacity">

                <div className="login-form-container d-flex justify-content-around">

                    <div>
                        <div className="login-header">Wellcome to Family</div>
                        <div className="marchant-account-signup-sub-header">A Leading E-commerce website</div>
                        {fields.map(item => (
                            <div className="my-3">
                                <input type="text" className="form-control customInputField" name={item.f_name} id={item.f_name} placeholder=" " />
                                <label htmlFor={item.f_name}>{item.label}</label>
                            </div>
                        ))}

                        <Link to="/marchant/signup/next/">
                            <button type="button" className="customButton btn-background">Next</button>
                        </Link>
                        <div className="marchant-account-register">Already have an account?<span><Link to="/marchant/login/">Login</Link>  </span></div>
                    </div>

                    <div className="marchant-account-signup-picture d-none d-md-block">
                        <img src="/Image/marchant account/undraw_sign_in_e6hj (1) 1.png" alt="" />
                        <img className="img-2" src="/Image/marchant account/Mask Group (1).png" alt="" />

                    </div>
                </div>
            </div>

        </section>
    );
}

export default MarchantSignUp;