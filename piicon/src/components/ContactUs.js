import React from 'react'
import { Link } from 'react-router-dom';
export default function ContactUs() {
    return (
        <>
            <div className="contact">
                <h1 className='text-center' style={{color:'#ed793f'}}>Contact Us</h1>
                <div className=" d-lg-flex align-items-center justify-content-center">
                    <table >
                        <tr>
                            <td>Name</td>
                            <td>Prof. D. K. Jain</td>
                        </tr>
                        <tr>
                            <td>Conference Position:</td>
                            <td>General Chair</td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>jaindk66@gmail.com</td>
                        </tr>
                        <tr>
                            <td>Tel / Mo:</td>
                            <td>+91-8053889154</td>
                        </tr>
                    </table>
                    <table>
                        <tr>
                            <td>Name</td>
                            <td>Prof. Surender Dahiya</td>
                        </tr>
                        <tr>
                            <td>Conference Position:</td>
                            <td>General Chair</td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>surenderdahiya.ee@dcrustm.org</td>
                        </tr>
                        <tr>
                            <td>Tel / Mo:</td>
                            <td>+91-9416294032</td>
                        </tr>
                    </table>
                </div>
                
                <div className="container">
                    <h3>Affiliation:</h3>
                    <p>Department of Electrical Engineering, <br />
                        Deenbandhu Chhotu Ram University of Science & Technology, Murthal, Haryana, (National Capital Region, India)
                    </p>
                </div>
                <div className="container">
                    <h3>Address:</h3>
                    <p>Deenbandhu Chhotu Ram University of Science & Technology, Murthal, Haryana, (National Capital Region, India)</p>
                </div>
            </div>
        </>
    )
}