const express = require("express")

const path = require("path")

const app = express()
const editorRouter = require("./routers/EditorRouter.js")

const { VIEW_PATH } = require("./const.js")

// serve static fiels
app.use("/public", express.static(path.join(__dirname, "../client/public")))
app.use("/scripts", express.static(path.join(__dirname, "../client/public/scripts")))
app.use("/css", express.static(path.join(__dirname, "../client/public/css")))
app.use("/picocss", express.static(path.join(__dirname, "../node_modules/@picocss/pico/css")))

app.get("/", (req, res) => {
    res.sendFile(path.join(VIEW_PATH, "index.html"))
})

app.get("/editors/:name", (req, res) => {
    res.sendFile(path.join(VIEW_PATH, "editor.html"))
})
app.use("/api/editors", editorRouter)


// serve correct view based on url
app.use((req, res) => {
    // 2nd index ignores leading slash
    if (req.url.split("/")[1] !== "api") {
        // serve requested view
        res.sendFile(path.join(VIEW_PATH, `${req.url}.html`), (err) => {
            if (err)
                res.sendFile(path.join(VIEW_PATH, "404.html"))
        })
    }
})

app.listen(3000)
