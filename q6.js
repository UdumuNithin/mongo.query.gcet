//assgn1
db.employees.updateOne(
  { email: "john@gmail.com" },
  { $set: { email: "john@outlook.com" } }
);
//assgn2
db.employees.find().sort({ salary: -1 }).limit(3);
//assgn3
db.employees.find().sort({ salary: -1 }).limit(3);
//assgn4
db.employees.updateMany(
  {},
  { $inc: { salary: 1000 } }
);
//assgn5
db.employees.insertOne({
  name: "Alice",
  email: "alice@company.com",
  dept: "admin",
  salary: 4000
});