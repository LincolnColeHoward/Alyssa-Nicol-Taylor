function tabConfig () {
	var marginTop = document.querySelector ("#nav").clientHeight * 1.25;
	var tabHeight = document.querySelectorAll ("head") [0].DOM ("style");
	tabHeight.innerHTML = "div.tab {margin-top:" + marginTop + "px}";
	function setTabHeight () {
		var marginTop = document.querySelector ("#nav").clientHeight * 1.25;
		var ss = DOM ("style");
		ss.innerHTML = "div.tab {margin-top:" + marginTop + "px}";
		document.querySelectorAll ("head") [0].replaceChild (ss, tabHeight);
		tabHeight = ss;
	}
	setTabHeight ();
	window.addEventListener ("resize", setTabHeight, false);
	var tabs = {
		gallery: {btn: document.querySelector ("#galleryBtn"), tab: document.querySelector ("#galleryTab")},
		bio: {btn: document.querySelector ("#bioBtn"), tab: document.querySelector ("#bioTab")},
		cv: {btn: document.querySelector ("#cvBtn"), tab: document.querySelector ("#cvTab")}
	};
	var active = "bio";
	function activate (name) {
		ga ("send", "pageview", "#" + name + "-tab");
		tabs [active].btn.className = "text-muted";
		tabs [active].tab.className = "hidden";
		tabs [name].btn.className = "text-primary";
		tabs [name].tab.className = "container-fluid tab";
		active = name;
	}
	activate (active);
	tabs.gallery.btn.onclick = function () {activate ("gallery"); if (galleryEmpty) galleryEmpty ()};
	tabs.bio.btn.onclick = function () {activate ("bio")};
	tabs.cv.btn.onclick = function () {activate ("cv"); cvConfig ()};
}
tabConfig ();