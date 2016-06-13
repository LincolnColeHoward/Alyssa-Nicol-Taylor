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
			function enlarge () {
				hideCard ();
				var c2 = img.cloneNode ();
				flashMessage (c2);
				function adjust () {
					console.log ("h=" + modal.clientHeight, "w=" + clientWidth);
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
					console.log (calc);
					c2.style.width = calc.w + "px";
					c2.style.height = calc.h + "px";
					c2.style.left = calc.x + "px";
					c2.style.top = calc.y + "px";
				}
				window.addEventListener ("resize", adjust, false);
				adjust ();
			}
			var datacard = ret.DOM ("div.hidden");
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
				var old = document.querySelector ("div.datacard");
				if (old) old.hide ();
				console.log (datacard);
				datacard.style.height = img.clientHeight + "px";
				datacard.style.width = ret.clientWidth + "px";
				img.className = "hidden";
				datacard.className = "datacard";
			}
			function hideCard () {
				datacard.className = "hidden";
				img.className = "";
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
			window.addEventListener ("resize", runGallery, false);
			runGallery ();
		}
	}
	GET ("/galleries", opts);
}
mosaic ();