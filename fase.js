function setFase() {
    const rec = document.getElementById('record_1');

    if (numplayer_1) {
        if (rec.textContent == 10) {
            rec.textContent = 0;
            fase++;
            if (fase == 8) {
                window.alert('- - - CONGRATULATION - - -');
                fase = 1;
                lives = 5;
            }
            start_fase = true;
            wall = [];
            resetGame();

            switch (fase) {
                // ------------------------ fase 2 ---------------------
                case 2:             
                    if (size_scr_normal) {
                        for (var i = 10; i <= 20; i++) 
                            wall.push({x: i, y: 15});
                    } else {
                        for (var i = 10; i <= 50; i++) 
                            wall.push({x: i, y: 15}); 
                    }
                    drawWall();
                    break;
        
                // ------------------------ fase 3 ---------------------
                case 3:
                    if (size_scr_normal) {
                        for (var i = 10; i <= 20; i++) {
                            wall.push({x: i, y: 7});
                            wall.push({x: i, y: 23});
                        }  
                    } else {
                        for (var i = 10; i <= 50; i++) {
                            wall.push({x: i, y: 7});
                            wall.push({x: i, y: 23});                      
                        }  
                    }
                    drawWall();
                    break;               

                // ------------------------ fase 4 ---------------------
                case 4:
                    if (size_scr_normal) {
                        for (var i = 10; i <= 20; i++) {
                            wall.push({x: 7, y: i});
                            wall.push({x: 23, y: i});
                        }  
                    } else {
                        for (var i = 10; i <= 20; i++) {
                            wall.push({x: 7, y: i});
                            wall.push({x: 23, y: i});                      
                        }  
                    }
                    drawWall();
                    break;   

                // ------------------------ fase 5 ---------------------
                case 5:
                    if (size_scr_normal) {
                        for (var i = 0; i <= 20; i++) {
                            wall.push({x: 5, y: i});
                            wall.push({x: 25, y: i});
                            wall.push({x: 10, y: 29 - i});
                            wall.push({x: 20, y: 29 - i});                            
                        }  
                    } else {
                        for (var i = 10; i <= 20; i++) {
                            wall.push({x: 10, y: i});
                            wall.push({x: 50, y: i});
                            wall.push({x: 20, y: 29 - i});
                            wall.push({x: 40, y: 29 - i});                    
                        }  
                    }
                    drawWall();
                    break; 

                // ------------------------ fase 6 ---------------------
                case 6:
                    if (size_scr_normal) {
                        for (var i = 0; i < 15; i++) {
                            wall.push({x: 15, y: i * 2 + 1});
                            wall.push({x: i * 2, y: 15});                          
                        }  
                    } else {
                        for (var i = 1; i < 15; i++) 
                            wall.push({x: 30, y: i * 2});
                        for (var i = 0; i < 30; i++)
                            wall.push({x: i * 2, y: 15});                      
                    }
                    drawWall();
                    break; 

                // ------------------------ fase 7 ---------------------
                case 7:
                    if (size_scr_normal) {
                        for (var i = 0; i < 20; i++) {
                            wall.push({x: 5, y: i + 5});
                            wall.push({x: 24, y: i + 5});                          
                        }  
                        for (var i = 0; i < 10; i++) {
                            wall.push({x: 10, y: i + 10});
                            wall.push({x: 19, y: i + 10});                          
                        } 
                        for (var i = 0; i < 20; i++) 
                            wall.push({x: 5 + i, y: 5});
                        for (var i = 0; i < 10; i++) 
                            wall.push({x: 10 + i, y: 20});
                    } else {
                        for (var i = 0; i < 20; i++) {
                            wall.push({x: 10, y: i + 5});
                            wall.push({x: 50, y: i + 5});                          
                        }  
                        for (var i = 0; i < 10; i++) {
                            wall.push({x: 20, y: i + 10});
                            wall.push({x: 39, y: i + 10});                          
                        } 
                        for (var i = 0; i < 40; i++) 
                            wall.push({x: 10 + i, y: 5});
                        for (var i = 0; i < 20; i++) 
                            wall.push({x: 20 + i, y: 20});                    
                    }
                    drawWall();
                    break; 

                default:
                    break;
            }            
        }
    }
}

function drawWall() {
    ctx.fillStyle = 'white';
    for (var i = 0; i < wall.length; i++)
        ctx.fillRect(wall[i].x * size_obj, wall[i].y * size_obj, size_obj, size_obj); 
}