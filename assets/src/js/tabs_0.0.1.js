function tabConfig () {
	// count the number of times a user changes tabs
	var tabcount = 0;
	// add a stylesheet that sets the margin
	var marginTop = document.querySelector ("#nav").clientHeight;
	var tabHeight = document.querySelectorAll ("head") [0].DOM ("style");
	function setTabHeight () {
		var marginTop = document.querySelector ("#nav").clientHeight;
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
		bio: {btn: document.querySelector ("#bioBtn"), tab: document.querySelector ("#bioTab")},
		cv: {btn: document.querySelector ("#cvBtn"), tab: document.querySelector ("#cvTab")},
		contact: {btn: document.querySelector ("#contactBtn"), tab: document.querySelector ("#contactTab")}
	};
	var active = "gallery";
	function activate (name) {
		tabcount++;
		AQ ("Tabs", "Select", name, tabcount);
		close ();
		tabs [active].btn.className = "text-muted";
		tabs [active].tab.className = "hidden";
		tabs [name].btn.className = "text-primary";
		tabs [name].tab.className = "container-fluid tab";
		active = name;
	}
	activate (active);
	tabs.gallery.btn.onclick = function () {activate ("gallery")};
	tabs.bio.btn.onclick = function () {activate ("bio")};
	tabs.cv.btn.onclick = function () {activate ("cv"); cvConfig ()};
	// tabs.graphic.btn.onclick = function () {activate ("graphic"); if (graphicEmpty) graphicEmpty ()};
	tabs.contact.btn.onclick = function () {activate ("contact")};
	// for opening tab selector
	function open () {
		AQ ("Tabs", "Open", "Navbar");
		document.querySelector ("#navbar").className = "container-fluid";
		document.querySelector ("#homeBtn").onclick = close;
	}
	function close () {
		AQ ("Tabs", "Close", "Navbar");
		document.querySelector ("#navbar").className = "hidden";
		document.querySelector ("#homeBtn").onclick = open;
	}
	document.querySelector ("#homeBtn").onclick;
}
tabConfig ();