const ytdl = require("ytdl-core")
const fs = require("fs")

// URL del video de YouTube que deseas descargar
// const videoUrl = "https://youtu.be/MwpMEbgC7DA?si=CIdssvwwY-ui7oHa"

// Opciones de descarga (formato de audio mp3)
const options = {
   quality: "highestaudio",
   filter: "audioonly",
   format: "mp3",
}

// Función para descargar el video
async function getInformation(videoUrl) {
   const info = await ytdl.getInfo(videoUrl)
   const title = info.videoDetails.title
   return { title }
}
async function downloadVideo(videoUrl) {
   try {
      //   ytdl(videoUrl, options)
      //      .pipe(fs.createWriteStream(`${title}.mp3`))
      //      .on("finish", () => {
      //         console.log(`Descarga completa: ${title}.mp3`)
      //      })
   } catch (error) {
      console.error("Error al descargar el video:", error)
   }
}
module.exports = { downloadVideo, getInformation }
