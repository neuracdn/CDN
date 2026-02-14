(function(){
            
            if(!document.querySelector('script[src*="tailwindcss"]')){
                var s=document.createElement('script');
                s.src="https://cdn.tailwindcss.com";
                s.onload=function(){console.log("Tailwind Loaded ✅");};
                document.head.appendChild(s);
            }
        })();