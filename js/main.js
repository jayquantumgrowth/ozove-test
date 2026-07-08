// Ozove homepage — scroll reveals, mobile nav, live pipeline ticker

(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---- Scroll reveals (staggered within each section) ----
  var reveals = document.querySelectorAll(".reveal");

  if (!reduceMotion && "IntersectionObserver" in window) {
    // Assign stagger delays per parent group
    var groups = new Map();
    reveals.forEach(function (el) {
      var parent = el.parentElement;
      var idx = groups.get(parent) || 0;
      el.style.setProperty("--d", Math.min(idx * 60, 360) + "ms");
      groups.set(parent, idx + 1);
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    reveals.forEach(function (el) { observer.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  }

  // ---- Mobile nav toggle ----
  var nav = document.querySelector(".nav");
  var toggle = document.querySelector(".nav-toggle");

  if (nav && toggle) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a[href^='#']").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ---- Pipeline ticker: slowly advance task statuses so the panel feels live ----
  if (!reduceMotion) {
    var states = [
      { cls: "chip-building", label: "Building" },
      { cls: "chip-qa", label: "In QA" },
      { cls: "chip-shipped", label: "Shipped" }
    ];
    var chips = Array.prototype.slice.call(document.querySelectorAll(".pipeline .chip"));

    function stateIndex(chip) {
      for (var i = 0; i < states.length; i++) {
        if (chip.classList.contains(states[i].cls)) return i;
      }
      return 0;
    }

    setInterval(function () {
      if (!chips.length) return;
      // advance the least-progressed task by one state
      var target = chips.reduce(function (a, b) {
        return stateIndex(b) < stateIndex(a) ? b : a;
      });
      var idx = stateIndex(target);
      if (idx >= states.length - 1) {
        // everything shipped — reset all to a fresh cycle
        chips.forEach(function (chip, i) {
          var s = states[Math.min(i, states.length - 1)];
          states.forEach(function (st) { chip.classList.remove(st.cls); });
          chip.classList.add(states[0].cls);
          chip.textContent = states[0].label;
          if (i === 0) { chip.classList.remove(states[0].cls); chip.classList.add(s.cls); chip.textContent = s.label; }
        });
        return;
      }
      var next = states[idx + 1];
      states.forEach(function (st) { target.classList.remove(st.cls); });
      target.classList.add(next.cls);
      target.textContent = next.label;
    }, 6000);
  }
})();
