### Nodejs Express Webserver to print with thermal printer

FOR SOME REASON THE LIBRARY THAT I'M USING JUST WORKS IF
> 1 - YOU COMMENT INSIDE THE /node_modules/escpos/statuses.js THIS THREE LINES:
```
 // byte = '';
 // bits = [];
 // bitsAsc = [];
```
> 2 - EXECUTE THIS CODE AS `SUDO` even if you're using `PM2`

### 🚩 Routes

##### http://localhost:3000/print
> Send a POST request to this route with the following body:
 ```
 {
    msg: 'Message Test'
    date: 'DD-MM-YYYY'
 }
```
### 🖨️ Printed demo
<img src="https://github.com/sostenesapollo/thermal-printer-server/blob/master/static/example.jpeg?raw=true" alt="drawing" style="width:200px;"/>