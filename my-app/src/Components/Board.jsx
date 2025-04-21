
import { Grid } from '@mui/material'
import Box from '@mui/system/Box';
import styled from '@mui/system/styled';
import React from 'react'
import { useState, useEffect } from 'react';

const Item = styled('div')(({ theme }) => ({
  height:'100px',
  backgroundColor: '#fff',
  border: '1px solid',
  borderColor: 'black',
  borderRadius: '4px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  
  textAlign: 'center',
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
    borderColor: '#444d58',
  }),
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

  const[grid, setGrid] = useState(Array(9).fill(''))
  const [currentPlayer, setCurrentPlayer] = useState('x')
  const[winner,setWinner] = useState('')

  useEffect(() =>{
    checkWinner()
  },[grid])

  const checkWinner = () =>{
    for (let combo of winningCombos ){
      const[a,b,c] = combo
      if(grid[a] === grid[b] && grid[a] == grid[c] && grid[a]){
        console.log("winner")
        setWinner(grid[a])
        return
      }
    }
  }


  const boxChecked = (index) =>{
    if(grid[index] != ''){
      return
    }
    console.log('box checked')
    const newGrid = [...grid];
    newGrid[index] = currentPlayer;
    setGrid(newGrid)

    if (currentPlayer == 'x'){
      setCurrentPlayer('o')
    }
    else{
      setCurrentPlayer('x')
    }


   
  }

  return (

  <div>
    <h3>Current Player: {currentPlayer} </h3>
    {winner && <h4>Player {winner} Wins!</h4>}
  <div style = {{
      display:'flex',
      justifyContent:'center',
      alignItems: 'center',
      height:'100vh',

    }}>
      <Box sx={{width:600, height:600, mt:-20}}>
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

    </div>



      
    </div>
  )
}
