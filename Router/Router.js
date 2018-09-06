const Route = require("./Route");

const routes = new WeakSet();
const middlewares = new WeakSet();

const resolveMiddleware = (mw) => {
  
}

class Router {
  static register(){

  }

  static use(val){
    if(val instanceof Route){
      routes.add(val);
    } else if(typeof val === "object" && val.hasOwnProperty("provide")) {
      resolveMiddleware(val);
    }
  }
}

module.export = Router;
