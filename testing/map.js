

export class Map{

    constructor(){
        this.cols = 12
        this.rows = 12
        this.tileSize = 64

        this.image = document.getElementById("tilemap") 
        this.image_tile = 32
        this.image_cols = this.image.width / this.image_tile

       this.layers = [[
            18,18,18,18,18,18,18,18,18,18,18,18,
            18,1,2,2,2,2,2,2,2,2,3,18,
            18,6,7,7,7,7,7,7,7,7,8,18,
            18,6,7,7,7,7,7,7,7,7,8,18,
            18,6,7,16,12,12,12,12,12,17,8,18,
            18,6,7,8,18,18,18,18,18,6,8,18,
            18,6,7,8,18,18,18,18,18,6,8,18,
            18,6,7,21,2,2,2,3,18,6,8,18,
            18,6,7,7,7,7,7,8,18,6,8,18,
            18,6,7,7,7,7,7,21,2,22,8,18,
            18,11,12,12,12,12,12,12,12,12,13,18,
            18,18,18,18,18,18,18,18,18,18,18,18,
       ],[
        19,19,19,19,19,19,19,19,19,19,19,19,
        0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,14,0,0,0,24,0,0,0,
        0,0,0,0,19,0,0,0,0,0,0,0,
        5,0,0,0,0,24,0,0,5,0,0,0,
        10,0,0,0,0,0,0,0,10,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,
        5,5,5,5,5,5,5,5,5,5,5,5,
        10,10,10,10,10,10,10,10,10,10,10,10,
       ]]
        
         
           

        }

        getTile(layer,col,row){
            return this.layers[layer][row * this.cols +col ]

        }
       
   
    }