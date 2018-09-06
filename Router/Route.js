class Route {
  constructor(path, component){
    this._path = path;
    this._component = component;
  }

  isAccessable(path) {
    return path === this._path;
  }

  map(fn) {
    fn(this._component);
  }

  getRouteData() {
    return parsePath();
  }
}
