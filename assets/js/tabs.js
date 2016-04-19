function tabConfig () {
	var tabs = {
		gallery: {btn: document.querySelector ("#galleryBtn"), tab: document.querySelector ("#galleryTab")},
		bio: {btn: document.querySelector ("#bioBtn"), tab: document.querySelector ("#bioTab")},
		cv: {btn: document.querySelector ("#cvBtn"), tab: document.querySelector ("#cvTab")}
	};
	var active = localStorage.activeTab || "gallery";
	function activate (name) {
		tabs [active].btn.className = "";
		tabs [active].tab.className = "hidden";
		tabs [name].btn.className = "active";
		tabs [name].tab.className = "container-fluid tab";
		active = name;
	}
	activate (active);
	tabs.gallery.btn.onclick = function () {activate ("gallery")};
	tabs.bio.btn.onclick = function () {activate ("bio")};
	tabs.cv.btn.onclick = function () {activate ("cv"); cvConfig ()};
}
tabConfig ();