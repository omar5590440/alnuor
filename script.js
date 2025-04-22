// تفعيل مكتبة AOS
document.addEventListener('DOMContentLoaded', () => {
    AOS.init();
});

// التمرير السلس عند النقر على روابط التنقل
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // تعديل المسافة لتجنب تغطية شريط التنقل
                behavior: 'smooth'
            });
        }
    });
});

// تأثير عند تمرير الماوس على البطاقات
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.5)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
    });
});

// إظهار رسالة عند إرسال النموذج
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault(); // منع الإرسال الافتراضي
    alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا.');
    e.target.reset(); // إعادة تعيين الحقول
});

// دالة لعرض رسالة تنبيه عند إرسال النموذج
function confirmEmailRedirect() {
    return confirm("سيتم فتح تطبيق البريد الإلكتروني الخاص بجهازك. سيتم نسخ جميع المعلومات في مكانها الصحيح. اضغط موافق لإكمال العملية.");
}

// تغيير لون الروابط عند تمرير الماوس
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.color = '#ffd700';
    });
    link.addEventListener('mouseleave', () => {
        link.style.color = ''; // إعادة اللون الافتراضي
    });
});

// تأثير عند تمرير الماوس على الأزرار
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
    });
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});

// تأثير عند تحميل الصفحة على النص "Al Noor Group"
document.addEventListener('DOMContentLoaded', () => {
    const highlightText = document.getElementById('highlight-text');
    highlightText.style.opacity = '0';
    highlightText.style.transition = 'opacity 1.5s ease, transform 1.5s ease';
    setTimeout(() => {
        highlightText.style.opacity = '1';
        highlightText.style.transform = 'translateY(0)';
    }, 500); // تأخير بسيط قبل ظهور النص
});

// تأثير عند تحميل الموقع بالكامل
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    body.style.opacity = '0'; // إخفاء الموقع في البداية
    body.style.transition = 'opacity 1.5s ease'; // تأثير التلاشي التدريجي
    setTimeout(() => {
        body.style.opacity = '1'; // إظهار الموقع تدريجيًا
    }, 100); // تأخير بسيط قبل بدء التلاشي
});

// تأثير الكتابة السريع في قسم "عن الشركة" مع تشغيل الصوت عند ظهور القسم
document.addEventListener('DOMContentLoaded', () => {
    const aboutText = document.querySelector('#about p');
    const aboutSection = document.querySelector('#about');
    const textContent = aboutText.textContent;
    aboutText.textContent = ''; // تفريغ النص الأصلي

    const typingSound = new Audio('KTABA.mp3'); // تحميل الصوت
    let index = 0;
    let typingInterval;

    function startTyping() {
        if (index < textContent.length) {
            aboutText.textContent += textContent[index]; // إضافة الحرف التالي
            index++;
            typingSound.play(); // تشغيل الصوت
        } else {
            clearInterval(typingInterval); // إيقاف الكتابة عند الانتهاء
            typingSound.pause(); // إيقاف الصوت
            typingSound.currentTime = 0; // إعادة الصوت إلى البداية
        }
    }

    function stopTyping() {
        clearInterval(typingInterval); // إيقاف الكتابة
        typingSound.pause(); // إيقاف الصوت
        typingSound.currentTime = 0; // إعادة الصوت إلى البداية
    }

    function handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // عند ظهور القسم على الشاشة
                typingInterval = setInterval(startTyping, 10); // تسريع الكتابة (10ms لكل حرف)
            } else {
                // عند خروج القسم من الشاشة
                stopTyping(); // إيقاف الكتابة والصوت
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection, {
        root: null, // مراقبة القسم بالنسبة إلى نافذة العرض
        threshold: 0.1 // تشغيل الكتابة عندما يظهر 10% من القسم
    });

    observer.observe(aboutSection);
});

// تأثير الكتابة السريع في قسم "المنتجات" مع تشغيل الصوت عند ظهور القسم
document.addEventListener('DOMContentLoaded', () => {
    const productsText = document.querySelector('#products-text');
    const productsSection = document.querySelector('#services');
    const textContent = productsText.textContent;
    productsText.textContent = ''; // تفريغ النص الأصلي

    const typingSound = new Audio('KTABA.mp3'); // تحميل الصوت
    let index = 0;
    let typingInterval;

    function startTyping() {
        if (index < textContent.length) {
            productsText.textContent += textContent[index]; // إضافة الحرف التالي
            index++;
            typingSound.play(); // تشغيل الصوت
        } else {
            clearInterval(typingInterval); // إيقاف الكتابة عند الانتهاء
            typingSound.pause(); // إيقاف الصوت
            typingSound.currentTime = 0; // إعادة الصوت إلى البداية
        }
    }

    function stopTyping() {
        clearInterval(typingInterval); // إيقاف الكتابة
        typingSound.pause(); // إيقاف الصوت
        typingSound.currentTime = 0; // إعادة الصوت إلى البداية
    }

    function handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // عند ظهور القسم على الشاشة
                typingInterval = setInterval(startTyping, 10); // تسريع الكتابة (10ms لكل حرف)
            } else {
                // عند خروج القسم من الشاشة
                stopTyping(); // إيقاف الكتابة والصوت
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection, {
        root: null, // مراقبة القسم بالنسبة إلى نافذة العرض
        threshold: 0.1 // تشغيل الكتابة عندما يظهر 10% من القسم
    });

    observer.observe(productsSection);
});

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    function updateActiveLink() {
        let currentSection = null;

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                currentSection = section;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (currentSection && link.getAttribute('href') === `#${currentSection.id}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
});
