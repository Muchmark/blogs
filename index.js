const jsonServer =require('json-server');
//const { default: App } = require('../frontend/src/App');
const server=jsonServer.create();
const router=jsonServer.router('db.json')
const middlewears=jsonServer.defaults();
const port=process.env.PORT || 3030

server.use(middlewears)
server.use(router)
server.listen(port,(req,res)=>{
    console.log(`app is listening ${port}`)
})