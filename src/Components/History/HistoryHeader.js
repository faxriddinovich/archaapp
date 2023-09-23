import React from "react";
import {BiArrowBack} from "react-icons/bi";
import {Link} from "react-router-dom";

import './histroyheader.css'

function HistoryHeader(){
    return(
        <section className={'history-header'}>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-md-12'}>
                        <div className={'icon-box'}>
                            <Link to={'/'}>
                                <BiArrowBack/>
                            </Link>

                            <h3>Order history</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HistoryHeader