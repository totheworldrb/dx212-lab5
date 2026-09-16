function greet(name, faculty) {
  return "สวัสดี " + name + " จากคณะ " + faculty + "!";
}
console.log(greet("ฟ้า", "วิศวกรรมศาสตร์"));

const greet_modern = (name, faculty) => `สวัสดี ${name} จากคณะ ${faculty}!`;
console.log(greet_modern("ฟ้า", "วิศวกรรมศาสตร์"));
