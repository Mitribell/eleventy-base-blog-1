document.addEventListener("DOMContentLoaded", () => {
	const menu = document.getElementById("offcanvas");
	const overlay = document.getElementById("overlay");
	const toggle = document.getElementById("menu-toggle");

	if (menu && overlay && toggle) {
		toggle.addEventListener("click", () => {
			const isOpen = menu.classList.contains("open");
			menu.classList.toggle("open");
			overlay.classList.toggle("visible");
			toggle.classList.toggle("open", !isOpen);
		});

		overlay.addEventListener("click", () => {
			menu.classList.remove("open");
			overlay.classList.remove("visible");
			toggle.classList.remove("open");
		});
	}
});
