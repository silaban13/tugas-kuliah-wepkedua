function loadComponent(id, file, callback) {
  const el = document.getElementById(id)
  if (!el) return 

  fetch(file)
    .then(res => {
      if (!res.ok) throw new Error("Gagal load " + file)
      return res.text()
    })
    .then(data => {
      el.innerHTML = data
      if (callback) callback()
    })
    .catch(err => console.error(err))
}

loadComponent("navbar", "components/navbar.html", () => {
  const toggleBtn = document.getElementById("toggleBtn")
  const navMenu = document.querySelector(".nav-menu")
  const overlay = document.querySelector(".nav-overlay")

  if (!toggleBtn || !navMenu) return

  toggleBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active")
    overlay?.classList.toggle("active")
  })

  overlay?.addEventListener("click", () => {
    navMenu.classList.remove("active")
    overlay.classList.remove("active")
  })
})

loadComponent("footer", "components/footer.html")
