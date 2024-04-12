let now = new Date();
console.log(now);

// get year
console.log(now.getFullYear());
// get month
console.log(now.getMonth() + 1);
// get day
console.log(now.getDay());
// get time
console.log(now.getTime());
// set time
console.log(now.setHours(14));
console.log(now);

// to string
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());
