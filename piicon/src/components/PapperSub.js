import React from 'react'
import { Link } from 'react-router-dom';
export default function PapperSub() {
    return (
        <>
            <div className="paperSub container " style={{height:'100vh'}}>
                <h1 className='text-center my-3' style={{ color: '#ed793f' }}> Paper submission Guidelines</h1>
                <h4>Prospective authors are requested to submit a full length paper no longer than six (6) pages. The paper must clearly state the objectives of the work, and its significance in the advancement of scientific and technical knowledge. The template concerning the paper is available at<a href="http://www.ieee.org/conferences_events/conferences/publishing/templates.html">http://www.ieee.org/conferences_events/conferences/publishing/templates.html</a></h4>
                <h4>Paper submission has to be done by EDAS link: <a href="https://edas.info/N31269">https://edas.info/N31269</a>
                </h4>
            </div>
        </>
    )
}