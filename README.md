# ez-node-db

Dead simple JSON database for Node.js.

## Installation

Clone and use, will upload to [npm](https://pip.pypa.io/en/stable/) at a later date.

```bash
git clone https://github.com/BrettSGA/ez-node-db
```

## Usage

```javascript
const NodeDB = require('nodeDB');

# Initialize:
const db = new NodeDB('database_name');

# Set:
db.set('key', 'value');

# Get:
db.get('key');

# Delete:
db.delete('key');

# Easy.
```



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[MIT](https://choosealicense.com/licenses/mit/)