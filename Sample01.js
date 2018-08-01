const Application = require("sf-core/application");
const StackRouter = require("sf-core/router/stack");
const mainRouter = new StackRouter({
    initialRoute: "page1", //optional
    routes: [{
        name: "page1",
        target: require("pages/page1")
    }, {
        name: "page2",
        target: require("pages/page2")
    }]
});
Application.setupRouter(mainRouter);