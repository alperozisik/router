# Special Features
- Tint
- Animation (Bottom Tab)
- Badge

```javascript
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


const cartRouter = new StackRouter({
    routes: [{
        name: "cart",
        target: require("pages/pgCart")
    }, {
        name: "checkout",
        target: require("pages/pgCheckout")
    }]
});

const btbRouter = new BottomTabBarRouter({
    tabs: {
        dashboard: {
            target: dashboardRouter,
            icon: {
                normal: Image.createFromFile("images://dashboard.png");
                active: Image.createFromFile("images://dashboard_active.png");
                focussed: Image.createFromFile("images://dashboard_focussed.png");
            },
            text: "Dashboard",
            font: {
                normal: fontNormal,
                active: fontActive,
                foussed: fontActive
            },
            textColor: {
                normal: Color.BLUE,
                active: Color.RED,
                focussed: Color.GREEN
            },
            badge: { //Optional
                visible: false
            }
        },
        cart: {
            target: dashboardRouter,
            icon: {
                normal: Image.createFromFile("images://cart.png");
                active: Image.createFromFile("images://cart_active.png");
                focussed: Image.createFromFile("images://cart_focussed.png");
            },
            text: "Cart",
            // Some other stuff
            badge: { //They can be manged later over navigation
                backroundColor: Color.RED,
                text: "1",
                textColor: Color.WHITE,
                borderWidth: 2,
                borderColor: Color.WHITE
            }
        }
    },
    tint: {
        normal: Color.GRAY,
        active: Color.BLACK
    }
});
```

Using ths in the pages are explained below:

## pgDashoard
```javascript
function addItemToCart(/*arguments*/) {
    const page = this;

    const cartBadge = 
    page.routing // --> gives access to dashboardRouter
        .routing // --> gives access to btbRouter
        .tabs.cart.badge;
    cartBadge.text = "2";
}

function goToCart() {
    const page = this;

    page.routing.routing.tabs.cart.routing.go("cart"); //Make sure that cartRouter is on the cart page
    page.routing.routing.go("cart");
}

```


# Discussion
- Theming