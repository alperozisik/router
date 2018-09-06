const Route = require("Route");

/**
 * Manages route by the rule
 */
class RuleRoute extends Route {
  static defer(rule){
    return (route) => new RuleRoute(rule, route);
  }

  constructor(rule, route){
    this._route = route;
    this._rule = rule;
  }

  isAccessable(path){
    return this._rule(parsePath(path)) && this._route.isAccessable(path);
  }

  getRouteData(){
    return parsePath();
  }
}
