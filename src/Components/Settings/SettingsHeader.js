import React from "react";
import {Link} from "react-router-dom";
import {BiArrowBack} from "react-icons/bi";

import './settingsheader.css'

function SettingsHeader(){
    return(
        <section className={'settings-header-section'}>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-md-12'}>
                        <div className={'settings-header'}>
                            <Link to={'/'}>
                                <BiArrowBack/>
                            </Link>

                            <h3>Settings</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SettingsHeader