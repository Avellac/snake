function verificaColisao() {
    if (!reset_game) {
        if (x_direction != 0 || y_direction != 0) {
            // verifica se a cobra verde colidiu com ela mesma, com a cobra azul ou com o muro
            if ((verifyPosition(snake, pos_x, pos_y) || 
                 verifyPosition(snake2, pos_x, pos_y) ||
                 verifyPosition(wall, pos_x, pos_y)) && snake.length != 0) {
                if (numplayer_1) {
                    lives--;
                    document.getElementById('record_2').textContent = lives;
                    if (lives < 1) {
                        window.alert("Game Over!");
                        fase = 1;
                        lives = 5;
                    } else 
                        window.alert("You fail!");
                } else {
                    window.alert("Blue Snake Won!");
                    document.getElementById('record_2').textContent++;
                }
                start_fase = true;
                reset_game = true; 
            }     
        } 
    }

    if (!reset_game) {
        if (x_direction2 != 0 || y_direction2 != 0) {
            // verifica se a cobra colidiu com ela mesma, ou com a cobra verde
            if ((verifyPosition(snake2, pos2_x, pos2_y) || 
                 verifyPosition(snake, pos2_x, pos2_y) ||
                 verifyPosition(wall, pos2_x, pos2_y)) && snake2.length != 0) {
                window.alert("Green Snake Won!");
                document.getElementById('record_1').textContent++;
                start_fase = true;
                reset_game = true;
            } 
        }
    }

    // verifica cosisão da cobra com as bordas
    if (!reset_game) {
        if ((pos_x < 0) || (pos_y < 0) || (pos_x > terrain_x - 1) || (pos_y > terrain_y - 1)) {
            if (document.getElementById('limited').checked) {
                if (numplayer_1) {
                    lives--;
                    document.getElementById('record_2').textContent = lives;
                    if (lives < 1) {
                        window.alert("Game Over!");
                        fase = 1;
                        lives = 5;
                    } else 
                        window.alert("You fail!");
                } else {
                    window.alert("Blue Snake Won!");
                    document.getElementById('record_2').textContent++;
                }
                start_fase = true;
                reset_game = true;    
            } else  {
                if (pos_x < 0) pos_x = terrain_x - 1;
                if (pos_y < 0) pos_y = terrain_y - 1;
                if (pos_x > terrain_x - 1) pos_x = 0;
                if (pos_y > terrain_y - 1) pos_y = 0;
            }
        } 
        if (!numplayer_1) {     
            if (document.getElementById('limited').checked) {      
                if ((pos2_x < 0) || (pos2_y < 0) || (pos2_x > terrain_x - 1) || (pos2_y > terrain_y - 1)) {
                    window.alert("Green Snake Won!");
                    document.getElementById('record_1').textContent++;
                    start_fase = true;
                    reset_game = true;    
                }   
            } else  {
                if (pos2_x < 0) pos2_x = terrain_x - 1;
                if (pos2_y < 0) pos2_y = terrain_y - 1;
                if (pos2_x > terrain_x - 1) pos2_x = 0;
                if (pos2_y > terrain_y - 1) pos2_y = 0;
            }              
        }
    }    
}

function verifyPosition(obj, x, y) {
    for (var n=0; n < obj.length; n++) {
        if (obj[n].x == x && obj[n].y == y) return true;
    }
    return false;
}