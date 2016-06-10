function galleryConfig () {
	Element.prototype.IMG = function (src) {
		var img =	this.DOM ("img");
		img.setAttribute ("src", src);
		return img;
	}
	// find the necessary dom elements
	var yearlist = document.querySelector ("#galleryList");
	var thumbnail = document.querySelector ("#thumbnail");
	// send an image over when clicked
	var main = document.querySelector ("#galleryMain");
	var title = document.querySelector ("#image_title");
	var copyright = document.querySelector ("#image_copyright");
	var dimensions = document.querySelector ("#image_dimensions");
	var media = document.querySelector ("#image_media");
	var modal = document.querySelector ("#modal");
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
		var opts = {
			cb: function (data) {
				var n = 0;
				function counted () {
					n++;
					if (n === data) {
						galleryEmpty ();
					}
				}
				for (var i = 0; i < data; i++) {
					var _opts = {
						id: i,
						cb: function (data) {
							setIndex (data);
							createThumbnailItem (data);
							counted ();
						}
					}
					GET ("/galleries", _opts);
				}
			}
		}
		GET ("/galleries/length", opts);
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
	function galleryEmpty () {
		showIndexes ();
		var yearOpts = Object.keys (index);
		var i = Math.floor (Math.random () * yearOpts.length);
		i = yearOpts [i];
		if (!mobile) showYear (i);
		if (mobile) {
			var yearDisplay = document.querySelector ("#galleryYearMob");
			var yearIndex = 0;
			console.log (years [0].year);
			yearDisplay.innerHTML = years [yearIndex].year;
			showYear (years [yearIndex].year);
			var hammertime = new Hammer (document.querySelector ("#galleryTab"));
			function goleft () {
				if (yearIndex < years.length - 1) {
					hideAll ();
					yearIndex++;
					showYear (years [yearIndex].year);
					yearDisplay.innerHTML = years [yearIndex].year;
					if (yearIndex === 1)
						document.querySelector ("#mobleft").classList.remove ("hidden");
					if (yearIndex === years.length - 1)
						document.querySelector ("#mobright").classList.add ("hidden");
				}
			}
			function goright () {
				if (yearIndex > 0) {
					hideAll ();
					yearIndex--;
					showYear (years [yearIndex].year);
					yearDisplay.innerHTML = years [yearIndex].year;
				}
				if (yearIndex === 0)
					document.querySelector ("#mobleft").classList.add ("hidden");
				if (yearIndex === years.length - 2)
					document.querySelector ("#mobright").classList.remove ("hidden");
			}
			document.querySelector ("#mobleft").onclick = goright;
			document.querySelector ("#mobright").onclick = goleft;
			hammertime.on ("swipeleft", function () {
				goleft ();
			});
			hammertime.on ("swiperight", function () {
				goright ();
			});
		}
	}
	// hide all items in the thumbnail
	function hideAll () {
		var all = document.querySelectorAll ("div.thumbnail-item.gallery");
		for (var i = 0; i < all.length; i++)
			all [i].className = "hidden";
	}
	// count the number of times a user selects a year
	var yearcount = 0;
	// show all images for a year
	function showYear (year) {
		yearcount++;
		AQ ("Year", "Select", year + "", yearcount + "");
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
	var adjust = function () {};
	// count the number of times a user selects an image
	var imagecount = 0;
	function showImage (img, data) {
		imagecount++;
		AQ ("Image", "Select", data.title, imagecount + "");
		title.innerHTML = data.title || "";
		copyright.innerHTML = data.copyright || "";
		dimensions.innerHTML = data.dimensions || "";
		media.innerHTML = data.media || "";
		var clone = img.cloneNode ();
		main.innerHTML = "";
		main.appendChild (clone);
		galleryEmpty = false;
		clone.onclick = function () {
			// ga('send', 'event', 'GalleryPhoto', 'enlarge', data.title);
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
			window.onresize = adjust;
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