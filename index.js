
const express = require('express')
var app = express();
var http = require('http').createServer(app);

app.use(express.json()); 
app.use(express.urlencoded()); 

app.post('/print', (req, res)=>{
    try {
        const escpos = require('escpos')
        escpos.USB = require('escpos-usb')
        const device = new escpos.USB();
        const options = { encoding: "GB18030" }
        const printer = new escpos.Printer(device, options)

        const {msg, date} = req.body

        device.open(()=>{
            printer
                .font('b')
                .align('lt')
                .text('__________________________________________')
                // .text('.......................................')
                // .text('***************************************')
                .text(msg)
                .align('ct')
                .text(date)
                .close();
        });
        res.send('ok')
    }catch(e) {
        res.status(400).send({error: e.stack})
    }
})

app.listen(3001, ()=>console.log('listening http at port 3001'))