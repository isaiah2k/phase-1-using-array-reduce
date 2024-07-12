const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Uses reduce to add everything in batteryBatches array and turn it into a new totalBatteries array
const totalBatteries = batteryBatches.reduce((accumulator, currentValue) => accumulator + currentValue, 0)