import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function ChoosePlayers() {

    const[player1, setPlayer1] = useState('')
    const[player2, setPlayer2] = useState('')
    const navigate = useNavigate();
    

    const handleStartGame = () =>{
        navigate('board', {
            state: {
                player1, 
                player2
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
                <TextField id="standard-basic"variant="standard"
                onChange={(event) => player1Name(event.target.value)}/>
            </div>
            <div>
                Choose a symbol
            </div>
      </div>

      <div>
          <h2>Player 2</h2>
            <div>
                <h3>Enter your name</h3>
                <TextField id="standard-basic" variant="standard" 
                onChange={(event) =>player2Name(event.target.value) }/>
            </div>
            <div>
                Choose a symbol
            </div>
      </div>

      <Button onClick={handleStartGame} variant="contained">Start</Button>

    </div>
    


    </div>
  )
}

export default ChoosePlayers
