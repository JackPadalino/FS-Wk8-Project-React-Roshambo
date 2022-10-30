import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const Leaderboard = () => {
    const [players,setPlayers] = useState([]);
    const [loading,setLoading] = useState(true);

    const getPlayers = async () =>{
        const response = await axios.get("/api/players");
        const playerData = await response.data;
        setPlayers(playerData);
        setLoading(false);
    };
    useEffect(() =>{
        getPlayers();
    }, []);

    if(loading){
        return <p>Loading...</p>
    }else{
        return (
            <div>
                <h1>Leaderboard!</h1>
                {
                    players.map((player)=>{
                        return(
                            <div key={player.id}>
                                <Link to={`/leaderboard/${player.id}`}><p>{player.username}</p></Link>
                            </div>
                        );
                    })
                }
                <Link to='/create-player'><button>Add player</button></Link>
            </div>
        );
    } 
};

export default Leaderboard;