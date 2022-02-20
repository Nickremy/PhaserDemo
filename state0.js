var demo = ();
demo.state0 = function(){};
demo.state0.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#80ff80';
        console.log('state0');
        game.input.Keyboard.addKey(Phaser.Keyboard.ONE).onDown.add(changeState, null, null, 1);     
    },
    update: function(){}
};

function changeState(stateNum) {
    game.state.start('state' + stateNum):
}