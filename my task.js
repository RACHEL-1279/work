const express = require('express');
const app = express();
const port = 3000;
app.get('/',(req,res)=>{
    res.send('hellow from express');
});
app.listen( port,()=>{
    console.log('our server is running on', port);
});

