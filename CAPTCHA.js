
document.addEventListener('DOMContentLoaded', function() {

    const captchaContainer = document.getElementById('captcha');
    const captchaStatus = document.getElementById('captcha-status');


    const captchaBox = document.createElement('div');
    captchaBox.className = 'captcha-box';
    captchaBox.textContent = '点击我！';

    captchaContainer.appendChild(captchaBox);

    captchaBox.addEventListener('click', function() {
        if (captchaStatus.value === 'false') {
            captchaBox.textContent = '已验证！';
            captchaBox.classList.add('clicked');
            captchaStatus.value = 'true';
        }
    });
});
