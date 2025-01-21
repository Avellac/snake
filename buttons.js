function scrNormal() {
    const bt1 = document.getElementById('size_scr');

    if (numplayer_1) {;
        if (bt1.textContent == 'Normal') {
            bt1.textContent = 'Large';
            size_scr_normal = false;
            document.getElementById('record_1').style.left = '30px';
            document.getElementById('record_2').style.left = '1163px';            
        } else {
            bt1.textContent = 'Normal';
            size_scr_normal = true;   
            document.getElementById('record_1').style.left = '30px';
            document.getElementById('record_2').style.left = '563px';                 
        }   
    } 
    fase = 1;
    resetGame();
}

 function numberPlayers() {
    bt3 = document.getElementById('players');

    if (bt3.textContent == '1 player') {
        bt3.textContent = '2 players';
        numplayer_1 = false;
        document.getElementById('size_scr').textContent = 'Large';
        size_scr_normal = false;
        document.getElementById('record_2').hidden = false;
        document.getElementById('record_2').style.color = 'blue';
        document.getElementById('record_2').textContent = 0;
        document.getElementById('record_2').style.right = '60px';
        document.getElementById('record_1').style.left = '60px';        
    } else {
        bt3.textContent = '1 player';
        numplayer_1 = true;
        document.getElementById('record_2').hidden = false; 
        document.getElementById('record_2').style.color = 'white';
        document.getElementById('record_2').textContent = 3;
        document.getElementById('record_1').style.left = '60px';      
    }
    fase = 1;    
    resetGame();
 }
