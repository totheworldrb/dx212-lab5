const buses = [
    { route: "NGV-1", passengers: 45, late: false },
    { route: "NGV-2", passengers: 62, late: true },
    { route: "NGV-3", passengers: 38, late: true },
    { route: "NGV-4", passengers: 51, late: false },
];

const busMessages = buses.map(bus => `${bus.route} มีผู้โดยสาร ${bus.passengers} คน`);
console.log("Map:", busMessages);

const lateBuses = buses.filter(bus => bus.late === true);
console.log("Filter:", lateBuses);

const totalPassengers = buses.reduce((sum, bus) => sum + bus.passengers, 0);
console.log("Reduce (Total):", totalPassengers);

const totalLatePassengers = buses.filter(bus => bus.late === true).reduce((sum, bus) => sum + bus.passengers, 0);
console.log("Chain (Total Late):", totalLatePassengers);
