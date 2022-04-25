const { append } = require("express/lib/response");

const port = 8000;
app.listen(port, () => {
    console.log("We are live on " + port);
});