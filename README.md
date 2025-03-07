# WhitelistFilter
A simple JavaScript utility for managing and checking whitelisted IPs from a file.

## Installation

Clone the repository and install dependencies if required:

```sh
git clone https://github.com/dev-juri/wlistfilter.git
cd wlistfilter
```

## Usage

### 1. Create an instance of `WhitelistFilter`
```javascript
const WhitelistFilter = require("./WhitelistFilter");

let wlFilter = new WhitelistFilter();
```

### 2. Load the whitelist from a `.txt` file
Use the asynchronous method to read and store the whitelist:

```javascript
await wlFilter.fetchWhitelist("path/to/whitelist.txt");
```

- **Parameters:**  
  - `filePath` *(string)* – Path to the `.txt` file.  
- **Returns:**  
  - A `Set` containing the loaded content.  

### 3. Check if an IP is whitelisted
Verify if an IP address exists in the loaded whitelist:

```javascript
wlFilter.isWhitelisted("192.168.1.1");
```

- **Parameters:**  
  - `ip` *(string)* – The IP address to check.  
- **Returns:**  
  - `true` if the IP exists in the whitelist, otherwise `false`.  

## Example

```javascript
(async () => {
  const wlFilter = new WhitelistFilter();

  await wlFilter.fetchWhitelist("whitelist.txt");

  console.log(wlFilter.isWhitelisted("192.168.1.1")); // true or false
})();
```