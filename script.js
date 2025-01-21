pos_x = pos_y = 0;
pos2_x = pos2_y = -1;
size_obj = 20;
terrain_x = document.getElementById('gc').width / size_obj;
terrain_y = document.getElementById('gc').height / size_obj;
food_x = food_y = -2;
x_direction = y_direction = 0;
x_direction2 = y_direction2 = 0;
snake = snake2 = [];
wall = [];
fase = 1;
start_fase = true;
lives = 5;
len_snake = len_snake2 = 0;
size_scr_normal = true;
size_sna_normal = true;
numplayer_1 = true;
draw_terrain = true;
new_food = true;
get_food = false;
get_food2 = false;
reset_game = true;
super_food = false;
super_count = 0;
record1 = record2 = 0;

onload=function() {
    canv = document.getElementById('gc');
    ctx = canv.getContext('2d');  
    document.addEventListener('keydown', keyPush);
    setInterval(game, 1000/10);
}

function game() {
    document.getElementById("limited").addEventListener("click", changedConfig);

    // nova posição da cobra em movimento
    pos_x += x_direction;
    pos_y += y_direction;
    if (!numplayer_1) {
        pos2_x += x_direction2;
        pos2_y += y_direction2;
    }

    setFase();
    
    // verifica colisão
    verificaColisao();

    // verifica se as cobras se chocaram com as cabeças
    if (pos_x == pos2_x && pos_y == pos2_y) {
        window.alert('The snakes were destroyed');
        reset_game = true;
    }

    // verifica se é para criar nova comida
    setNewFood();

    // verifica se pegou comida
    getFood();
    
    // movimenta cobras
    if (!reset_game) {
        move_green_snake();
        if (!numplayer_1 && !reset_game) move_blue_snake();
    }

    if (lives == 0) {
        reset_game = true;
        fase = 1;
        lives = 3;
    }

    // reinicia o game
    if (reset_game) {
        resetGame();
    }
}

function resetGame() {
    // inicializa flags      
    draw_terrain = true;
    new_food = true;
    get_food = false;
    get_food2 = false;
    reset_game = false;
    super_food = false; 
    start_fase = true;
    size_obj = 20;

    // tamanho do terreno
    if (size_scr_normal) {
        canv.width  = 600;
        canv.height = 600;
    } else {
        canv.width  = 1200;
        canv.height = 600;    
    }

    // desenha terreno
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canv.width, canv.height);  

    // matriz do terreno em linha x coluna
    terrain_x = canv.width  / size_obj;
    terrain_y = canv.height / size_obj; 

    // posição inicial da cobra com base no layout escolhido
    if (numplayer_1) {
        pos_x = terrain_x / 2;
        pos_y = terrain_y / 2 - 1; 
    } else {
        if (size_sna_normal) pos_x = terrain_x / 2 - 15
                        else pos_x = terrain_x / 2 - 30;
        pos_y = terrain_y / 2 - 1;        
        if (size_sna_normal) pos2_x = terrain_x / 2 + 15
                        else pos2_x = terrain_x / 2 + 30;
        pos2_y = terrain_y / 2 - 1;              
    }    

    // direção inicial da cobra (parada)
    x_direction = y_direction = 0;
    x_direction2= y_direction2 = 0;

    // vetor para o corpo da cobra e tamanho do vetor
    snake = [];
    len_snake = 5; 
    snake2 = [];
    len_snake2 = 5;    
    
    if (numplayer_1) {
        document.getElementById('record_1').textContent = '0';
        document.getElementById('record_2').textContent = lives;
    } else {
        // document.getElementById('record_1').textContent = '0';
        // document.getElementById('record_2').textContent = '0';        
    }

    drawWall();
}

function changedConfig() {
    reset_game = true;
}