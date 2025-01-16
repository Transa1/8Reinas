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

    for(let i = 0; i < 10; i++){
        cell.rows[r].cells[i].style.backgroundColor = 'red';
        cell.rows[i].cells[c].style.backgroundColor = 'red';

        if(r1 < 8 && c1 < 8){
            cell.rows[r1++].cells[c1++].style.backgroundColor = 'red';
            cell.rows[r2++].cells[c2--].style.backgroundColor = 'red';
            cell.rows[r3--].cells[c3++].style.backgroundColor = 'red';
            cell.rows[r4--].cells[c4--].style.backgroundColor = 'red';
        }
    }
 }

 function cleanBoard(){
    document.querySelectorAll('td').forEach(td => td.style.backgroundColor = '');
 }