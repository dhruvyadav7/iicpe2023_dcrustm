import React from 'react'
import { Link } from 'react-router-dom';
export default function Venue() {
    return (
        <>
            <div className="venue container my-lg-5 my-3">
                <h1 className='text-center my-3' style={{ color: '#ed793f' }}> General Information</h1>
                <h2>Conference Venue</h2>
                <p>The conference shall be held at Deenbandhu Chhotu Ram University of Science & Technology, N.H-1, Murthal, Sonepat, Haryana (National Capital Region), India.</p>
                <h2>Getting from the Airport to the Conference Venue</h2>
                <p>From Delhi Airport: Please take a taxi to the Deenbandhu Chhotu Ram University of Science & Technology, Sonepat. It may take one and a half hours from IGI Airport, Delhi.</p>
                <h2>Getting from the Railway Station to the Conference Venue</h2>
                <p>The nearest (8 Km.) railway station is Sonepat, Haryana. You may take an Auto from Sonepat Railway Station. You may also hire a taxi from New Delhi/ Delhi railway stations to the DCRUST campus.</p>
                <h2>Getting from the Bus to the Conference Venue</h2>
                <p>This DCRUST campus is located on NATIONAL HIGHWAY NO-1 (NH-1). NIT campus is about 50 km from ISBT (Interstate Bus terminal), DELHI. You may take a bus destined for Chandigarh/ Amritsar/ Ambala and get down to Murthal which is 2 km away from the DCRUST campus. It will take about 10 minutes to reach DCRUST, Murthal.</p>
                <h2>Local Weather & Time</h2>
                <p>Time zone: IST (Indian Standard Time) which is UTC +5:30 (daylight saving). In November, the day and night temperatures fall rapidly. The minimum temperature would be approximately 6 Degrees C. Fog is common during early morning and during night. It is advisable for you to bring the appropriate winter clothes.
                </p>
                <h2>Places of interest</h2>
                <p>Places of interest in Sonepat/Delhi can be seen at following link <a href="https://kurukshetra.gov.in/tourist-places/">Read Now…</a></p>

            </div>
        </>
    )
}