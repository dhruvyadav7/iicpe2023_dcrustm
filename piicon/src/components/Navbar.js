import React from 'react'
import { Link } from 'react-router-dom';
import tentativeSchedule from '../files/Tentative Schedule OF IICPE2023 .pdf'
export default function Navbar() {

    return (
        <>
            {/* <!-- Navbar --> */}
            <div className=" ">
                <img className='w-100' src={require('../img/dcrust bg.png')} alt="" />
            </div>
            <nav className="navbar  navbar-expand-lg bg-body-tertiary" >
                <div className="container-fluid">
                    <Link to={'/'} className="navbar-brand fw-bold" >IICPE</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-3">
                                <Link to={'/'} className="nav-link active fw-bold" aria-current="page" >Call For Paper</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link to={'/home'} className="nav-link active fw-bold" aria-current="page" >Home</Link>
                            </li>

                            <li className="nav-item mx-3">
                                <Link to={'/venue'} className="nav-link active fw-bold" aria-current="page" >Venue</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link to={'/papperSub'} className="nav-link active fw-bold" aria-current="page" >Paper Submission</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link to={'/finentialSupport'} className="nav-link active fw-bold" aria-current="page" >Financial Support</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link to={'/committee'} className="nav-link active fw-bold" aria-current="page" >Committee</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link to={'registration'} className="nav-link active fw-bold" aria-current="page" >Final Paper Submission</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link to={'/contact'} className="nav-link active fw-bold" aria-current="page" >Contact</Link>
                            </li>


                        </ul>

                    </div>
                </div>
            </nav>
            {/* <!-- Navbar --> */}



            <marquee behavior="alternate" direction="left"><a href={tentativeSchedule} className=" text-danger" style={{cursor:'pointer'}}>
            <span className='fw-bold'>Tentative Schedule OF IICPE2023</span> <span  className='text-primary'>Click To Downlaod</span>
                </a></marquee> 

        </>
    )
}
