function keyPush(event) {
    switch (event.keyCode) {
        case 65: // A
            if (x_direction != 1 && !start_fase) {
                x_direction = -1;
                y_direction = 0;      
            } 
            break;
        case  87: // W
            if (y_direction != 1) {
                x_direction = 0;
                y_direction = -1;
            }
            break;
        case 68: // D
            if (x_direction != -1) {
                x_direction = 1;
                y_direction = 0;
            }
            break;
        case 83: // S
            if (y_direction != -1) {
                x_direction = 0;
                y_direction = 1;
            }
            break;
        case 37: // esquerda
            if (x_direction2 != 1) {
                x_direction2 = -1;
                y_direction2 = 0; 
            }     
            if (numplayer_1) {
                if (x_direction != 1 && !start_fase) {
                    x_direction = -1;
                    y_direction = 0;
                }
            }
            break;   
        case 38: // cima
            if (y_direction2 != 1) {
                x_direction2 = 0;
                y_direction2 = -1;
            }
            if (numplayer_1 && y_direction != 1) {
                x_direction = 0;
                y_direction = -1;
            }            
            break;
        case 39: // direita
            if (x_direction2 != -1 && !start_fase) {
                x_direction2 = 1;
                y_direction2 = 0;
            }
            if (numplayer_1 && x_direction != -1) {
                x_direction = 1;
                y_direction = 0;
            }            
            break;
        case 40: // baixo
            if (y_direction2 != -1) {
                x_direction2 = 0;
                y_direction2 = 1;
            }
            if (numplayer_1 && y_direction != -1) {
                x_direction = 0;
                y_direction = 1;
            }            
            break;
    }  

    if (!numplayer_1) {
        if (x_direction != 0 || y_direction != 0) {
            if (x_direction2 == 0 && y_direction2 == 0) x_direction2 = -1;
        }
        if (x_direction2 != 0 || y_direction2 != 0) {
            if (x_direction == 0 && y_direction == 0) x_direction = 1;
        }
    }

    if (numplayer_1) {
        if (x_direction != 0 || y_direction != 0) start_fase = false;
    } else {
        if (x_direction != 0 || y_direction != 0 || x_direction2 != 0 || y_direction2 != 0) start_fase = false;
    }
}