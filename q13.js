//assgn1
db.orders.insertMany([
  {
    empid: 101,
    items: ["Laptop", "Mouse"],
    orderValue: 1500,
    status: "pending"
  },
  {
    empid: 102,
    items: ["Keyboard", "Monitor"],
    orderValue: 800,
    status: "shipped"
  },
  {
    empid: 103,
    items: ["Phone", "Earbuds"],
    orderValue: 1200,
    status: "delivered"
  }
]);
//assgn2
db.orders.aggregate([
  {
    $lookup: {
      from: "employees",       // The collection to join
      localField: "empid",     // Field from the orders collection
      foreignField: "_id",     // Field from the employees collection
      as: "employeeDetails"    // Name of the new array field to add
    }
  },
  {
    $unwind: "$employeeDetails" // Deconstructs the array to output a document for each element
  },
  {
    $project: {
      _id: 0,
      empid: 1,
      items: 1,
      orderValue: 1,
      status: 1,
      "employeeDetails.name": 1,
      "employeeDetails.email": 1
    }
  }
]);
