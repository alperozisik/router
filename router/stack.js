const Router = require("./router");
const privates = new WeakMap();


class StackRouter extends Router {
    /*
     * @constructor
     * @param {object} options
     * @param {string} [options.mode = "card"] Transtion for router. It can be "card" or "modal". If it is model there will be no headerbar on the page
     * @param {booelan} [options.ios.headerBar.visible = true] Visiblity of the headerbar is managed from here if the mode is "card"
     */
    constructor(options) {
        super(options);
        privates.set(this, {
            mode: options.mode || "card"
        });
    }


    /**
     * Similar to .go method. Each time new instance is created and pushed to the stack
     * @param {*} path 
     * @param {*} data 
     */
    push(path, data = {}) {

    }


    goBack(path = "", data = {}) {

    }

    reset() {

    }

}