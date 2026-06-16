const express = require("express")

const editorRouter = express.Router()

const { getAll, getFirstByName } = require("../models/EditorModel.js")



editorRouter.get("/", async (req, res) => {
    const data = await getAll()
    res.json(data)
})


editorRouter.get("/:name", async (req, res, next) => {
    const editorName = req.params.name

    try {
        const editorData = await getFirstByName(editorName)
        res.json(editorData)
    } catch (err) {
        const statusCode = err.status ?? 500
        if (statusCode === 404) {
            //go to catchall
            next()
            return
        }
        res.status(statusCode).send(err.message)
    }

})


module.exports = editorRouter
