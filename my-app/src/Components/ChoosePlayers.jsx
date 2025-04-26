import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import PetsIcon from '@mui/icons-material/Pets';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';

function ChoosePlayers() {

    const[player1, setPlayer1] = useState('')
    const[player2, setPlayer2] = useState('')
    const ICONS = [
      { label: 'Smile', value: '😊', icon: <EmojiEmotionsIcon /> },
      { label: 'Game', value: '🎮', icon: <SportsEsportsIcon /> },
      { label: 'Pet', value: '🐶', icon: <PetsIcon /> },
      { label: 'Heart', value: '❤️', icon: <FavoriteIcon /> },
      { label: 'Star', value: '⭐', icon: <StarIcon /> },
      { label: 'X', value: 'X', icon: 'X' },
      { label: 'O', value: 'O', icon: 'O' },
    ];
    const [symbol1, setSymbol1] = useState('X');
    const [symbol2, setSymbol2] = useState('O');
    const navigate = useNavigate();
    

    const handleStartGame = () =>{
        if (symbol1 === symbol2) {
            alert('Players must choose different symbols!');
            return;
        }
        navigate('board', {
            state: {
                player1, 
                player2,
                symbol1,
                symbol2
            }
        });
       
    };

    const player1Name = (name) =>{
        setPlayer1(name)

    }

    const player2Name = (name) =>{
        setPlayer2(name)
    }

  return (
    <div style = {{
        display:'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
        borderStyle:'dotted'

    }}>
      <div style = {{
         
      }}>
       <h1 style = {{color:'white', fontSize:'60px',}}>Welcome to Tic Tac Toe</h1> 
      </div>

    <div className = 'playerInfo' style = {{
        borderStyle: 'dotted',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        width: '100vw',
        color:'white'
    
        }}>
        
    <div>
        <h2>Player 1</h2>
        
            <div>
                <h3>Enter your name</h3>
                <TextField id="standard-basic"variant="standard"  InputProps={{
    style: { color: 'white' }
  }}
                onChange={(event) => player1Name(event.target.value)}/>
            </div>
            <div>
                <h3>Choose an icon</h3>
                <ToggleButtonGroup
                  value={symbol1}
                  exclusive
                  onChange={(e, val) => val && setSymbol1(val)}
                  sx={{ mb: 2 }}
                >
                  {ICONS.map((icon) => (
                    <ToggleButton key={icon.value} value={icon.value} aria-label={icon.label}
                    sx = {{
                        color: 'white'
                    }}>
                      {typeof icon.icon === 'string' ? icon.icon : icon.icon}
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>
            </div>
      </div>

      <div>
          <h2>Player 2</h2>
            <div>
                <h3>Enter your name</h3>
                <TextField id="standard-basic" InputProps={{
    style: { color: 'white' }
  }} variant="standard"
                onChange={(event) =>player2Name(event.target.value) }/>
            </div>
            <div>
                <h3>Choose an icon</h3>
                <ToggleButtonGroup
                  value={symbol2}
                  exclusive
                  onChange={(e, val) => val && setSymbol2(val)}
                  sx={{ mb: 2 }}
                >
                  {ICONS.map((icon) => (
                    <ToggleButton key={icon.value} value={icon.value} aria-label={icon.label}
                     sx = {{
                        color: 'white'
                    }}>
                      {typeof icon.icon === 'string' ? icon.icon : icon.icon}
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>
            </div>
      </div>

      <Button onClick={handleStartGame} variant="contained">Start</Button>

    </div>



    </div>
  )
}

export default ChoosePlayers
