const playerCreator = (name, choice) => {
  const player = {
      name, choice
  };
  
  return player;
};

const player1 = playerCreator(prompt("Player 1 Name?"),prompt("X or 0 ?"));
const player2 = playerCreator(prompt("Player 2 Name?"),prompt("X or 0 ?"));


const Gameboard = (() => {
  
    let gameboard = [ null , null , null , null , null , null, null , null , null];
    const boardCheck = () => {
      if (gameboard.includes(null)){

      }  else {
        return console.log("It's a TIE!");
      }
      }
      console.log(gameboard);
      if ((gameboard[0] != null) && (gameboard[0] == gameboard[1]) && (gameboard[1] == gameboard[2])){
        if (gameboard[0] == 'X'){
          if (player1.choice == 'X'){
            console.log(`${player1.name} has Won!`);
          } else {
            console.log(`${player2.name} has Won!`);
          }
          
        } 
        
        if (gameboard[0] == '0') {
            if (player1.choice == '0'){
              console.log(`${player1.name} has Won!`);
            } else {
              console.log(`${player2.name} has Won!`);
            }
          }
          
      } else if ((gameboard[3] != null) && (gameboard[3] == gameboard[4]) && (gameboard[4] == gameboard[5])){
        if (gameboard[3] == 'X'){
          if (player1.choice == 'X'){
            console.log(`${player1.name} has Won!`);
          } else {
            console.log(`${player2.name} has Won!`);
          }
          
        } 
        
        if (gameboard[3] == '0') {
            if (player1.choice == '0'){
              console.log(`${player1.name} has Won!`);
            } else {
              console.log(`${player2.name} has Won!`);
            }
          }
          
      } else if ((gameboard[6] != null) && (gameboard[6] == gameboard[7]) && (gameboard[7] == gameboard[8])){
        if (gameboard[6] == 'X'){
          if (player1.choice == 'X'){
            console.log(`${player1.name} has Won!`);
          } else {
            console.log(`${player2.name} has Won!`);
          }
          
        } 
        
        if (gameboard[6] == '0') {
            if (player1.choice == '0'){
              console.log(`${player1.name} has Won!`);
            } else {
              console.log(`${player2.name} has Won!`);
            }
          }
       
      } else if ((gameboard[0] != null) && (gameboard[0] == gameboard[3]) && (gameboard[3] == gameboard[6])){
        if (gameboard[0] == 'X'){
          if (player1.choice == 'X'){
            console.log(`${player1.name} has Won!`);
          } else {
            console.log(`${player2.name} has Won!`);
          }
          
        } 
        
        if (gameboard[0] == '0') {
            if (player1.choice == '0'){
              console.log(`${player1.name} has Won!`);
            } else {
              console.log(`${player2.name} has Won!`);
            }
          }
         
      } else if ((gameboard[1] != null) && (gameboard[1] == gameboard[4]) && (gameboard[4] == gameboard[7])){
        if (gameboard[1] == 'X'){
          if (player1.choice == 'X'){
            console.log(`${player1.name} has Won!`);
          } else {
            console.log(`${player2.name} has Won!`);
          }
          
        } 
        
        if (gameboard[1] == '0') {
            if (player1.choice == '0'){
              console.log(`${player1.name} has Won!`);
            } else {
              console.log(`${player2.name} has Won!`);
            }
          }
         
      } else if ((gameboard[2] != null) && (gameboard[2] == gameboard[5]) && (gameboard[5] == gameboard[8])){
        if (gameboard[2] == 'X'){
          if (player1.choice == 'X'){
            console.log(`${player1.name} has Won!`);
          } else {
            console.log(`${player2.name} has Won!`);
          }
          
        } 
        
        if (gameboard[2] == '0') {
            if (player1.choice == '0'){
              console.log(`${player1.name} has Won!`);
            } else {
              console.log(`${player2.name} has Won!`);
            }
          }
          
      } else if ((gameboard[0] != null) && (gameboard[0] == gameboard[4]) && (gameboard[4] == gameboard[8])){
        if (gameboard[0] == 'X'){
          if (player1.choice == 'X'){
            console.log(`${player1.name} has Won!`);
          } else {
            console.log(`${player2.name} has Won!`);
          }
          
        } 
        
        if (gameboard[0] == '0') {
            if (player1.choice == '0'){
              console.log(`${player1.name} has Won!`);
            } else {
              console.log(`${player2.name} has Won!`);
            }
          }
         
      } else if ((gameboard[2] != null) && (gameboard[2] == gameboard[4]) && (gameboard[4] == gameboard[6])){
        if (gameboard[2] == 'X'){
          if (player1.choice == 'X'){
            console.log(`${player1.name} has Won!`);
          } else {
            console.log(`${player2.name} has Won!`);
          }
          
        } 
        
        if (gameboard[2] == '0') {
            if (player1.choice == '0'){
              console.log(`${player1.name} has Won!`);
            } else {
              console.log(`${player2.name} has Won!`);
            }
          }
         
      } 
     
   const reset = () => {
    
    Gameboard.gameboard.fill(null);
    draw();
    const player1 = playerCreator(prompt("Player 1 Name?"),prompt("X or 0 ?"));
    const player2 = playerCreator(prompt("Player 2 Name?"),prompt("X or 0 ?"));
   

 }
    return {gameboard, boardCheck,  reset};
})();


function draw(){
    let n = 0;
    Gameboard.gameboard.forEach(() =>    {
        document.getElementById(`game-cell-${n + 1}`).textContent =  Gameboard.gameboard[n];
        n++;
    });
}



let n = 0;

document.querySelectorAll('.game-cell').forEach(item => {
    item.addEventListener('click', event => {
  if (Gameboard.gameboard[item.id.slice(-1) - 1] == null){      
    if (n == 0){
        Gameboard.gameboard[item.id.slice(-1) - 1] = player1.choice;
      n++;
    }   else{
        Gameboard.gameboard[item.id.slice(-1) - 1] = player2.choice;
      n--;
    }
  }
      return draw(), Gameboard.boardCheck();
    })
  });

 document.querySelector('button').addEventListener('click', () =>{
        return Gameboard.reset();
 })