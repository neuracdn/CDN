(function () {
  // Inject Custom CSS
  var style = document.createElement('style');
  style.innerHTML = ".neobrutalism-button {\n            border: 4px solid black;\n            background-color: #f9c74f; /* Vibrant Yellow */\n            color: black;\n            padding: 1rem 2rem;\n            border-radius: 0.5rem;\n            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);\n            transition: transform 0.3s, box-shadow 0.3s;\n        }\n        .neobrutalism-button:hover {\n            transform: scale(1.05);\n            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.7);\n        }";
  document.head.appendChild(style);

  function loadTailwind() {
    if (window.tailwind) {
      document.documentElement.classList.remove("tw-loading");
      return;
    }
    setTimeout(loadTailwind, 50);
  }

  if (!document.querySelector('script[src*="cdn.tailwindcss.com"]')) {
    const s = document.createElement("script");
    s.src = "https://cdn.tailwindcss.com";
    document.head.appendChild(s);
  }

  document.documentElement.classList.add("tw-loading");
  loadTailwind();
})();