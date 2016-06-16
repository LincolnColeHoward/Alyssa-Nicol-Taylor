var runGallery = function () {};
function mosaic () {
	var imageContainer = document.querySelector ("#galleryTab");
	var colWidth = 0;
	function generateColumn () {
		var ret = imageContainer.DOM ("div.col-xs-4.col-sm-4.col-md-2.col-lg-2");
		ret.style.padding = 0;
		ret.addGallery = function (gallery) {
			var img = new Image (ret.clientWidth);
			img.src = gallery.src;
			this.appendChild (img);
			window.addEventListener ("resize", function () {
				img.width = ret.clientWidth;
			}, false);
			function enlarge () {
				hideCard ();
				var c2 = img.cloneNode ();
				function adjust () {
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
				flashMessage (c2, adjust);
				if (ga) ga ("send", "event", "Gallery", "enlarge", gallery.title);
			}
			var datacard = ret.DOM ("div.datacard.hidden");
			var p = datacard.DOM ("p.datacard");
			p.DOM ("b").innerHTML = gallery.title;
			p.DOM ("span").innerHTML = "  " + gallery.year;
			p.DOM ("br");
			p.DOM ("span").innerHTML = gallery.media;
			p.DOM ("br");
			p.DOM ("span").innerHTML = gallery.dimensions;
			p.DOM ("br");
			p.DOM ("span").innerHTML = gallery.copyright;
			p.DOM ("br");
			function showCard () {
				if (ga) ga ("send", "event", "Gallery", "info", gallery.title);
				var old = document.querySelector ("div.datacard.open");
				if (old) old.hide ();
				datacard.style.height = img.clientHeight + "px";
				datacard.style.width = ret.clientWidth + "px";
				img.className = "hidden";
				datacard.className = "datacard open";
			}
			function hideCard () {
				if (ga) ga ("send", "event", "Gallery", "close", gallery.title);
				datacard.classList.add ("hidden");
				datacard.classList.remove ("open");
				img.classList.remove ("hidden");
			}
			datacard.hide = hideCard;
			var btn = p.DOM ("button.btn.btn-primary.btn-xs");
			btn.addEventListener ("click", enlarge, false);
			btn.innerHTML = "enlarge";
			var close = p.DOM ("button.btn.btn-default.btn-xs");
			close.addEventListener ("click", hideCard, false);
			close.innerHTML = "close";
			img.addEventListener ("click", showCard, false);
		}
		return ret;
	}
	var opts = {
		cb: function (galleries) {
			runGallery = function () {
				imageContainer.innerHTML = "";
				if (!mobile) imageContainer.DOM ("div.col-md-3.col-lg-3");
				var cols = [generateColumn (), generateColumn (), generateColumn ()];
				for (var i = 0; i < galleries.length; i++) {
					cols [i % 3].addGallery (galleries [i]);
				}
			}
			runGallery ();
		}
	}
	GET ("/galleries", opts);
}
mosaic ();