var index;
function galleryConfig () {
	// index images by year
	index = {};
	function createIndex (after) {
		GET ("/galleries", function (images) {
			for (var i = 0; i < images.length; i++) {
				if (!index [images [i].year]) index [images [i].year] = [];
				index [images [i].year].push (images [i]);
			}
			if (after) after ();
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
	function imgOnclickEvt (img, data) {
		return function () {
			title.innerHTML = data.title || "";
			copyright.innerHTML = data.copyright || "";
			dimensions.innerHTML = data.dimensions || "";
			media.innerHTML = data.media || "";
			var clone = img.cloneNode ();
			clone.width = main.clientWidth * 0.9;
			main.innerHTML = "";
			main.appendChild (clone);
		}
	}
	createIndex (createThumbnail);
}
galleryConfig ();