# Path
Path is a sort of a [URI](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier) (Uniform Resource Identifier).


<pre>
          userinfo     host        port
          ┌─┴────┐ ┌────┴────────┐ ┌┴┐ 
  https://john.doe@www.example.com:123/forum/questions/?tag=networking&order=newest#top
  └─┬─┘ └───────┬────────────────────┘└─┬─────────────┘└──┬───────────────────────┘└┬─┘  
  scheme     authority                 path              query                      fragment
</pre>
It contains the parts:
- path (must)
- query (optional)
- fragment (optional) _also refered as hash_

The parts before the _URI path_ are not be part the **path**.

Providing an invalid path format while creating the router should cause `Error("Invalid path")`

## Limits of definition
Following examples are valid for defining the paths:
```
resource
resource/path
resource/:pathParam
resource/path/:pathParam
resource/:pathParam/path
resource/:pathParam1/:pathParam2
resource/path1/path2
```

- Cannot have references to to root, starting with slash `/`
- Cannot have references to the parent, starting with or containing dot dot slash `../`
- Cannot have references to the current, starting with or containing dot slash `./`
- Cannot have references to scheme, containing double slashes `//`
- Can define some paths as a path variable, starting with column `:` after path separator slash `/`
    - Otherwise using of column `:` is prohibited
- Cannot contain query `?`, `;`, `&` or hash `#`
- Cannot contain `[`, `]`, `@`, `!`, `$`, `'`, `(`, `)`, `*`, `+`, `,`, `=`
## Limits of Calling
Following examples are valid for calling:
```
/path/resource
path/resource
/path/resource
../resource
./resource
resource
```

- Cannot have references to scheme, containing double slashes `//`

# Relativity

# Parameters

# Path Parameter

# Query Parameter

# Hash Parameter