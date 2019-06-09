import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from "react-router-dom";


const Error = () => {
    return <Hero hero="defaultHero">
        <Banner title="404" subTitle="Page not found">
           <Link to="/room" className="btn-primary">Turn back rooms
           </Link>  
        </Banner>
    </Hero>
}

export default Error