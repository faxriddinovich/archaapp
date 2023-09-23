import React from "react";
import {FiLogOut} from "react-icons/fi";

import './settings.css'
import SettingsHeader from "./SettingsHeader";

function Settings(){
    return(
        <>
            <SettingsHeader/>
            <section className={'settings-section'}>
                <div className={'container'}>
                    <div className={'row'}>
                        <div className={'col-md-12'}>
                            <div className={'account-box'}>
                                <div className={'waiter-info'}>
                                    <h3>Waiter</h3>
                                    <p>waiter@gmail.com</p>
                                </div>

                                <div className={'logout-box'}>
                                    <button className={'logout-btn'}>
                                        <FiLogOut/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Settings