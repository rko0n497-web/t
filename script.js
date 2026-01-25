// تأثيرات تفاعلية للموقع

document.addEventListener('DOMContentLoaded', function() {
    // تأثير التمرير السلس للروابط
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // تغيير لون الشريط العلوي عند التمرير
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = 'var(--white)';
            navbar.style.backdropFilter = 'none';
        }
    });

    // تأثيرات بطاقات الدورات
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });

    // نموذج الاتصال
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // هنا يمكنك إضافة كود إرسال البيانات إلى الخادم
            const formData = new FormData(this);
            
            // عرض رسالة نجاح
            alert('شكراً لتسجيلك! سنتواصل معك قريباً.');
            this.reset();
        });
    }

    // تأثيرات ظهور العناصر عند التمرير
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // مراقبة العناصر التي نريد إضافة تأثيرات لها
    document.querySelectorAll('.course-card, .feature-card').forEach(el => {
        observer.observe(el);
    });

    // إضافة فئة للرسوم المتحركة
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            animation: fadeInUp 0.8s ease-out forwards;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);

    // عداد الأرقام المتحركة
    const statItems = document.querySelectorAll('.stat-item h3');
    statItems.forEach(item => {
        const finalValue = parseInt(item.textContent.replace('+', ''));
        const duration = 2000; // 2 ثانية
        const increment = finalValue / (duration / 16); // 60fps
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= finalValue) {
                current = finalValue;
                clearInterval(timer);
            }
            item.textContent = Math.floor(current) + '+';
        }, 16);
    });

    // إضافة تأثير النقر على الأزرار
    document.querySelectorAll('button, .btn-primary, .btn-secondary').forEach(button => {
        button.addEventListener('click', function(e) {
            // تأثير الموجة
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.7);
                transform: scale(0);
                animation: ripple-animation 0.6s linear;
                width: ${size}px;
                height: ${size}px;
                top: ${y}px;
                left: ${x}px;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // تأثير التحميل
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });

    // إضافة صوت نقر خفيف (اختياري)
    const clickSound = new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAA==');
    
    document.querySelectorAll('button, a[href^="#"]').forEach(el => {
        el.addEventListener('click', () => {
            // يمكن تفعيل الصوت إذا أردت
            // clickSound.play().catch(e => console.log('Sound playback failed:', e));
        });
    });

    // رسالة ترحيب في الكونسول
    console.log('%c🎓 مرحباً في أكاديمية النخبة! 🚀', 'color: #d4af37; font-size: 18px; font-weight: bold;');
    console.log('%cموقع تعليمي فاخر مصمم بأحدث التقنيات', 'color: #0a192f; font-size: 14px;');
});