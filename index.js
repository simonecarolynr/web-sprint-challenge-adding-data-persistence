const server = require("./server")

server.get('/', (req, res) => {
    res.json({
        message: "Hello from the index file!"
    })
})

server.listen(4040, () => {
    console.log("Listening on port 5000")
})