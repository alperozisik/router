const privates = new WeakMap();
const mixin = require('mixin-deep');

class Router {
    constructor(options) {
        privates.set(this, {

        });
    }


    /*
     * Goes to the target. If the intance is not created it is being created and reused in the future
     * @method
     * @param {string} path
     * @param {object} [data = {}]
     */
    go(path, data = {}) {
        let p = privates.get(this);

        let pathData = this.getData(path);
        let targetData = mixin(data, pathData);

        let transtitionOptions = { /* default transtition options */ };

        let routingOptions = { path, data: targetData, transtitionOptions };
        if (this instanceof StackRouter) //will be checked differently
            routingOptions.stack = [ /* stack of the routing */ ];

        let result = this.onBeforeRoute(routingOptions);
        if (result === false)
            return;

        let target = { /* either page or other router  */ }; //crateTarget(routingOptions.path)

        target.routing = { /* routing information */ };

        //Go to the target


    }

    /*
     * @event
     * 
     * @returns the transtition options
     */
    onBeforeRoute(routingOptions) {
        routingOptions.path = "pgLogin"; //can change the name of the path
        routingOptions.data.x = 4; //can alter the data
        transtitionOptions.direction = "left to right"; //whatever the options
    }

    /*
     * @method
     * @param {string} path
     * @param {object} data = {}
     */
    setData(path, data) {

    }

    /*
     * @method
     * @param {string} path
     */
    getData(path) {

    }

    get currentItem() {
        return { /*  Instance */ };
    }

    get currentPath() {
        return "name of the path";
    }

    /**
     * @returns {[string]} array of paths or tab names in order
     */
    getPaths() {

    }
}