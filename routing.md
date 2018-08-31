# routing property
Before every target is shown, `routing` property is assigned by the router.

# routing features
Except every feature defined below goes to the owner router. Features defined below are shadowing the properties of the owner router.
```javascript
page.routing.go("page2"); //this will be the router.go

console.log(page.routing.absolutePath); //this will be the overridden (shadowed) property from the routing
```
Following properties are the properties of the routing:
- getData
- setData
- absolutePath
- path
- stack

## absolutePath
Absolute full path of the routed item. Does not include any _URI query_ or _URI hash_ values if the target is not a page.
## path
Path relative to the absolute path of the owner router. Does not include any _URI query_ or _URI hash_ values if the target is not a page.

## getData
This is a special bound version of the [Router.getData](./RouterCommon.md#getData). 
This can get all of the _URI_ parameter values. `absolutePath` is not to be given while calling the function.

For more information please refer to the [data](./data.md) guide
## setData
This is a special bound version of the [Router.setData](./RouterCommon.md#setData). `absolutePath` is not to be given while calling the function. 

For more information please refer to the [data](./data.md) guide

## stack
If the owner router is not a tab router, stack property will be present (not `undefined`). Stack is an `array` containing all paths (relative to the router) including _URI path_ values. First item of the stack, is the first item of the array. By definition, last item in the array (stack) is same as the `path` property

# Deciding the same path or not
If the `go("path")` contains some elements, it is considered same path or not.
- Same constant values makes it same path
- Same _URI path_ values makes it same path
- _URI query_ and _URI hash_ values not taken into account

Example:
- A path is defined: `"user/:userId"`
- `router.go("user/123")` will go to `instace X`
- `router.go("user/456")` will go to `instace Y`
- `router.go("user/123?name=alper")` will go to `instace X`

## Using push
If `router.push` is used instead of `router.go` this **same path check** will not take place.
- `router.push("user/123")` will go to `instace X`
- `router.push("user/456")` will go to `instace Y`
- `router.push("user/123?name=alper")` will go to `instace Z`