## some experiments around node tooling
---
start debugger : ``` npm run start-debug ```

attach to debugger : ``` npm run attach-debug ```

start chrome debugger : ``` npm run chrome-debug ```

run newman tests : ``` npm run test-newman ```

---

### Newman REST tests

Newman can be used to run postman collections, which will call each API endpoint in turn and do assertions on the responses. You will need to install newman globally with ``` npm i newman -g ```

The calls and the assertions are set up in [postman](https://www.getpostman.com/), then exported to a file ('node_debug.postman_collection') which should be placed in newman/
