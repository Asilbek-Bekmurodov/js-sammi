// const firstName = prompt("Your name", "");

// const reg = /a/gi;
// i - katta harflarni ham qo'shib qidiradi

// console.log(firstName.search(reg));
// search methodi faqat birinchi topgan harf indexini qaytaradi

// console.log(firstName.match(reg));
// match metodi bir nechta harflarni array ko'rinishida qaytaradi agarda /g/ ishlatgan bo'lsak

// parolni heshlash

// ---------------------**********-------------------
// ---------------------**********-------------------

// const password = prompt("Your password", "");

// console.log(password.replace(/./g, "*"));

// ---------------------**********-------------------
// ---------------------**********-------------------
// special character

// const password = prompt("Your password", "");

// console.log(password.replace(/\$/g, "*"));
// faqat dollar belgisini keshlash

// ---------------------**********-------------------
// ---------------------**********-------------------

// const num = "123-12-41-41";
// console.log(num.replace(/-/g, ":"));

// ---------------------**********-------------------
// ---------------------**********-------------------
// test method

// const name = prompt("name", "");

// const regexp = /mar/gi;

// // console.log(regexp.test(name));

// if (regexp.test(name)) {
//   console.log("welcome samar");
// } else {
//   console.log("you are not admin");
// }

// ---------------------**********-------------------
// ---------------------**********-------------------

// \d - faqat sonlarni
// \w - faqat so'zlarni
// \s - faqat bo'sh joylarni

// \d - not a number
// \w - not a string
// \s - not a space

// const name = prompt("name", "");

// const regexp = /\s/gi;

// console.log(name.match(regexp));
