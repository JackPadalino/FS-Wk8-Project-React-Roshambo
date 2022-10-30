import React,{ useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SinglePlayer = () => {
    const { playerId } = useParams(); // getting the playerId that was passed into the URL from Leaderboard component
    const [player,setPlayer] = useState({});
    const [loading,setLoading] = useState(true);

    const getPlayer = async () =>{
        const response = await axios.get(`/api/players/${playerId}`);
        const playerData = await response.data;
        setPlayer(playerData);
        setLoading(false);
    };

    useEffect(() =>{
        getPlayer();
    }, []);

    if(loading){
        return <p>Loading...</p>;
    }else{
        return (
            <div>
                <p>{player.username}</p>
                {
                    player.games.map((game)=>{
                        return(
                            <p key={game.id}>Game ID: {game.id} Result: {game.result}</p>
                        )
                    })
                }
            </div>
        );
    };
};

export default SinglePlayer;