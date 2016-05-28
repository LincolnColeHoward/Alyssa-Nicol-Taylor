var cvConfig = function () {
	this.one ();
	this.two ();
}
window.addEventListener ("resize", cvConfig, false);
//initial code stolen from mozilla!
//thanks!
function runCvConfig () {
	document.querySelector ("#cvDownload").onclick = function () {
		// ga('send', 'event', 'CV', 'download', "CV.pdf");
	};
	//
	// get the container for the CV
	//
	var container = document.querySelector ("#cvContainer");
	var canvas1 = document.querySelector ("#CV1");
	var context1 = canvas1.getContext ("2d");
	var canvas2 = document.querySelector ("#CV2");
	var context2 = canvas2.getContext ("2d");
	// 
	// If absolute URL from the remote server is provided, configure the CORS
	// header on that server.
	//
	var url = "CV.pdf";

	//
	// Disable workers to avoid yet another cross-origin issue (workers need
	// the URL of the script to be loaded, and dynamically loading a cross-origin
	// script does not work).
	//
	// PDFJS.disableWorker = true;

	//
	// The workerSrc property shall be specified.
	//
	PDFJS.workerSrc = "pdf.worker.js";

	//
	// Asynchronous download PDF
	//
	PDFJS.getDocument (url).then (function (pdf) {
	  //
	  // Fetch the first page
	  //
	  pdf.getPage (1).then(function (page) {
	    cvConfig.one = function () {
		    var viewport = page.getViewport (1);
		    var scale = container.clientWidth / viewport.width;
		    var viewport = page.getViewport (scale);
		    //
		    // Prepare canvas using PDF page dimensions
		    //
		    canvas1.height = viewport.height;
		    canvas1.width = viewport.width;
		    //
		    // Render PDF page into canvas context
		    //
		    var renderContext = {
		      canvasContext: context1,
		      viewport: viewport
		    };
		    page.render (renderContext);
		 	}
		});
		//
	  // Fetch the second page
	  //
	  pdf.getPage (2).then(function (page) {
	    cvConfig.two = function () {
		    var viewport = page.getViewport (1);
		    var scale = container.clientWidth / viewport.width;
		    var viewport = page.getViewport (scale);
		    //
		    // Prepare canvas using PDF page dimensions
		    //
		    canvas2.height = viewport.height;
		    canvas2.width = viewport.width;
		    //
		    // Render PDF page into canvas context
		    //
		    var renderContext = {
		      canvasContext: context2,
		      viewport: viewport
		    };
		    page.render (renderContext);
		 	}
		});
	});
}
runCvConfig ();
// call cvConfig when activating the tab