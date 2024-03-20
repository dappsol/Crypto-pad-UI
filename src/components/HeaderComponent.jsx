import React from 'react'

export default function Header(){
    return(
        <header className='header'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 align-self-center col-5">
                        <a href="#" className='btn-style text'><span>Crypto</span>Tools.io</a>
                    </div>
                    <div className="col-md-6 text-end align-self-center col-7">
                        <a href="#" className='btn-style'>CONNECT WALLET</a>
                    </div>
                </div>
            </div>
        </header>
    )
}