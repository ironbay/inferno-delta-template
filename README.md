## Inferno Delta Template
This is an implementation of the Interceptor Pattern for building frontend applications that integrate with Delta - a realtime, programmable database. Included is a minimal framework that automatically syncs state between the server and client in realtime via websocket. This eliminates the need to write any code typically associated with fetching data from the backend and maintaining a local state (bye bye reducers and dispatchers). All you have to do is build the UI and make it look awesome

### Usage
This project uses Webpack for managing the build pipeline

#### Debug
This starts a Webpack development server on `http://localhost:8080` Changes made to the source will be automatically reloaded
```
npm run debug
```

#### Build
Builds the project to `./build`
```
npm run build
```

### Getting Started
TODO
