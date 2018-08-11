var loginPageRoute = new Route("login", "login-page"); 
var userProfileRoute = new Route("user/:name/profile", "home-page");
var checkLoginRule = RuleRoute.defer((routeData) => UserService.isLoggedin());
var checkLoginRoute = checkLoginRoute(userProfileRoute);
var checkLoginMaybe = new RouteMaybe(checkLoginRoute, loginPageRoute);

var components = [
  // ---->
  "login-page", 
  (routeData) => require("login-page"),
  // ---->
  "home-page", 
  (routeData) => require("home-page"),
  // ---->
  "user-settings", 
  (routeData) => require("user-settings-page"),
  // ---->
  "user-profile", 
  (routeData) => require("user-profile-page"),
  // ---->
  "user-permissions", 
  (routeData) => require("user-permissions-page")
];

var stackRoot = new Route("user", "user-dashboard");
var userSettings = new Route("user/settings", "user-settings");
var userPremissions = new Route("user/settings/permissions", "user-permissions");
var userProfile = new Route("user/profile", "user-profile");

Router.use(stackRoot, userSettings, userPremissions, userProfile);
// register page components
Router.register(components);

// register routes
Router.use(checkLoginMaybe);

//adds new middleware
Router.use({
  provide: (routeData, transition, next) => {
    if (routeData.path.indexOf("user/") === 0 && UserService.getUserRole() === 'admin') {
      routeData.path = "/user/admin/home";
    }

    next();
  }
});

// into user settings page
// if calls 'user' route then inject stackrouter to page automatically 
// ...

var button = new Button();
button.onClick = () => page.router.navigate("/permissions");

// ...

button.onClick = () => page.router.navigate("user/settings/permissions");

