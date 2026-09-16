const team = [
    { name: "ฟ้า", role: "PO", tasksDone: 5 },
    { name: "ต้น", role: "Dev", tasksDone: 8 },
    { name: "มายด์", role: "SM", tasksDone: 3 },
    { name: "เจ", role: "Dev", tasksDone: 6 },
];

const teamRoles = team.map(member => `${member.name} (${member.role})`);
console.log("1. Map:", teamRoles);

const devOnly = team.filter(member => member.role === "Dev");
console.log("2. Filter (Dev):", devOnly);

const totalTasks = team.reduce((sum, member) => sum + member.tasksDone, 0);
console.log("3. Reduce (Total Tasks):", totalTasks);

const devTasks = team.filter(member => member.role === "Dev").reduce((sum, member) => sum + member.tasksDone, 0);
console.log("4. Chain (Dev Tasks):", devTasks);