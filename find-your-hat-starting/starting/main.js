const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field) {
        this._field = field;
        this.currentPos = [0,0];
    }   

    get field() {
        return this._field;
    }

    print(){
       for (let i=0; i<this.field.length; i++){
            console.log(this.field[i].join(''));
        }
    
    }

    playGame(){
         
        this.print();
        while (true) {
            this.move();
        }
        
    }

    move(){
            let direction = prompt('Which way?(U,D,L,R): ');
            if (direction === 'U'){
                this.currentPos[0] -= 1;
            } else if (direction === 'D'){
                this.currentPos[0] += 1;
            } else if (direction === 'L'){
                this.currentPos[1] -= 1;
            } else if (direction === 'R'){
                this.currentPos[1] += 1;
            } else {
                console.log('Invalid direction');
            }

            if(this.currentPos[0] < 0 || this.currentPos[0] >= this.field.length || this.currentPos[1] < 0 || this.currentPos[1] >= this.field[0].length){
                console.log('Out of bounds');
                return;
            }
            this.field[this.currentPos[0]][this.currentPos[1]] = '*';
            this.print();
    }    

    
}
        
        

const myField = new Field([['*', '░', 'O'],['░', 'O', '░'],['░', '^', '░']]);

  myField.playGame();