(function () {
          
          function loadTailwind() {
            if (!document.querySelector('script[src="https://cdn.tailwindcss.com"]')) {
              var script = document.createElement("script");
              script.src = "https://cdn.tailwindcss.com";
              document.head.appendChild(script);
            }
          }

          if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", loadTailwind);
          } else {
            loadTailwind();
          }
        })();