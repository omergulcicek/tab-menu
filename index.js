document.querySelectorAll(".tab-menu").forEach(t => {
  t.querySelectorAll("nav>a").forEach(l => {
    l.addEventListener("click", a => {
      t.querySelectorAll("nav>a").forEach(e => e.classList.remove("is-active"))
      a.target.classList.add("is-active")

      t.querySelectorAll(".contents>div").forEach((c, i) => {
        [].indexOf.call(a.target.parentNode.children, a.target) == i
          ? c.classList.remove("d-none")
          : c.classList.add("d-none")
      })
    })
  })
})
