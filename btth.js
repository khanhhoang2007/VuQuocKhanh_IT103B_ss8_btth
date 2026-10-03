// 1. Khoi tao hang doi voi 3 xe ban dau
const waitingQueue = ["30A-111", "29B-222", "51C-333"];

console.log("Hang doi ban dau:", waitingQueue);

// 2. Them xe moi vao cuoi hang doi bang push()
console.log("Truoc khi them xe moi:", waitingQueue);
waitingQueue.push("43D-444");
console.log("Sau khi them xe moi:", waitingQueue);

// 3. Kiem tra xe uu tien da co trong hang doi chua bang includes()
console.log("Truoc khi chen xe uu tien:", waitingQueue);

if (!waitingQueue.includes("14A-999")) {
  // Chen xe uu tien vao chi so 1 bang splice()
  waitingQueue.splice(1, 0, "14A-999");
}

console.log("Sau khi chen xe uu tien:", waitingQueue);

// 4. Tim vi tri xe uu tien bang indexOf()
const priorityIndex = waitingQueue.indexOf("14A-999");
console.log("Vi tri xe uu tien:", priorityIndex);

// 5. Lay xe dau hang doi vao cong sac bang shift()
console.log("Truoc khi dieu phoi:", waitingQueue);
const chargingVehicle = waitingQueue.shift();
console.log("Xe duoc dieu phoi vao sac:", chargingVehicle);
console.log("Sau khi dieu phoi:", waitingQueue);

// 6. Tinh tong dien nang tieu thu trong ca truc
const chargingSessionsKwh = [30, 45, 25];
const chargingRate = 4500;
let totalKwh = 0;

for (let i = 0; i < chargingSessionsKwh.length; i++) {
  totalKwh += chargingSessionsKwh[i];
}

console.log("Tong dien nang:", totalKwh, "kWh");

// 7. Tinh doanh thu ca truc
const totalRevenue = totalKwh * chargingRate;
console.log("Don gia:", chargingRate, "VND/kWh");
console.log("Tong doanh thu:", totalRevenue, "VND");
