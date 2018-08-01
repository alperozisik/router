# Smartface New Router

## Simple usage
This explains how to use router at very basic level
### Initiation
This happens in `app.js`
```javascript
const Application = require("sf-core/application");
const StackRouter = require("sf-core/router/stack");
const mainRouter = new StackRouter({
    routes: [{
        name: "page1",
        target: require("pages/page1")
    }, {
        name: "page2",
        target: require("pages/page2")
    }]
});
Application.setupRouter(mainRouter);
```

### Basic navigation
This happens in `page1.js`
```javascript
btn.onPress = ()=> page.navigation.navigate("page2");
```

## Types of Routers
There are 2 types of routers
- Stack
- BottomTabBar

SliderDrawer is a part of the application
Stack Router handles both push and present actions based on the initiation parameter.

**TODO:** Discusss SwipeView

## Common features of Routers
- Configured with constructors
- Initial paths
- paths
    - are defined during constructor **Discussion:** or can be added later
    - can have one of the following targets
        - a Page Class
        - a Page Instance
        - another router
- Affect the target as they are navigating into
- Having events and callback behavioral properties
- iOS version has an effect on NavigationBar (HeaderBar)
- Can be reset, purged, disposed

# Application
Application needs to start with a router. This is is done by setting up a router to the applicaiton.
`Application.setupRouter` method is to be developed for this.
This method takes an instance of a Router.
This method can be only called once. Otherwise it will throw an Error.

Splash screen should not be hidden before this method is called. Splash should wait the rendering of the initial screen

# Stack Router
Change the initial page of the router

```javascript
const Application = require("sf-core/application");
const StackRouter = require("sf-core/router/stack");
const mainRouter = new StackRouter({
    initialRoute: "page1", //optional, if not provided first element of the routes will be used
    routes: [{
        name: "page1",
        target: require("pages/page1")
    }, {
        name: "page2",
        target: require("pages/page2")
    }]
});
Application.setupRouter(mainRouter);
```

# BottomTabBar Router
da

# SliderDrawer