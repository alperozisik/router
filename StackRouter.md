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