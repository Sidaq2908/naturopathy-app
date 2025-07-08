// generate-time.cjs (must end in .cjs)
const fs = require("fs");

const now = new Date();
const istTime = now.toLocaleString("en-IN", {
  timeZone: "Asia/Kolkata",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});
const formattedTime = istTime.replace(",", "") + " IST";

fs.writeFileSync(".env", `VITE_BUILD_TIME="${formattedTime}"\n`);

console.log(`✅ Generated build time (IST): ${formattedTime}`);
