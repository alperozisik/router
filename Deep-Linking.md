In deep-linking, the URL designed for the WebSite. App needs to resolve the URL and needs to redirect to the corresponding page.
Assume that app is associated with `www.example.com` domain. Anything past the host parth of the URL should be able to passed to the royter.
- `http://www.example.com/` → `"/"`
- `http://www.example.com/products` → `"/products"`
- `http://www.example.com/products?color=black` → `"/products?color=black"`
- `http://www.example.com/products/1234` → `"/products/1234"`

In order to understand the setup, please first review the code in [Shopping example](./Shopping.md).  
In order to understand URI structure, please first review the [Path guide](./Path.md).

In the event for handling the deeplinking, the URL is retrieved. If the URL is the full URL, than **trimming** the **pre-path** is required. The rest of the URL can be passed to the `Application.router.go` as is.