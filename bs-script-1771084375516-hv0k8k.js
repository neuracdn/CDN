(function(){
            
            if(!document.querySelector('link[href*="bootstrap.min.css"]')){
                const l=document.createElement("link");
                l.rel="stylesheet";
                l.href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";
                l.onload=function(){console.log("Bootstrap Loaded ✅");};
                document.head.appendChild(l);
                  // Also inject JS for components
                const s=document.createElement("script");
                s.src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
                s.onload=function(){console.log("Bootstrap JS Loaded ✅");};
                document.head.appendChild(s);
            }
        })();