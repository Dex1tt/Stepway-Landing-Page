let sections = document.querySelectorAll('section');
sections.forEach(function(section) {
    section.classList.add('hidden-section');
});
let observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    })
}, { threshold: 0.1 });
sections.forEach(function(section){
    observer.observe(section);
});
