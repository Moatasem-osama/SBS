const form = document.querySelector('.form');
const submitBtn = form.querySelector('button[type="submit"]');

const scriptURL = 'https://script.google.com/macros/s/AKfycbxGAUjXjDsGpw0xYghSVp_JobrxG2vzoOslMquJJG2L5JetywRPPGwA__e47vCm4VnN/exec';

form.addEventListener('submit', (e) => {
  e.preventDefault();

  submitBtn.disabled = true;
  submitBtn.textContent = 'جاري الإرسال...';

  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    gender: document.getElementById('gender').value,
    event: document.getElementById('event').value
  };

  fetch(scriptURL, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(() => {
    alert('تم تسجيل حضورك بنجاح!');
    form.reset();
  })
  .catch((error) => {
    console.error('Error!', error.message);
    alert('حدث خطأ أثناء الإرسال، يرجى المحاولة مرة أخرى.');
  })
  .finally(() => {
    submitBtn.disabled = false;
    submitBtn.textContent = 'أرسل الآن';
  });
});