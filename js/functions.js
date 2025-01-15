 //Global variables
 var counter = 0;
 function showQueen(cell){
     if (window.getComputedStyle(cell).backgroundImage == 'none') {
         if (counter < 8){
             cell.style = `
                 background-image: url('img/queen.png');
                 background-size: 3.5rem;
                 background-repeat: no-repeat;
                 background-position: center;
                 `;
             counter++;
         }
     } else {
         cell.style = `background-image: none;`;
         counter--;
     }
 }