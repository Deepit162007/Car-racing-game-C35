class Player {
    constructor(){}

    getCount(){
        var playerCountref=database.ref('playerCount')
           playerCountref.on("value",function(data){
            g_playerCount=data.val();
        })
      

    }


    updateCount(count){
        database.ref('/').update({
            playerCount:count 
        });
 
 
     }

    update(name){
        var playerindex="player"+g_playerCount
        database.ref (playerindex).set({
            name:name 
        })



    }






}