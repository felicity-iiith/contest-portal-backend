# Backend

This was built with node and koajs (modern alternative for express)

## Installation

- Enter the directory.
- Installing yarn package manager : https://yarnpkg.com/en/docs/install
- We need node version greater than 8. If your distro does not provide that, you can use nvm to install it
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
source ~/.bashrc
nvm install node
source ~/.bashrc
```
- Installing dependencies:
```
yarn install
```

## Starting backend dev server

This is the dev server which will auto refresh when you edit any file

Open a new window in your Terminal.
Enter the directory.
```
yarn watch
```

## Technologies used / docs for reference
- [koajs](http://koajs.com/)
- [sequelize](http://docs.sequelizejs.com/)
- [koa-joi-router](https://github.com/koajs/joi-router) and [joi](https://github.com/hapijs/joi)
- Postman for debugging ([see these videos](https://www.getpostman.com/support))
