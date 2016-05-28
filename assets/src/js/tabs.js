function tabConfig () {
	var marginTop = document.querySelector ("#nav").clientHeight * 1.25;
	var tabHeight = document.querySelectorAll ("head") [0].DOM ("style");
	tabHeight.innerHTML = "div.tab {margin-top:" + marginTop + "px}";
	// function setTabHeight () {
	// 	var marginTop = document.querySelector ("#nav").clientHeight * 1.25;
	// 	var ss = DOM ("style");
	// 	ss.innerHTML = "div.tab {margin-top:" + marginTop + "px}";
	// 	document.querySelectorAll ("head") [0].replaceChild (ss, tabHeight);
	// 	tabHeight = ss;
	// }
	// setTabHeight ();
	var tabs = {
		gallery: {btn: document.querySelector ("#galleryBtn"), tab: document.querySelector ("#galleryTab")},
		// graphic: {btn: document.querySelector ("#graphicBtn"), tab: document.querySelector ("#graphicTab")},
		bio: {btn: document.querySelector ("#bioBtn"), tab: document.querySelector ("#bioTab")},
		cv: {btn: document.querySelector ("#cvBtn"), tab: document.querySelector ("#cvTab")},
		contact: {btn: document.querySelector ("#contactBtn"), tab: document.querySelector ("#contactTab")}
	};
	var active = "bio";
	function activate (name) {
		// ga ("send", "pageview", "#" + name + "-tab");
		close ();
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
	// tabs.graphic.btn.onclick = function () {activate ("graphic"); if (graphicEmpty) graphicEmpty ()};
	tabs.contact.btn.onclick = function () {activate ("contact")};
	// for opening tab selector
	function open () {
		document.querySelector ("#navbar").className = "navbar-collapse collapse";
		document.querySelector ("#homeBtn").onclick = close;
	}
	function close () {
		document.querySelector ("#navbar").className = "hidden";
		document.querySelector ("#homeBtn").onclick = open;
	}
	document.querySelector ("#homeBtn").onclick = open;
}
tabConfig ();