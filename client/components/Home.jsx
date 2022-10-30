import React from 'react';
import { Link } from 'react-router-dom';
import Leaderboard from './Leaderboard';

const Home = () => {
    return (
        <div>
            <h1>Roshambo</h1>
            <Link to='/leaderboard'><button>See all players</button></Link>
        </div>
    );
};

export default Home;