(function(){
    'use strict';
    //Set current year in footer
    const yearEl = document.getElementById('year');
    if (yearEl){
        yearEl.textContent = new Date().getFullYear();
    }
    document.querySelectorAll('a[href^="#"]').forEach(function(link){
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target){
                e.preventDefault();
                target.scrollIntoView({behavior: 'smooth', block: 'start'});

            }
        });
    });
});