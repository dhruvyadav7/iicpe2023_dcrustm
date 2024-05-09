import React from 'react'
export default function Registration() {
    return (
        <>
            <div className="paperSub container " style={{ height: '100vh' }}>
                <h1 className='text-center my-5' > INSTRUCTIONS FOR AUTHORS</h1>
                <h3 className='text-danger'>Authors of the accepted papers are requested to submit the final paper by 15 th Nov.
                    2023.
                </h3>
                <h3 >Final papers can be prepared and submitted following these steps:</h3>
                <ol>
                    <li className='fw-bold'>Prepare Your Final Paper (Camera-Ready Manuscript)</li>
                    <ol>
                        <li>Please revise the manuscript according to reviewer’s comments, if any, and proof read
                            your source document thoroughly to confirm that it will require no further revision.
                        </li>
                        <li>
                            The camera-ready manuscript should be in IEEE conference template.
                        </li>
                        <li>
                            Paper must be written in English using the LaTeX or Microsoft Word
                            manuscript templates for A4 format available at template.
                        </li>
                        <li>
                            Formatting of these templates should not be altered.
                        </li>
                        <li>
                            Minimum 4 pages and maximum 6 pages are required per paper in standard
                            IEEE format.
                        </li>

                    </ol>
                    <li className='fw-bold'>
                        <div >Add Copyright Information to the First Page of the Paper</div>
                    </li>

                    <p>
                        Please affix the appropriate copyright clearance code notice at the bottom of the first column of
                        the first page of paper according to guidelines set forth in the Cataloging/Copyright Instructions
                        for an IEEE Conference Proceeding.
                    </p>
                    <p>For papers in which all authors are employed by the US government, the copyright notice is:

                        <span className='fw-bold'>U.S. Government work not protected by U.S. copyright</span> <br />
                        For papers in which all authors are employed by a Crown government (UK, Canada, and
                        Australia), the copyright notice is: <span className='fw-bold'>979-8-3503-0725-2/23/$31.00 ©2023 Crown</span> <br />
                        For papers in which all authors are employed by the European Union, the copyright notice is:
                        <span className='fw-bold'>979-8-3503-0725-2/23/$31.00 ©2023 European Union</span> <br />
                        For all other papers the copyright notice is: <span className='fw-bold'>979-8-3503-0725-2/23/$31.00 ©2023 IEEE</span>
                    </p>
                    <li className='fw-bold'>
                        <div >Check Your Final Paper</div>
                    </li>
                    <p></p>
                    <ul>
                        <li>
                            Use PDF eXpress to verify the PDF file of the paper for IEEE-compliance
                            before submission. Papers that are not IEEE-compliant will not be included in
                            the proceedings nor published
                        </li>
                    </ul>
                    <div className='fw-bold'>
                        Creating your PDF eXpress Account
                    </div>
                    Log in to the IEEE PDF eXpress TM site  <a href="https://ieee-pdf-express.org/account/login?ReturnUrl=%2F">https://ieee-pdf-express.org/account/login?ReturnUrl=%2F</a>
                    <div className='fw-bold'>
                        First-time users should do the following: <br />
                        Select New Users
                    </div>

                    Enter the following: <br />
                    <ul>
                        <li>
                            60303X for the Conference ID
                        </li>
                        <li>
                            your email address
                        </li>
                        <li>
                            a password
                        </li>
                    </ul>
                    2. Continue to enter information as prompted.
                    An Online confirmation will be displayed and an email confirmation will be sent verifying your
                    account setup. <br />

                    <span className='fw-bold'>
                        Previous users of PDF eXpress need to follow the above steps, but should enter the
                        same password that was used for previous conferences. Verify that your contact
                        information is valid.
                    </span>
                    <li className='fw-bold'>
                        Upload Your Final Paper
                    </li>
                    The final paper should be uploaded to EDAS system through the PAPER SUBMISSION menu
                    on the Conference website. Do not make any changes in the title of the paper and the details of
                    authors. Upload the final manuscript to EDAS. <br /> <br />
                    Upload the final manuscript to EDAS. The steps involved are: <br />
                    <ul>
                        <li>
                            Login to your EDAS ID
                        </li>
                        <li>
                            Click on the paper number
                        </li>
                        <li>
                            Click on the upload Final manuscript
                        </li>
                        <li>
                            Fill up the online e-copyright form
                        </li>
                        <li>
                            Upload the final manuscript
                        </li>
                    </ul>
                    <span className='fw-bold'>Please also email a copy of the IEEE Compliant pdf version of your paper to
                        iicpe2023@gmail.com  with subject mentioning the EDAS Paper ID.</span> <br />
                    <span className='fw-bold'>Please double check the information that you provide during online submission:</span> <br />
                    <ul>
                        <li>
                            Title of the paper

                        </li>
                        <li>
                            name, affilation, e-mail address of the authors.

                        </li>
                        <li>
                            name of the corresponding author, complete mailing address, and e-mail address of the
                            corresponding author.

                        </li>
                    </ul>
                    <li className='fw-bold'>Registration and Payment</li>
                    <p>
                        <div className='fw-bold'>
                            Each paper should have a registration with full payment by the Registration deadline
                            given on the conference website (i. e. Oct. 30, 2023). Any paper without registration will
                            be dropped automatically. <br />
                            Please refer this table for Registration Fees payment details :-
                        </div>
                    </p>
                    <table>
                        <tbody>
                            <tr>
                                <td colSpan={2}>Category of Delegates / Authors</td>
                                <td>Students/Research Scholars</td>
                                <td>Faculty/Scientists/ Industries</td>
                            </tr>
                            <tr>
                                <td rowSpan={2}>Indian Participant</td>
                                <td>IEEE Member</td>
                                <td>Rs. 3,200</td>
                                <td>Rs. 6400</td>
                            </tr>
                            <tr>
                                <td>Non-IEEE Member</td>
                                <td>Rs. 4,000</td>
                                <td>Rs. 8,000</td>
                            </tr>
                            <tr>
                                <td rowSpan={2}>Foreign Participant</td>
                                <td>IEEE Member</td>
                                <td>$ 160</td>
                                <td>$ 320</td>
                            </tr>
                            <tr>
                                <td>Non-IEEE Member</td>
                                <td>$ 200</td>
                                <td>$ 400</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>To promote more number of attendees,the following will be considered or as per the practice</h4>
                    <ul>
                        <li>	At least one author from every accepted paper must register for the conference at the appropriate rate in their respective category in order for consideration for the research article to be included in the conference and to be included on IEEE Xplore®.</li>
                        <li>	One registration in the IEEE Member and Non-IEEE Member category will accommodate registration of 2 papers by the same the registering author.</li>
                        <li>	The Student Category registration (member and non-IEEE member) covers a single paper registration only.</li>
                    </ul>
                    <p className='fw-bold'>
                        Note: Delegates from Academic Institution/Industry/Utilities/ R &amp; D/ Professional
                        attending  IICPE 2023 without presenting the paper also have to register with the usual
                        fees as stated in above table.
                    </p>
                </ol>

                <p>
                    <h4>Registration and fee payment for Indian Authors</h4>
                    Steps: <br />
                    Click on the following link for paper registeration and fee payment: <a href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?saralID=-913600490">https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?saralID=-913600490</a> <br />
                    Note: Download the receipt and deposit a copy at conference venue.
                </p>


                <p className='fw-bold'>
                    For Foreign Authors only:- <br /> <br />
                    Deposit the registration fees through NEFT/RTGS/IMPS/Bank Transfer to the below
                    given bank account and send transaction details to iicpe2023@gmail.com :- <br /> <br />

                    <table>
                        <tbody>
                            <tr>
                                <td>Account Name:</td>
                                <td>IICPE2023</td>
                            </tr>
                            <tr>
                                <td>Account No:</td>
                                <td>42237135017</td>
                            </tr>
                            <tr>
                                <td>Bank:</td>
                                <td>
                                    State Bank of India, DCRUST, Murthal, Sonipat, Haryana.
                                </td>
                            </tr>
                            <tr>
                                <td>Swift code</td>
                                <td>SBININBB907</td>
                            </tr>
                            <tr>
                                <td>IFSC code</td>
                                <td>SBIN0014374</td>
                            </tr>
                            <tr>
                                <td>MICR</td>
                                <td>110002358</td>
                            </tr>

                        </tbody>
                    </table>


                </p>

                <div >
                    <br /> <br /> <br /> <br />
                </div>
















            </div>
        </>
    )
}