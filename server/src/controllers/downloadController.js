import { downloadService } from "../services";

export default new (class downloadController {
  	download = async (request, response) => {
    		try {
     			downloadService.download(request.body);
      			response.sendStatus(201)
    		} catch (error) {
      			response.sendStatus(500);
    		}
  	};
})();
