function setNewFood() {
    // nova comida 
    if ((new_food || new_food2) && !super_food ) {
        do {
            food_x = Math.floor(Math.random() * terrain_x);
            food_y = Math.floor(Math.random() * terrain_y);         
        } while (verifyPosition(snake, food_x, food_y) || 
                 verifyPosition(snake2, food_x, food_y) ||
                 verifyPosition(wall, food_x, food_y));
        super_food = false;
        if (Math.floor(Math.random() * 3) == 2) {
            ctx.fillStyle = 'fuchsia';
            super_food = true;
        } else 
            ctx.fillStyle = 'red';
        ctx.fillRect(food_x * size_obj, food_y * size_obj, size_obj - 2, size_obj - 2);
        new_food = false;        
        new_food2 = false; 
    }    
}

function getFood() {
    // verifica se cobra pegou a comida
    if (food_x == pos_x && food_y == pos_y) {
        new_food = true;
        get_food = true;
        if (numplayer_1)
            document.getElementById('record_1').textContent++;
    } 
    if (food_x == pos2_x && food_y == pos2_y) {
        new_food2 = true;
        get_food2 = true;
    }     
}