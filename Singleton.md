A singleton page is reused all the time. In normal cases, a new instance is created unless an instnace is given.

# Instance singleton

```javascript
const Application = require("sf-core/application");
const StackRouter = require("sf-core/router/stack");
const Page2 = require("pages/page2");
const page2 = new Page2();
const mainRouter = new StackRouter({
    initialPath: "page1",
    routes: [{
        path: "page1",
        target: "pages/page1"
    }, {
        path: "page2",
        target: page2
    }]
});
Application.setupRouter(mainRouter);
```

The downside of this approach is, `page2` is created at the beginning; it is not lazy loaded as `page1`

# On-demand singleton
This is the recommended version of using singleton pages

```javascript
const Application = require("sf-core/application");
const StackRouter = require("sf-core/router/stack");

const mainRouter = (function() { //immediate pattern to hide internal variables
    const Page2 = require("pages/page2");
    var page2;
    return new StackRouter({
        initialPath: "page1",
        routes: [{
            path: "page1",
            target: "pages/page1"
        }, {
            path: "page2",
            target: () => {
                if (!page2)
                    page2 = new Page2();
                return page2;
            }
        }]
    });
})();
Application.setupRouter(mainRouter);
```