export default class game{
    constructor(){
        this.board=new Array(9).fill(null);
        this.turn='X';
    }
    play(k){
        if(!this.progress()){
            return;
        }
        if(this.board[k])
            return;
        else
            this.board[k]=this.turn;
        if(!this.comb()){
            if(this.turn=='X')
                this.turn='O';
            else
                this.turn='X';
        }
    
    }
    comb(){
        const win= [
            [0,1,2],[3,4,5],[6,7,8],[0,3,6],
            [1,4,7],[2,5,8],[0,4,8],[2,4,6],
        ]
        for (const z of win){
            var [p, q, r]=z;
                
                if(this.board[p]===this.board[q] && this.board[q]===this.board[r] && this.board[p]){
                    return z;
                }
        }
        return null;
    }   

    progress(){
        return !this.comb() && this.board.includes(null);
    }
}
