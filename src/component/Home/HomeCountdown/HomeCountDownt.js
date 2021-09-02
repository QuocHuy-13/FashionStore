import React from 'react';
import './HomeCountdown.css'
import { useState, useEffect } from 'react';
import Countdown from '../../CountdownTimer/Countdown';

const HomeCountDownt = () => {

    const [timeDays, setTimeDays] = useState();
    const [timeHouses, setTimeHouses] = useState();
    const [timeMinutes, setTimeMinutes] = useState();
    const [timeSeconds, setTimeSeconds] = useState();

    useEffect(() => {
        let interval;
        const countdown = () => {
            const CountdownTimer = new Date("September 30,2021").getTime();
            interval = setInterval(() => {
                let now = new Date().getTime();
                let distance = CountdownTimer - now;
                let days = Math.floor(distance / (1000 * 60 * 60 * 24));
                let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                let seconds = Math.floor((distance % (1000 * 60)) / 1000);
                if (distance < 0) {
                    clearInterval(interval)
                } else {
                    setTimeDays(days);
                    setTimeHouses(hours);
                    setTimeMinutes(minutes);
                    setTimeSeconds(seconds);
                }
            }, 1000);
        }
        countdown();
        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <section className="shop-deal">
            <div className="container shop-deal-padd">
                <div className="shop-deal__content">
                    <h2 className="shop-deal_title mt-3 my-lg-4">Summer Flash Sale</h2>
                    <p className="shop-deal_subtitle">Our biggest sales this year - up to 60% off</p>
                    <p className="shop-deal_desc">The bedding was harly able to cover it and seemed ready to slide any moment!</p>
                </div>
                <Countdown
                    timeDays={timeDays}
                    timeHouses={timeHouses}
                    timeMinutes={timeMinutes}
                    timeSeconds={timeSeconds}
                />
            </div>
        </section>
    );
}

export default HomeCountDownt;
