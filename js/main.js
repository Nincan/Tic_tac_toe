import Game from "./game.js";
//import Gameview from "./gameview.js";

let game = new Game();

document.getElementById("app").innerHTML =  `
         <div class="header">
                <div class="turn">X's Turn</div>

                <div class="status">In Progress</div>

                 <button type="button" class="refresh">refresh</button>
        </div>
        <div class="grid">
            <div class="tiles" data-index="0"></div>
            <div class="tiles" data-index="1"></div>
            <div class="tiles" data-index="2"></div>
            <div class="tiles" data-index="3"></div>
            <div class="tiles" data-index="4"></div>
            <div class="tiles" data-index="5"></div>
            <div class="tiles" data-index="6"></div>
            <div class="tiles" data-index="7"></div>
            <div class="tiles" data-index="8"></div>

        </div>
            `;
            function update(game){
                updateturn(game);
                updatestatus(game);
                updateboard(game);
    
            }
            function updateturn(game){
                document.getElementById("app").querySelector(".turn").innerHTML=`${game.turn}'s turn`;
            }
            function updatestatus(game){
                let status="In Progress";
                if(game.comb()){
                    status=`${game.turn} is the winner`;
                }
                else if(!game.progress()){
                   status="It's a tie";
                }
                document.getElementById("app").querySelector(".status").innerHTML=status;
            }
        function updateboard(game){
            for(let i=0;i<game.board.length;i++){
                var tile=document.getElementById("app").querySelector(`.tiles[data-index="${i}"]`)
                tile.textContent=game.board[i];
            }
        }
        function onTileClick(i){
           game.play(i);
           update(game);
        }
        function onRestartclick(){
            game=new Game();
            update(game);
        }
        document.getElementById("app").querySelectorAll(".tiles").forEach(tile => {
            tile.addEventListener("click",() =>{
                if(onTileClick){
                    onTileClick(tile.dataset.index);
                    
                }
            });
        }); 
        document.getElementById("app").querySelector(".refresh").addEventListener("click",()=>{
            if(onRestartclick){
                onRestartclick();
            }
        })
        
       
  