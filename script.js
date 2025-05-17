document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const logo = document.getElementById('logo');
    const allSections = document.querySelectorAll('section');
    const divContainers = document.querySelectorAll('#bio, #bio-text, #resume, #educ-background, #work-experience, #skills, #soft-skills, #technical-skills, #portfolio-content, #contact-content, #contact-form, #social-media');
    const formElements = document.querySelectorAll('.input, .form-btn');
    const navbar = document.getElementById('navbar');
    const buttonText = document.querySelectorAll('#resume-download, #link-ng-website');

    themeToggle.addEventListener('click', function() {
        if (body.classList.contains('dark-mode')) {
            enableLightMode();
        } else {
            enableDarkMode();
        }
    });

    function enableLightMode() {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        
        logo.classList.remove('dark-mode');
        logo.classList.add('light-mode');
        
        allSections.forEach(section => {
            section.classList.remove('dark-mode');
            section.classList.add('light-mode');
        });
        
        divContainers.forEach(div => {
            div.classList.remove('dark-mode');
            div.classList.add('light-mode');
            
            if (div.style.border) {
                div.style.borderColor = 'rgb(16, 16, 14)';
            }
        });
        
        formElements.forEach(elem => {
            elem.classList.remove('dark-mode');
            elem.classList.add('light-mode');
        });
        
        buttonText.forEach(btn => {
            btn.style.color = 'rgb(16, 16, 14)';
        });
        
        document.querySelectorAll('[style*="border"]').forEach(elem => {
            if (elem.style.border) {
                elem.style.borderColor = 'rgba(16, 16, 14, 0.2)';
            }
        });
        
    }

    function enableDarkMode() {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        
        logo.classList.remove('light-mode');
        logo.classList.add('dark-mode');
        
        allSections.forEach(section => {
            section.classList.remove('light-mode');
            section.classList.add('dark-mode');
        });
        
        divContainers.forEach(div => {
            div.classList.remove('light-mode');
            div.classList.add('dark-mode');
            
            if (div.style.border) {
                div.style.borderColor = 'rgb(48, 48, 43)';
            }
        });
        
        formElements.forEach(elem => {
            elem.classList.remove('light-mode');
            elem.classList.add('dark-mode');
        });
        
        buttonText.forEach(btn => {
            btn.style.color = 'rgb(255, 255, 227)';
        });
        
        document.querySelectorAll('[style*="border"]').forEach(elem => {
            if (elem.style.border) {
                elem.style.borderColor = 'rgb(48, 48, 43)';
            }
        });
        
        localStorage.setItem('theme', 'dark');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const leftArrow = document.getElementById('left-arrow');
    const rightArrow = document.getElementById('right-arrow');
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    
    if (page1 && page2) {
        page1.style.display = 'flex';
        page2.style.display = 'none';
        
        let currentPage = 1;
        
        leftArrow.addEventListener('click', function() {
            
            if (currentPage === 2) {
                page2.classList.add('slide-out-right');
                
                setTimeout(() => {
                    page2.style.display = 'none';
                    page2.classList.remove('slide-out-right');
                    
                    page1.classList.add('slide-in-left');
                    page1.style.display = 'flex';
                    
                    setTimeout(() => {
                        page1.classList.remove('slide-in-left');
                    }, 500);
                    
                    currentPage = 1;
                }, 500);
            } 
            else if (currentPage === 1) {
                page1.classList.add('slide-out-left');
                
                setTimeout(() => {
                    page1.style.display = 'none';
                    page1.classList.remove('slide-out-left');
                    
                    page2.classList.add('slide-in-right');
                    page2.style.display = 'flex';
                    
                    setTimeout(() => {
                        page2.classList.remove('slide-in-right');
                    }, 500);
                    
                    currentPage = 2;
                }, 500);
            }
        });
        
        rightArrow.addEventListener('click', function() {
            
            if (currentPage === 1) {
                page1.classList.add('slide-out-left');
                
                setTimeout(() => {
                    page1.style.display = 'none';
                    page1.classList.remove('slide-out-left');
                    
                    page2.classList.add('slide-in-right');
                    page2.style.display = 'flex';
                    
                    setTimeout(() => {
                        page2.classList.remove('slide-in-right');
                    }, 500);
                    
                    currentPage = 2;
                }, 500);
            }
            else if (currentPage === 2) {
                page2.classList.add('slide-out-right');
                
                setTimeout(() => {
                    page2.style.display = 'none';
                    page2.classList.remove('slide-out-right');
                    
                    page1.classList.add('slide-in-left');
                    page1.style.display = 'flex';
                    
                    setTimeout(() => {
                        page1.classList.remove('slide-in-left');
                    }, 500);
                    
                    currentPage = 1;
                }, 500);
            }
        });
    }
});