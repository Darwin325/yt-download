const express = require("express")
const app = express()
const port = 3000
const { downloadVideo, getInformation } = require("./downloader.js")
//https://youtu.be/MwpMEbgC7DA?si=CIdssvwwY-ui7oHa
app.get("/download", async (req, res) => {
   console.log("A request has been received")
   const url = req.query.url
   const { title } = await getInformation(url)
   res.json({ title }).status(200)
})

app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`)
})
