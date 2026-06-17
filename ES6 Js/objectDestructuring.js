// old method

const signupData = {username:"Kishan_sir",email:"kishan@gmail.com",role:"Admin",};
const login = {username:"Kishan_sir",email:"kishan@gmail.com",role:"Admin",};
const un = signupData.username;
const em = signupData.email;
console.log('old method');
console.log(`username : ${un}`);
console.log(`email : ${em}`);

// new ES6 method

const {username,email} = signupData
console.log('new method');

console.log(username);
console.log(email);

const {username:loginuser,email:loginemail} = login
console.log('new method');

console.log(loginuser);
console.log(loginemail);