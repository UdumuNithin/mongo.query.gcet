//assgn1
db.employees.aggregate([
  { $sort: { salary: -1 } },
  { $limit: 3 }
]);
//assgn2
db.employees.aggregate([
  {
    $project: {
      name: 1,
      email: 1,
      monthlySalary: "$salary",
      annualSalary: { $multiply: ["$salary", 12] }
    }
  }
]);
//assgn3
db.employees.aggregate([
  {
    $project: {
      name: 1,
      age: 1,
      band: {
        $cond: { if: { $gt: ["$age", 40] }, then: "A", else: "B" }
      }
    }
  }
]);