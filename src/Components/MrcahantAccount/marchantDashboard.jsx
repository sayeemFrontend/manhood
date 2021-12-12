import React from 'react'
import "./marchant.css"
import ProductEmpty from './productEmpty';
import ProductExist from './productExist';
const MarchantDashboard = () => {

    const [productExist, setProductExist] = React.useState(false)
    return (
        <section className="marchant-dashboard">

            <div className="container custom-marchant-conainer">
                <div className="row">
                    {productExist ? <ProductExist /> : <ProductEmpty />}

                    <div className="mt-5 mt-md-none col-12 col-md-4">

                        <div className="marchant-dashboard-profile">
                            <p>Merchant Profile</p>
                        </div>

                        <div className="marchant-dashboard-profile-body">
                            <div className="d-flex">
                                <div>
                                    <img className="rounded-circle" src="/Image/marchant account/pic.png" alt="" />
                                </div>
                                <div className="ms-3">
                                    <p className="mb-0 profile-name">Yosuf Bin Zakaria Bin Zakaria </p>
                                    <p className="profile-sub-name"> A one collection</p>
                                </div>
                                <div className="ms-auto">
                                    <img src="/Image/marchant account/Group.png" alt="" />
                                </div>

                            </div>

                            <div className="d-flex flex-column align-items-end setting-list">

                                <div>
                                    <ul className="list-group list-group-horizontal set-list-row">
                                        <li className="list-group-item set-list-col-1" >My Membership </li>
                                        <li className="list-group-item set-list-col-2" ><img src="/Image/marchant account/member-card 1.png" alt="" /></li>


                                    </ul>
                                </div>
                                <div>
                                    <ul className="list-group list-group-horizontal set-list-row">
                                        <li className="list-group-item set-list-col-1">My Account </li>
                                        <li className="list-group-item set-list-col-2" ><img src="/Image/marchant account/my account.png" alt="" /></li>

                                    </ul>
                                </div>
                                <div>
                                    <ul className="list-group list-group-horizontal set-list-row">
                                        <li className="list-group-item set-list-col-1">Settings </li>
                                        <li className="list-group-item set-list-col-2" ><img src="/Image/marchant account/settings 1.png" alt="" /></li>

                                    </ul>
                                </div>
                                <div>
                                    <ul className="list-group list-group-horizontal set-list-row">
                                        <li className="list-group-item set-list-col-1">Customer Feedback  </li>
                                        <li className="list-group-item set-list-col-2" ><img src="/Image/marchant account/feedback.png" alt="" /></li>

                                    </ul>
                                </div>
                                <div>
                                    <ul className="list-group list-group-horizontal set-list-row">
                                        <li className="list-group-item set-list-col-1">My Products </li>
                                        <li className="list-group-item set-list-col-2" ><img src="/Image/marchant account/my products.png" alt=" " /></li>

                                    </ul>
                                </div>
                                <div>
                                    <ul className="list-group list-group-horizontal set-list-row">
                                        <li className="list-group-item set-list-col-1">Chat </li>
                                        <li className="list-group-item set-list-col-2" ><img src="/Image/marchant account/chat 1.png" alt="" /></li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default MarchantDashboard;