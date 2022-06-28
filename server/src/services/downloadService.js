import Downloader from "nodejs-file-downloader"
import fetch from "node-fetch"
import fs from "fs"

export default class downloadService {
	static download = async ({ url }) => {
		let fileName
  		const downloader = new Downloader({
    			url,
    			directory: "./downloads",
    			onProgress: (percentage, remainingSize) => console.log(`${percentage}%`),
    			onBeforeSave: (deducedName) => (fileName = deducedName)
  		})

		await downloader.download()
		console.log("download complete")

		const transfer = await fetch(`https://transfer.sh/${fileName}`, {
      			method: "PUT",
      			body: fs.createReadStream(`./downloads/${fileName}`),
      			redirect: "follow",
    		}).then(res => res.text())

		fs.unlinkSync(`./downloads/${fileName}`)

		const today = new Date();
		const tomorrow = new Date(today);
		tomorrow.setHours(336, 0, 0, 0);

		console.log({ name: fileName, download: transfer, added: today, expires: tomorrow })
 	}
}
