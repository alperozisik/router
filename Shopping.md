In a shopping app, like creating restFul API paths, paths of the app can be created accordingly.

```javascript
const Application = require("sf-core/application");
const StackRouter = require("sf-core/router/stack");
const ModalRouter = require("sf-core/router/modal")
const BottomTabBarRouter = require("sf-core/router/bottomtabbar");

const itemsRouter = new StackRouter({
    initialPath: "showcase",
    routes: [{
        path: "showcase",
        target: "pages/pgShowcase"
    }, {
        path: "category/:categoryId",
        target: "pages/pgCategoryLanding"
    }, {
        path: "category/:categoryId/all",
        target: "pages/pgProductListing"
    }, {
        path: "product",
        target: "pages/pgProductListing"
    }, {
        path: "product/:productId",
        target: "pages/productDetails"
    }]
});

const checkoutRouter = new StackRouter({
    initialPath: "",
    routes: [{
        path: "cart",
        target: "pages/pgCart"
    }, {
        path: "checkout",
        target: "pages/pgCheckout"
    }, {
        path: "shipping",
        target: "pages/pgShipping"
    }, {
        path: "payment",
        target: "pages/pgPayment"
    }, {
        path: "summary",
        target: "pages/pgSummary"
    }, {
        path: "result",
        target: "pages/pgResult"
    }]
});

const btbRouter = new BottomTabBarRouter({
    tabs: [{
        path: "items",
        target: itemsRouter
    }, {
        path: "cart",
        target: checkoutRouter
    }]
});

const addressRouter = new StackRouter({
    initialPath: "all",
    routes: [{
        path: "list",
        target: "pages/pgAddressList"
    }, {
        path: "add",
        target: "pages/pgEditAddress",
        data: {
            editType: "new"
        }
    }, {
        path: "edit/:addressId",
        target: "pages/pgEditAddress",
        data: {
            editType: "edit"
        }
    }, {
        path: "details/:addressId",
        target: "pages/pgDisplayAddress"
    }]
})

const rootRouter = new ModalRouter({
    initialPath: "tabs",
    routes: [{
        path: "tabs",
        target: btbRouter
    }, {
        path: "login",
        target: "pages/pgLogin"
    }, {
        path: "address",
        target: addressRouter
    }]
});

Application.setupRouter(rootRouter);
```