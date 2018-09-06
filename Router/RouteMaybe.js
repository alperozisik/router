const Route = require("Route");

/**
 * If route is failed and then it runs other route
 */
class RouteMaybe extends Route {
  constructor(route, notRoute) {
    this._route = route;
    this._notRoute = notRoute;
    this.__route = route;
  }

  isAccessable(path) {
    !this._route.isAccessable(path) || (!this._notRoute.isAccessable(path)(this.__route = this._notRoute));

    return true;
  }

  map(fn){
    fn(this.__route.getComponent());
  }

  getRouteData() {
    return parsePath();
  }
}
