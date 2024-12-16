const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const ratingInput = document.getElementById('rate');

form.addEventListener('submit', (event) => {
  // Kiểm tra email
  if (emailInput.value.trim() === "") {
    alert("Vui lòng nhập email.");
    event.preventDefault(); // Ngăn chặn form gửi đi
  }
  if (validateEmail(emailInput.value.trim()) === false) {
    alert("Vui lòng nhập đúng email.");
    event.preventDefault();
    return;
  }

  // Kiểm tra rating
  if (ratingInput.value.trim() === "") {
    alert("Vui lòng nhập đánh giá.");
    event.preventDefault();
  }
  if (validateRating(ratingInput.value.trim()) === false) {
    alert("Đánh giá phải là một số.");
    event.preventDefault();
    return;
  }

 
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validateRating(rating) {
  return !isNaN(rating);
}