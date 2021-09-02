import React, {useEffect} from 'react';
import Slider from '../../component/Home/HomeSlider/HomeSlider';
import HomeBanner from '../../component/Home/HomeBanner/HomeBanner';
import HomeBannerSecond from '../../component/Home/HomeBannerSecond/HomeBannerSecond';
import HomeProductNew from '../../component/Home/HomeProductNew/HomeProductNew';
import HomeCountDownt from '../../component/Home/HomeCountdown/HomeCountDownt';
import HomeBlog from '../../component/Home/HomeBlog/HomeBlog';

const Home = () => {
    
    useEffect(() => {
        window.scroll(0,0)
    },[])
    return (
        <>
            <Slider/>
            <HomeBanner/>
            <HomeBannerSecond/>
            <HomeProductNew/>
            <HomeCountDownt/>
            <HomeBlog/>
        </>
    );
}

export default Home;
