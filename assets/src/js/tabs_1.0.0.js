function Tabs () {
	// count the number of times a user changes tabs
	var tabcount = 0;
	// add a stylesheet that sets the margin
	var marginTop = document.querySelector ("#nav").clientHeight;
	if (!mobile) marginTop += 25;
	var tabHeight = document.querySelectorAll ("head") [0].DOM ("style");
	function setTabHeight () {
		var marginTop = document.querySelector ("#nav").clientHeight;
		if (!mobile) marginTop += 25;
		var ss = DOM ("style");
		ss.innerHTML = "div.tab {margin-top:" + marginTop + "px}";
		document.querySelectorAll ("head") [0].replaceChild (ss, tabHeight);
		tabHeight = ss;
	}
	setTabHeight ();
	window.addEventListener ("resize", setTabHeight, false);
	var tabs = {
		gallery: {btn: document.querySelector ("#galleryBtn"), tab: document.querySelector ("#galleryTab")},
		// graphic: {btn: document.querySelector ("#graphicBtn"), tab: document.querySelector ("#graphicTab")},
		// contact: {btn: document.querySelector ("#contactBtn"), tab: document.querySelector ("#contactTab")},
		bio: {btn: document.querySelector ("#bioBtn"), tab: document.querySelector ("#bioTab")},
		cv: {btn: document.querySelector ("#cvBtn"), tab: document.querySelector ("#cvTab")}
	};
	var active = "gallery";
	function activate (name) {
		close ();
		tabs [active].btn.className = "text-muted";
		tabs [active].tab.className = "hidden";
		tabs [name].btn.className = "text-primary";
		tabs [name].tab.className = "container-fluid tab";
		active = name;
		if (ga) ga("send", "pageview", name);
	}
	// for opening tab selector
	function open () {
		document.querySelector ("#navbar").className = "container-fluid";
		document.querySelector ("#homeBtn").onclick = close;
	}
	function close () {
		document.querySelector ("#navbar").className = "hidden";
		document.querySelector ("#homeBtn").onclick = open;
	}
	document.querySelector ("#homeBtn").onclick;
	tabs.gallery.btn.onclick = function () {activate ("gallery")};
	tabs.bio.btn.onclick = function () {activate ("bio")};
	tabs.cv.btn.onclick = function () {activate ("cv"); cvConfig ()};
	tabs.gallery.tab.addEventListener ("click", close, false);
	tabs.bio.tab.addEventListener ("click", close, false);
	tabs.cv.tab.addEventListener ("click", close, false);
	activate (active);
	runGallery ();
}
Tabs ();