All type of routers have following features:
- constructor setup
- navigate (or go)
- Routing events
- They can be added to another router
- They can have targets as:
    - A page instance
    - A pace class
    - Another router
    - **Discussion** page path (for on-demand-loading)
- Set the target navigation property as they navigate into.
- Routing events are used for the animation of the change
- each navigation event has following features:
    - target path
    - if possible navigation stack
    - or if possible where it is coming from

There is no single router object that all paths must be applied in to. So the `/` character looses its meaning.