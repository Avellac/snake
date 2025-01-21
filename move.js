function move_green_snake() {
     if (x_direction != 0 || y_direction != 0) {
        // deleta calda da cobra verde (somente se não comeu comida)
        if (!get_food) {
            ctx.fillStyle = 'black';
            ctx.fillRect(snake[snake.length-1].x * size_obj, snake[snake.length-1].y * size_obj, size_obj - 2, size_obj - 2);
            snake.pop();
        } else { 
            if (super_food) {
                super_count++;
                if (super_count > 10) {
                    get_food = false;
                    super_food = false;
                    super_count = 0;
                }
            } else {
                get_food = false;
            }
        }
        // insere cabeça da cobra verde
        ctx.fillStyle = 'green';
        ctx.fillRect(snake[0].x * size_obj, snake[0].y * size_obj, size_obj - 2, size_obj - 2); 
        snake.unshift({x: pos_x, y: pos_y});
        ctx.fillStyle = 'lime';
        ctx.fillRect(snake[0].x * size_obj, snake[0].y * size_obj, size_obj - 2, size_obj - 2);     
    } else {
        // monta todas as partes da cobra verde
        snake.length = 0;
        ctx.fillStyle = 'lime';
        for (var i=0; i < 5; i++) {
            snake.push({x: pos_x - i, y: pos_y});
            ctx.fillRect(snake[i].x * size_obj, snake[i].y * size_obj, size_obj - 2, size_obj - 2);
            ctx.fillStyle = 'green';             
        }
    }
}

function move_blue_snake() {
    if (x_direction2 != 0 || y_direction2 != 0) {
        // deleta calda da cobra azul (somente se não comeu comida)
        if (!get_food2) {
            ctx.fillStyle = 'black';
            ctx.fillRect(snake2[snake2.length-1].x * size_obj, snake2[snake2.length-1].y * size_obj, size_obj - 2, size_obj - 2);
            snake2.pop();
        } else { 
            if (!super_food)
                get_food2 = false;
            else {
                super_count++;
                if (super_count > 10) {
                    get_food2 = false;
                    super_food = false;
                    super_count = 0;
                }
            }
        }       
        ctx.fillStyle = 'navy';
        ctx.fillRect(snake2[0].x * size_obj, snake2[0].y * size_obj, size_obj - 2, size_obj - 2);              
        snake2.unshift({x: pos2_x, y: pos2_y});
        ctx.fillStyle = 'blue';
        ctx.fillRect(snake2[0].x * size_obj, snake2[0].y * size_obj, size_obj - 2, size_obj - 2);      
    } else {
        // monta todas as partes da cobra verde
        snake2.length = 0;
        ctx.fillStyle = 'blue';
        for (var i=0; i < 5; i++) {
            snake2.push({x: pos2_x + i, y: pos2_y});
            ctx.fillRect(snake2[i].x * size_obj, snake2[i].y * size_obj, size_obj - 2, size_obj - 2); 
            ctx.fillStyle = 'navy';            
        }
    }
}