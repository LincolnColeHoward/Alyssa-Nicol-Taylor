var galleryEmpty;
function galleryConfig () {
	// find the necessary dom elements
	var yearlist = document.querySelector ("#galleryList");
	var thumbnail = document.querySelector ("#thumbnail");
	// index images and displays by year
	var index = {};
	var years = [];
	years.insert = function (y, e) {
		for (var i = 0;i < this.length; i++)
			if (y < this [i].year) return this.splice (i, 0, {year: y, element: e});
		this.push ({year: y, element: e});
	}
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
	// index a gallery, insert into array
	function setIndex (gallery) {
		if (!index [gallery.year]) {
			index [gallery.year] = [];
			display [gallery.year] = [];
			var tr = DOM ("tr");
			var td = tr.DOM ("td");
			td.innerHTML = gallery.year;
			td.onclick = yearOnclickEvt (gallery.year);
			years.insert (gallery.year, tr);
		}
		index [gallery.year].push (gallery);
	}
	// 
	function showIndexes () {
		for (var i = 0; i < years.length; i++)
			yearlist.appendChild (years [i].element);
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
		showIndexes ();
		var yearOpts = Object.keys (index);
		var i = Math.floor (Math.random () * yearOpts.length);
		i = yearOpts [i];
		showYear (i);
	}
	// hide all items in the thumbnail
	function hideAll () {
		var all = document.querySelectorAll ("div.thumbnail-item.gallery");
		for (var i = 0; i < all.length; i++)
			all [i].className = "hidden";
	}
	// show all images for a year
	function showYear (year) {
		ga('send', 'event', 'GalleryYear', 'open gallery', year);
		var divs = display [year];
		var rand = Math.floor (Math.random () * divs.length);
		showImage (divs [rand].children [0], index [year][rand]);
		for (var i = 0; i < divs.length; i++)
			divs [i].className = "thumbnail-item gallery";
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
	var adjust = function () {};
	window.addEventListener ("resize", adjust, false);
	function showImage (img, data) {
			ga('send', 'event', 'GalleryImage', 'show', data.title);
			title.innerHTML = data.title || "";
			copyright.innerHTML = data.copyright || "";
			dimensions.innerHTML = data.dimensions || "";
			media.innerHTML = data.media || "";
			var clone = img.cloneNode ();
			main.innerHTML = "";
			main.appendChild (clone);
			galleryEmpty = false;
			clone.onclick = function () {
				ga('send', 'event', 'GalleryPhoto', 'enlarge', data.title);
				var c2 = clone.cloneNode ();
				modal.className = "modal show";
				adjust = function () {
					var calc = {
						w: img.width * modal.clientHeight / img.height,
						h: modal.clientHeight,
						x: 0,
						y: 0
					}
					if (calc.w > modal.clientWidth) {
						calc.h = calc.h * modal.clientWidth / calc.w;
						calc.w = modal.clientWidth;
						calc.y = (modal.clientHeight - calc.h) / 2;
					} else {
						calc.x = (modal.clientWidth - calc.w) / 2;
					}
					c2.style.width = calc.w + "px";
					c2.style.height = calc.h + "px";
					c2.style.left = calc.x + "px";
					c2.style.top = calc.y + "px";
				}
				adjust ();
				modal.appendChild (c2);
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