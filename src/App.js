import React from 'react';
import { Box, Paper } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import './index.css'; 







const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      
      display: "flex",
      flexWrap: "wrap",
      borderRadius: "20px",
      boxShadow: '0 0 3px 3px rgba(1, 1, 1, .325)',
      color: 'primary',
      fontFamily: 'body',
      width: ['100%', '40%', '25%'],
      textAlign: 'center', 
       lineHeight: '40px',
       padding: "20px",
      background: "black",
       
      
      "& > *": {
        margin: theme.spacing(3),
        width: theme.spacing(38),
        height: theme.spacing(30),
        boxShadow: '0 0 3px 3px rgba(1, 1, 2, .175)',
        borderRadius: "15px",
       
      },
    },
  })
);






function App() {
  
  const classes = useStyles();
  return (
  

   
    

   
    <Box className={classes.root}>
  
    
      <Paper  component="p">Telas do Robos</Paper>
      <Paper  component="p">Telas do Robos</Paper>
      <Paper  component="p">Telas do Robos</Paper>
      <Paper  component="p">Telas do Robos</Paper>
      <Paper  component="p">Telas do Robos</Paper>
      <Paper  component="p">Telas do Robos</Paper>
      <Paper  component="p">Telas do Robos</Paper>
      <Paper  component="p">Telas do Robos</Paper>
      <Paper  component="p">Telas do Robos</Paper>
      <Paper  component="p">Telas do Robos</Paper>
      <Paper  component="p">Telas do Robos</Paper>
      <Paper  component="p">Telas do Robos</Paper>
      <Paper  component="p">Telas do Robos</Paper>
      <Paper  component="p">Telas do Robos</Paper>
      
     
      

    </Box>
    
  );
}
  


export default App;