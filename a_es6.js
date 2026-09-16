function greet(name, faculty) {
  return "สวัสดี " + name + " จากคณะ " + faculty + "!";
}
console.log(greet("ฟ้า", "CITU"));

const greet_modern = (name, faculty) => `สวัสดี ${name} จากคณะ ${faculty}!`;
console.log(greet_modern("ฟ้า", "วิศวกรรมศาสตร์"));
 
const student = { name: "ฟ้า", faculty: "CITU", year: 2 };
const { name, faculty } = student; 
const updated = { ...student, year: 3 }; 
console.log(name, faculty, updated);