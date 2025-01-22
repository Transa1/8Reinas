 var counter = 0;
 var queen = 'img/queen.png';
 function showQueen(cell){
     if (window.getComputedStyle(cell).backgroundImage == 'none') {
         if (counter < 8){
             cell.style = `
                 background-image: url('${queen}');
                 background-size: 4rem;
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
        }
        if(r2 < 8 && c2 >= 0){
            cell.rows[r2++].cells[c2--].style.backgroundColor = 'red';
        }
        if(r3 >= 0 && c3 >= 0){
            cell.rows[r3--].cells[c3--].style.backgroundColor = 'red';
        }
        if(r4 >= 0 && c4 < 8){
            cell.rows[r4--].cells[c4++].style.backgroundColor = 'red';
        }
    }
 }

 function cleanBoard(){
    document.querySelectorAll('td').forEach(td => td.style.backgroundColor = '');
 }

 function clearImages(){
    document.querySelectorAll('td').forEach(td => td.style.backgroundImage = 'none');
    counter = 0;
 }

 function changeImages(){
    document.querySelectorAll('td').forEach(td => {
        if (td.style.backgroundImage !== '' && td.style.backgroundImage !== 'none') {
            td.style.backgroundImage = `url('${queen}')`;
        }
    });
 }

 function showSolution(solutionNumber) {
    clearImages();
    var cells = document.getElementById('board');

    switch (solutionNumber) {
        case "1":
            showQueen(cells.rows[0].cells[3]);
            showQueen(cells.rows[1].cells[6]);
            showQueen(cells.rows[2].cells[2]);
            showQueen(cells.rows[3].cells[7]);
            showQueen(cells.rows[4].cells[1]);
            showQueen(cells.rows[5].cells[4]);
            showQueen(cells.rows[6].cells[0]);
            showQueen(cells.rows[7].cells[5]);
            break;
        case "2":
            showQueen(cells.rows[0].cells[4]);
            showQueen(cells.rows[1].cells[1]);
            showQueen(cells.rows[2].cells[3]);
            showQueen(cells.rows[3].cells[6]);
            showQueen(cells.rows[4].cells[2]);
            showQueen(cells.rows[5].cells[7]);
            showQueen(cells.rows[6].cells[5]);
            showQueen(cells.rows[7].cells[0]);
            break;
        case "3":
            showQueen(cells.rows[0].cells[3]);
            showQueen(cells.rows[1].cells[1]);
            showQueen(cells.rows[2].cells[6]);
            showQueen(cells.rows[3].cells[2]);
            showQueen(cells.rows[4].cells[5]);
            showQueen(cells.rows[5].cells[7]);
            showQueen(cells.rows[6].cells[4]);
            showQueen(cells.rows[7].cells[0]);
            break;
        default:
            break;
    }
}

function changeQueen(queenNumber){
    switch(queenNumber){
        case "1":
            queen = 'img/queen.png';
            changeImages()
            break;
        case "2":
            queen = 'img/queen_elizabeth.png';
            changeImages()
            break;
        case "3":
            queen = 'img/freddie_mercury.png';
            changeImages()
            break;
    }
}