const Colors = require("color");
cc.Class({
    extends: cc.Component,

    properties: {
        blockPrefab: cc.Prefab,
    },

    // onLoad () {},

    start () {
        for(let index = 0; index<=15; index++){
            let x = Math.floor(index/4) 
            let y = index % 4
            let block = cc.instantiate(this.blockPrefab)
            //let label =
            cc.log(block.getComponent("block").labelPrefab.string)
            block.getComponent("block").labelPrefab.string = 0
            block.parent = this.node
            block.x = x * 160
            block.y = y * 160
        }
    },

    update (dt) {
        
    },

});
