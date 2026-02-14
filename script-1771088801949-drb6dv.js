(function(){
            
            if (!document.querySelector('script[src="https://cdn.tailwindcss.com"]')) {
              var script = document.createElement("script");
              script.src = "https://cdn.tailwindcss.com";
              script.onload = function () {
                console.log("Tailwind Loaded ✅");
              };
              document.head.appendChild(script);
            } 
        })();