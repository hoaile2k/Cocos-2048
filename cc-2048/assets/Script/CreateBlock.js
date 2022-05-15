const Emitter = require("mEmitter")
const emitName = require("emitName")

cc.Class({
    extends: cc.Component,

    properties: {
        blockPrefab: cc.Prefab,
        _listBlock: [],
        _arrayBlock: [],
    },

    onLoad() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp.bind(this))

        this.evtGenerate = this.generate.bind(this)
        Emitter.instance.registerEvent(emitName.generate, this.evtGenerate)
    },

    start() {
        for (let index = 0; index <= 15; index++) {
            let block = cc.instantiate(this.blockPrefab)
            block.getComponent("block").labelPrefab.string = 0
            block.parent = this.node
            this._arrayBlock.push(block.getComponent("block").labelPrefab.string)
            this._listBlock.push(block)
        }
        this.generate()
        this.generate()
    },
    generate() {
        let randomNumber = Math.floor(Math.random() * this._listBlock.length)
        if (this._arrayBlock[randomNumber]==0) {
            this._arrayBlock[randomNumber] = 2
            this._listBlock[randomNumber].getComponent("block").labelPrefab.string = 2
        } else { this.generate() }
        Emitter.instance.emit(emitName.blockColor, this._listBlock, this._arrayBlock)
    },

    onKeyUp(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.up:
                this.moveUp()
                break;

            case cc.macro.KEY.down:
                this.moveDown()
                break;

            case cc.macro.KEY.left:
                this.moveLeft()
                break;

            case cc.macro.KEY.right:
                this.moveRight()
                break;
        }
    },
    moveUp :function() {
        Emitter.instance.emit(emitName.moveUp, this._listBlock, this._arrayBlock,this.generate)
        // this.generate()
    },
    moveDown :function() {
        Emitter.instance.emit(emitName.moveDown, this._listBlock, this._arrayBlock,this.generate)
        // this.generate()
    },
    moveLeft :function() {
        Emitter.instance.emit(emitName.moveLeft, this._listBlock, this._arrayBlock,this.generate)
        // this.generate()
    },
    moveRight :function() {
        Emitter.instance.emit(emitName.moveRight, this._listBlock, this._arrayBlock,this.generate)
        // this.generate()
    },

    update(dt) {

    },

});
