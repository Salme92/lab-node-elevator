const Elevator = require('./elevator.js');
const person = require('./person.js');

const newElevator = new Elevator();
const waitingList = [];

const Alberto = new person("Alberto", 0, 5);
const Adrian = new person("Adrian", 3, 7);
const Marc = new person("Marc", 6, 2);
const ManuAvello = new person("ManuAvello", 1, 9);
const ManuDelPino = new person("ManuDelPino", 3, 10);
const Yaiza = new person("Yaiza", 1, 8);
const Victor = new person("Victor", 0, 6);

newElevator.start();

newElevator.start();
newElevator.call(Alberto);
newElevator.call(Adrian);
newElevator.call(Marc);
newElevator.call(ManuAvello);
newElevator.call(ManuDelPino);
newElevator.call(Yaiza);
newElevator.call(Victor);  

newElevator.stop();
