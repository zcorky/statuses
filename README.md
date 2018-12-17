# statuses

[![NPM version](https://img.shields.io/npm/v/@zcorky/statuses.svg?style=flat)](https://www.npmjs.com/package/@zcorky/statuses)
[![Coverage Status](https://img.shields.io/coveralls/zcorky/statuses.svg?style=flat)](https://coveralls.io/r/zcorky/statuses)
[![Dependencies](https://david-dm.org/@zcorky/statuses/status.svg)](https://david-dm.org/@zcorky/statuses)
[![Build Status](https://travis-ci.com/zcorky/statuses.svg?branch=master)](https://travis-ci.com/zcorky/statuses)
![license](https://img.shields.io/github/license/zcorky/statuses.svg)
[![issues](https://img.shields.io/github/issues/zcorky/statuses.svg)](https://github.com/zcorky/statuses/issues)

* HTTP status utility with typescript

* This module provides a list of status codes and messages sourced from
a few different projects:
  * The [IANA Status Code Registry](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml)
  * The [Node.js project](https://nodejs.org/)
  * The [NGINX project](https://www.nginx.com/)
  * The [Apache HTTP Server project](https://httpd.apache.org/)

## Install

```
$ npm install @zcorky/statuses
```

## Usage

```js
// see more in test
// typescript
import status, { isRedirect, isEmpty, isRetry } from '@zcorky/statuses';

// status
status(403) // => 403
status('403') // => 403
status('Forbidden') // => 403
status(306) // throws, as it's not supported by node.js

// status codes for redirects
// 300, 301, 302, 303, 305, 307, 308
isRedirect(300); // => true

// status codes for empty bodies
// 204, 205, 304
isEmpty(204); // => true

// status codes for when you should retry the request
// 502, 503, 504
isRetry(502); // => true 
```

### Relatived
* [statuses](https://github.com/jshttp/statuses) - HTTP status utility for node.

## License

MIT © [Moeover](https://moeover.com)
