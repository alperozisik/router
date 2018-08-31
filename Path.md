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

# Relativity

# Parameters

# Path Parameter

# Query Parameter

# Hash Parameter