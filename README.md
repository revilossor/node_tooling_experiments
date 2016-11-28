## some experiments around node tooling
---
start debugger : ``` npm run start-debug ```

attach to debugger : ``` npm run attach-debug ```

start chrome debugger : ``` npm run chrome-debug ```

run newman REST tests : ``` npm run test-rest ```

run jest unit tests : ``` npm run test-unit```

run all tests : ``` npm test ```

---

### Newman REST tests

Newman can be used to run postman collections, which will call each API endpoint in turn and do assertions on the responses. You will need to install newman globally with ``` npm i newman -g ```

The calls and the assertions are set up in [postman](https://www.getpostman.com/), then exported to a file ('node_debug.postman_collection') which should be placed in newman/

### Jest unit tests

[Jest](https://www.npmjs.com/package/jest-cli) is used to run unit tests. Code coverage reports will be generated in coverage/

 ---
### TODO

 - handle no arguments passed - in calc and calcEndpoint
  - rest tests
  - unit tests
 - a frontend
  - in react?
  - acceptance tests?
