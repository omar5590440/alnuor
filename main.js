document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('تم إرسال رسالتك بنجاح! سنقوم بالتواصل معك قريباً.');
            form.reset();
        });
    }
});
