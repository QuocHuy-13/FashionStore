import React from 'react';
import './countdownt.css'
const Countdown = ({ timeDays, timeHouses, timeMinutes, timeSeconds }) => {
    return (
        <div className="countdown-container">
            <div className="countdown">
                <section>
                    <p>{timeDays}</p>
                    <small>DAYS</small>
                </section>
                <section>
                    <p>{timeHouses}</p>
                    <small>HOURS</small>
                </section>
                <section>
                    <p>{timeMinutes}</p>
                    <small>MINUTES</small>
                </section>
                <section>
                    <p>{timeSeconds}</p>
                    <small>SECONDS</small>
                </section>
            </div>
        </div>
    );
}

export default Countdown;
