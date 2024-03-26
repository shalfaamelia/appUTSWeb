// Java Script login.html
const form = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Email dan Password yang Valid
    const correctEmail = 'shalfaamelia@gmail.com';
    const correctPassword = '233307090';

    // Validasi Email dan Password
    if (emailInput.value !== correctEmail) {
        document.getElementById("response").innerHTML = "Username atau Password Salah, Silahkan Ulangi Kembali!";
    }  else if (passwordInput.value !== correctPassword) {
        document.getElementById("response").innerHTML = "Username atau Password Salah, Silahkan Ulangi Kembali!";
    } else {
        document.getElementById("response")
        alert ("Anda Berhasil Login! Klik OK Untuk Melanjutkan Order!");
        window.location.href = 'order.html';
    }
});

// Java Script order.html
function calculateTotal() {
  const total = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).reduce((total, checkbox) => {
    return total + parseInt(checkbox.value);
  }, 0);

  document.getElementById('total').innerText = total;
}
calculateTotal();