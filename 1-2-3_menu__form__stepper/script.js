// ========== Секция-1: МЕНЮ ==============

let mnu = document.querySelectorAll('span');
mnu.forEach(span => {
  span.addEventListener('click', function () {
    mnu.forEach(span => span.classList.remove('active'));
    this.classList.add('active');
    // __ ВЫВОЖУ СПИСОК СПАНОВ С АКТИВНЫМ СПАНОМ ПРИ НАЖАТИИ __
    console.log("__mnu__", mnu);
  });
});

// ========== Секция-3: СТЕППЕР ==============

let st = document.querySelectorAll('li');

// __ ДЕЛАЮ АКТИВНЫМ ВТОРОЙ ЭЛЕМЕНТ МАССИВА __
st[1].classList.add('active');

st.forEach(li => {
  li.addEventListener('click', function () {
    st.forEach(li => li.classList.remove('active'));
    this.classList.add('active');
    // __ ВЫВОЖУ СПИСОК < LI > С АКТИВНЫМ ЭЛЕМЕНТОМ __
    console.log(st);
  });
});
