All type of routers have following features:
- constructor setup
- go
- Routing events
- They can be added to another router
- They can have targets as:
    - static path to the page
    - A pace class
    - Another router
- Set the target routing property as they route into.
- Routing events are used for the animation of the change
- each routing event has following features:
    - target path
    - if possible routing stack
    - or if possible where it is coming from

There is no single router object that all paths must be applied in to. So the `/` character looses its meaning.