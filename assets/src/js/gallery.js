var galleryEmpty;
function galleryConfig () {
	// find the necessary dom elements
	var yearlist = document.querySelector ("#galleryList");
	var thumbnail = document.querySelector ("#thumbnail");
	// index images and displays by year
	var index = {};
	var display = {};
	// obvious method
	function loadContent () {
		// get the number of galleries to load
		GET ("/galleries/length", function (data) {
			for (var i = 0; i < data; i++) {
				GET ("/galleries/" + i, function (data) {
					setIndex (data);
					createThumbnailItem (data);
				});
			}
		});
	}
	// index a gallery
	function setIndex (gallery) {
		if (!index [gallery.year]) {
			index [gallery.year] = [];
			display [gallery.year] = [];
			var td = yearlist.DOM ("tr").DOM ("td");
			td.innerHTML = gallery.year;
			td.onclick = yearOnclickEvt (gallery.year);
		}
		index [gallery.year].push (gallery);
	}
	// separate logic for creating the thumbnail 
	function createThumbnailItem (gallery) {
		var div = thumbnail.DOM ("div.hidden");
		var img = div.IMG (gallery.src);
		div.onclick = imgOnclickEvt (img, gallery);
		display [gallery.year].push (div);
	}
	// create an initial image function
	galleryEmpty = function () {
		var yearOpts = Object.keys (index);
		var i = Math.floor (Math.random () * yearOpts.length);
		i = yearOpts [i];
		showYear (i);
	}
	// hide all items in the thumbnail
	function hideAll () {
		var all = document.querySelectorAll ("div.thumbnail-item");
		for (var i = 0; i < all.length; i++)
			all [i].className = "hidden";
	}
	// show all images for a year
	function showYear (year) {
		var divs = display [year];
		var rand = Math.floor (Math.random () * divs.length);
		showImage (divs [rand].children [0], index [year][rand]);
		for (var i = 0; i < divs.length; i++)
			divs [i].className = "thumbnail-item";
	}
	// event for selecting a year
	function yearOnclickEvt (year) {
		return function () {
			hideAll ();
			showYear (year);
		}
	}
	// send an image over when clicked
	var main = document.querySelector ("#galleryMain");
	var title = document.querySelector ("#image_title");
	var copyright = document.querySelector ("#image_copyright");
	var dimensions = document.querySelector ("#image_dimensions");
	var media = document.querySelector ("#image_media");
	var modal = document.querySelector ("#modal");
	var content = document.querySelector ("#modal-content");
	modal.onclick = function () { modal.className = "modal"; content.innerHTML = null; };
	function showImage (img, data) {
			title.innerHTML = data.title || "";
			copyright.innerHTML = data.copyright || "";
			dimensions.innerHTML = data.dimensions || "";
			media.innerHTML = data.media || "";
			var clone = img.cloneNode ();
			main.innerHTML = "";
			main.appendChild (clone);
			galleryEmpty = false;
			clone.onclick = function () {
				var c2 = clone.cloneNode ();
				modal.className = "modal show";
				c2.style.height = window.innerHeight + "px";
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
galleryConfig ();