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

 function changeColor(r, c){
    var cell = document.getElementById('board');
    var r1 = r, c1 = c, r2 = r, c2 = c;
    var r3 = r, c3 = c, r4 = r, c4 = c;

    for(let i = 1; i < 10; i++){
        
    }
 }