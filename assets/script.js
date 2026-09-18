const profile = document.getElementById("profile");
const profileToggle = document.getElementById("profileToggle");
const profileClose = document.getElementById("profileClose");
const drawerBackdrop = document.getElementById("drawerBackdrop");
const profileHoverZone = document.getElementById("profileHoverZone");
const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

function setProfileOpen(isOpen, showBackdrop = false) {
  profile.classList.toggle("is-open", isOpen);
  drawerBackdrop.classList.toggle("is-open", isOpen && showBackdrop);
  profileToggle.setAttribute("aria-expanded", String(isOpen));
  profile.setAttribute("aria-hidden", String(!isOpen));
  document.body.style.overflow = isOpen && showBackdrop ? "hidden" : "";
}

profileToggle.addEventListener("click", () => setProfileOpen(true, true));
profileClose.addEventListener("click", () => setProfileOpen(false));
drawerBackdrop.addEventListener("click", () => setProfileOpen(false));

if (supportsHover) {
  profileHoverZone.addEventListener("mouseenter", () => setProfileOpen(true));
  profile.addEventListener("mouseleave", () => setProfileOpen(false));
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setProfileOpen(false);
});
