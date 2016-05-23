var graphicEmpty;
function graphicConfig () {
	// find the necessary dom elements
	var yearlist = document.querySelector ("#graphicList");
	var thumbnail = document.querySelector ("#gallery_thumbnail");
	// index images and displays by year
	var index = {};
	var display = {};
	// obvious method
	function loadContent () {
		// get the number of galleries to load
		GET ("/graphics/length", function (data) {
			for (var i = 0; i < data; i++) {
				GET ("/graphics/" + i, function (data) {
					setIndex (data);
					createThumbnailItem (data);
				});
			}
		});
	}
	// index a graphic
	function setIndex (graphic) {
		if (!index [graphic.year]) {
			index [graphic.year] = [];
			display [graphic.year] = [];
			var td = yearlist.DOM ("tr").DOM ("td");
			td.innerHTML = graphic.year;
			td.onclick = yearOnclickEvt (graphic.year);
		}
		index [graphic.year].push (graphic);
	}
	// separate logic for creating the thumbnail 
	function createThumbnailItem (graphic) {
		var div = thumbnail.DOM ("div.hidden");
		var img = div.IMG (graphic.src);
		div.onclick = imgOnclickEvt (img, graphic);
		display [graphic.year].push (div);
	}
	// create an initial image function
	graphicEmpty = function () {
		var yearOpts = Object.keys (index);
		var i = Math.floor (Math.random () * yearOpts.length);
		i = yearOpts [i];
		showYear (i);
	}
	// hide all items in the thumbnail
	function hideAll () {
		var all = document.querySelectorAll ("div.thumbnail-item.graphic");
		for (var i = 0; i < all.length; i++)
			all [i].className = "hidden";
	}
	// show all images for a year
	function showYear (year) {
		// ga('send', 'event', 'graphicYear', 'open', year);
		var divs = display [year];
		var rand = Math.floor (Math.random () * divs.length);
		showImage (divs [rand].children [0], index [year][rand]);
		for (var i = 0; i < divs.length; i++)
			divs [i].className = "thumbnail-item graphic";
	}
	// event for selecting a year
	function yearOnclickEvt (year) {
		return function () {
			hideAll ();
			showYear (year);
		}
	}
	// send an image over when clicked
	var main = document.querySelector ("#graphicMain");
	var title = document.querySelector ("#graphic_title");
	var copyright = document.querySelector ("#graphic_copyright");
	var dimensions = document.querySelector ("#graphic_dimensions");
	var media = document.querySelector ("#graphic_media");
	var modal = document.querySelector ("#modal");
	var content = document.querySelector ("#modal-content");
	modal.onclick = function () { modal.className = "modal"; content.innerHTML = null; };
	function showImage (img, data) {
			// ga('send', 'event', 'graphic', 'show', data.title);
			title.innerHTML = data.title || "";
			copyright.innerHTML = data.copyright || "";
			dimensions.innerHTML = data.dimensions || "";
			media.innerHTML = data.media || "";
			var clone = img.cloneNode ();
			main.innerHTML = "";
			main.appendChild (clone);
			graphicEmpty = false;
			clone.onclick = function () {
				// ga('send', 'event', 'Photo', 'enlarge', data.title);
				var c2 = clone.cloneNode ();
				modal.className = "modal show";
				function adjust () {
					if (window.orientation === 0)
						c2.style.width = window.innerWidth + "px";
					else
						c2.style.height = window.innerHeight + "px";
				}
				adjust ();
				window.addEventListener ("orientationChange", adjust, false);
				content.appendChild (c2);
			}
	}
	// wrap showImage for events
	function imgOnclickEvt (img, data) {
		return function () {
			showImage (img, data);
		}
	}
	loadContent ();
}
graphicConfig ();