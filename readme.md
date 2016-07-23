# caesar-shift [![Build Status](https://travis-ci.org/jasonbellamy/caesar-shift.svg)](https://travis-ci.org/jasonbellamy/caesar-shift)

> A functional JavaScript implementation of the Caesar cipher


## Getting Started

- Install with [NPM](https://www.npmjs.org/) - `npm install --save caesar-shift`


## Usage

```javascript
import { encrypt, decrypt } from 'caesar-shift';

// Encrypt a message
encrypt(6, 'My dogs name is Nico!'); //=> Se jumy tgsk oy Toiu!

// Decrypt a message
decrypt(6, 'Se jumy tgsk oy Toiu!'); //=> My dogs name is Nico!
```


#API

### encrypt( key, message )

Name    | Type     | Argument     | Default | Description
--------|----------|--------------|---------|------------
key     | `number` | `<required>` | `null`  | the key to encrypt the message with
message | `string` | `<required>` | `null`  | the message to encrypt

### decrypt( key, message )

Name    | Type     | Argument     | Default | Description
--------|----------|--------------|---------|------------
key     | `number` | `<required>` | `null`  | the key to decrypt the message with
message | `string` | `<required>` | `null`  | the encrpyted message to decrypt


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality.


## License
Copyright (c) 2016 [Jason Bellamy ](http://jasonbellamy.com)  
Licensed under the MIT license.
