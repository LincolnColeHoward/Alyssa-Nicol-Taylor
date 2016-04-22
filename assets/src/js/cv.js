var cvConfig = null;
//initial code stolen from mozilla!
//thanks!
function runCvConfig () {
	//
	// get the container for the CV
	//
	var container = document.querySelector ("#cvContainer");
	
	// 
	// If absolute URL from the remote server is provided, configure the CORS
	// header on that server.
	//
	var url = "other/CV.pdf";

	//
	// Disable workers to avoid yet another cross-origin issue (workers need
	// the URL of the script to be loaded, and dynamically loading a cross-origin
	// script does not work).
	//
	// PDFJS.disableWorker = true;

	//
	// The workerSrc property shall be specified.
	//
	PDFJS.workerSrc = "build/pdf.worker.js";

	//
	// Asynchronous download PDF
	//
	PDFJS.getDocument (url).then (function getPdfHelloWorld (pdf) {
	  //
	  // Fetch the first page
	  //
	  pdf.getPage (1).then(function getPageHelloWorld (page) {
	    cvConfig = function () {
		    var viewport = page.getViewport (1);
		    var scale = container.clientWidth / viewport.width;
		    var viewport = page.getViewport (scale);
		    //
		    // Prepare canvas using PDF page dimensions
		    //
		    var canvas = document.querySelector ("#CV");
		    var context = canvas.getContext ("2d");
		    canvas.height = viewport.height;
		    canvas.width = viewport.width;
		    //
		    // Render PDF page into canvas context
		    //
		    var renderContext = {
		      canvasContext: context,
		      viewport: viewport
		    };
		    page.render (renderContext);
		 	}
		});
	});
}
runCvConfig ();
// call cvConfig when activating the tab