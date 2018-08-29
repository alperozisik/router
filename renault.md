This is the use case for router in Renault Project RS

```javascript
const Application = require("sf-core/application");
const StackRouter = require("sf-core/router/stack");
const BottomTabBarRouter = require("sf-core/router/bottomtabbar");

const StackRouter = require("sf-core/router/stack");
const Image = require('sf-core/ui/image');
const Font = require('sf-core/ui/font');
const Color = require('sf-core/ui/color');


const fontNormal = Font.create("Default", 14, Font.NORMAL);
const fontActive = 
Font.create("Default", 16, Font.BOLD);

const dashboardRouter = new StackRouter({
    routes: [{
        name: "dashboard",
        target: require("pages/pgDashboard")
    }, {
        name: "addVehicle",
        target: require("pages/pgAddVehicle")
    }]
});


const dealersRouter = new StackRouter({
    routes: [{
        name: "cart",
        target: require("pages/dealers")
    }
});

const tabRouter = new BottomTabBarRouter({
    tabs: {
        dashboard: {
            target: dashboardRouter,
            icon: {
                normal: Image.createFromFile("images://dashboard.png");
                active: Image.createFromFile("images://dashboard_active.png");
                focussed: Image.createFromFile("images://dashboard_focussed.png");
            },
            text: "Dashboard"
        },
        dealers: {
            target: dealersRouter,
            icon: {
                normal: Image.createFromFile("images://dealers.png");
                active: Image.createFromFile("images://dealers_active.png");
                focussed: Image.createFromFile("images://dealers_focussed.png");
            },
            text: "Dealers"
        }
    },
    tint: {
        normal: Color.GRAY,
        active: Color.BLACK
    }
});


const mainRouter = new StackRouter({
initialRoute:  userLoggedIn? "tabs": "pgPhoneEntry",
    routes: [{
        name: "pgPhoneEntry",
        target: pgPhoneEntry
    }, {
        name: "pgSMS",
        target: pgSMS
    }, {
        name: "tabs",
        target: tabRouter
    }]
});


const loginRouter = new StackRouter({
    initialRoute: "pgPhoneEntry",
    routes: [{
        name: "pgPhoneEntry",
        target: pgPhoneEntry
    }, {
        name: "pgSMS",
        target: pgSMS
    }]
});




const rootRouter = new StackRouter({
    initialRoute: "main",
    routes: [{
        name: "main",
        target: mainRouter
    }, {
        name: "login",
        target: loginRouter
    }],
    mode: "modal"
});
Application.setupRouter(rootRouter);

```

If user has skipped the login and needs to login as a modal:
```javascript
rootRouter.go("login");
```