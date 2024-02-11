const hobby = [];
const checked = form.querySelectorAll('input[type="checkbox"]:checked');
checked.forEach((elem) => {
  hobby.push(elem.value);
});

const data = {
  username: form.username.value,
  gender: form.gender.value,
  birthYear: form.birthYear.value,
  birthMonth: form.birthMonth.value,
  birthDay: form.birthDay.value,
  hobby,
};
