var galleryEmpty;
function galleryConfig () {
	// index images by year
	var index = {};
	function createIndex (after, ever) {
		GET ("/galleries", function (images) {
			for (var i = 0; i < images.length; i++) {
				if (!index [images [i].year]) index [images [i].year] = [];
				index [images [i].year].push (images [i]);
			}
			after (ever);
		});
	}
	// create the image thumbnail view
	var display = {};
	function createThumbnail (after) {
		var yearlist = document.querySelector ("#galleryList");
		var thumbnail = document.querySelector ("#thumbnail");
		var main = document.querySelector ("#galleryMain");
		// generate list view for years
		for (var year in index) {
			var td = yearlist.DOM ("tr").DOM ("td");
			td.innerHTML = year;
			td.onclick = yearOnclickEvt (year);
			// generate thumbnail view for images
			var images = index [year];
			display [year] = [];
			for (var i = 0; i < images.length; i++) {
				var div = thumbnail.DOM ("div.hidden");
				var img = div.IMG (images [i].src);
				div.onclick = imgOnclickEvt (img, index [year][i]);
				display [year].push (div);
			}
		}
		after ();
	}
	// create an initial image function
	function initialImage () {
		var yearOpts = Object.keys (index);
		var i = Math.floor (Math.random () * yearOpts.length);
		i = yearOpts [i];
		galleryEmpty = function () {
			showYear (i);
		}
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
	function showImage (img, data) {
			title.innerHTML = data.title || "";
			copyright.innerHTML = data.copyright || "";
			dimensions.innerHTML = data.dimensions || "";
			media.innerHTML = data.media || "";
			var clone = img.cloneNode ();
			window.onresize = function () {
				clone.width = main.clientWidth * 0.9;
			}
			clone.width = main.clientWidth * 0.9;
			main.innerHTML = "";
			main.appendChild (clone);
			galleryEmpty = false;
	}
	function imgOnclickEvt (img, data) {
		return function () {
			showImage (img, data);
		}
	}
	createIndex (createThumbnail, initialImage);
}
galleryConfig ();