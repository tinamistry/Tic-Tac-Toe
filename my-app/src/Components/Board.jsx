
import { Grid } from '@mui/material'
import Box from '@mui/system/Box';
import styled from '@mui/system/styled';
import React from 'react'
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button'
import { useLocation } from 'react-router-dom';

const Item = styled('div')(({ theme }) => ({
  backgroundColor: '#fff',
  borderRadius: '6px',
  display: 'flex',
  justifyContent: 'center',
  justifyItems: 'center',
  alignItems: 'center',
  textAlign: 'center',
  fontSize:'150px',
  color: '#2c016d'
}));

const winningCombos = [
  [0, 1, 2], // across
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], // down
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8], // diagonal
  [2, 4, 6]
];


export default function Board() {
  const location = useLocation()
  const[grid, setGrid] = useState(Array(9).fill(''))
  const{player1, player2, symbol1 = 'X', symbol2 = 'O'} = location.state || {}
  const [currentPlayer, setCurrentPlayer] = useState(symbol1)
  const[winner,setWinner] = useState('')


  useEffect(() =>{
    checkWinner()
  
  },[grid])

  const checkWinner = () =>{
    console.log(player1)
    console.log(location)
    for (let combo of winningCombos ){
      const[a,b,c] = combo
      if(grid[a] === grid[b] && grid[a] === grid[c] && grid[a]){
        console.log("winner")
        setWinner(grid[a])
        return
      }
    }
  }


  const boxChecked = (index) =>{
    if(grid[index] !== ''){
      return
    }
    console.log('box checked')
    const newGrid = [...grid];
    newGrid[index] = currentPlayer;
    setGrid(newGrid)

    if (currentPlayer === symbol1){
      setCurrentPlayer(symbol2)
    } else {
      setCurrentPlayer(symbol1)
    }
  }

  const restartGame = () =>{
    setGrid(Array(9).fill(''))
    setWinner('')
    
  }

  return (

  <div style= {{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', 
    textAlign: 'center'
  }
   
  }>
    <h1 style = {{
      color: 'white',
      fontSize:'100px',
    }}>Tic-Tac-Toe</h1>
    {!winner && <h2 style = {{
      color: 'white',
      marginTop: '-40px'
    }}>Current Player: {currentPlayer} </h2>}

    {winner && <h2
      style  = {{
      color: 'white',
      marginTop: '-40px'
      }}>
      Player {winner} Wins!
      </h2>}

      <Box sx={{width:600, height:500}}>
            <Grid container spacing = {2}> 
              <Grid item xs={4}>
                <Item sx = {{height:200}} onClick={() => boxChecked(0)}>{grid[0]}</Item>
              </Grid>
              <Grid item xs={4}>
                <Item sx = {{height:200}} onClick={() => boxChecked(1)} > {grid[1]} </Item>
              </Grid>
              <Grid item xs={4} >
                <Item sx = {{height:200}} onClick={() => boxChecked(2)} > {grid[2]} </Item>
              </Grid>


              <Grid item xs={4} >
                <Item sx = {{height:200}} onClick={() => boxChecked(3)} > {grid[3]} </Item>
              </Grid>
              <Grid item xs={4} >
                <Item sx = {{height:200}} onClick={() => boxChecked(4)}> {grid[4]}</Item>
              </Grid>
              <Grid item xs={4}>
                <Item sx = {{height:200}} onClick={() => boxChecked(5)}>{grid[5]}</Item>
              </Grid>
              


              <Grid item xs={4} > 
                <Item sx = {{height:200}} onClick={() => boxChecked(6)}>{grid[6]}</Item>
              </Grid>
              <Grid item xs={4} >
                <Item sx = {{height:200}} onClick={() => boxChecked(7)}> {grid[7]} </Item>
              </Grid>
              <Grid item xs={4} >
                <Item sx = {{height:200}} onClick={() => boxChecked(8)}> {grid[8]} </Item>
              </Grid>
              
            </Grid>
        </Box>

        <Button variant="filled" sx = {{
          mt:20, 
          backgroundColor: '#2c016d',
          color: '#ffff',
          padding: '20px'

          }} onClick = {restartGame}>Play Again</Button>


      
    </div>
  )
}
