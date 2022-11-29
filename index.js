//[Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

// Answers

////// 1. All the companies whose name match 'Babelgum'. Retrieve only their `name` field.

// Your Code Goes Here -->

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const filter = {
  name: "Babelgum",
};
const projection = {
  name: 1,
  _id: 0,
};

const client = await MongoClient.connect("mongodb://localhost:27017/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const coll = client.db("companiesDB").collection("companies");
const cursor = coll.find(filter, { projection, limit });
const result = await cursor.toArray();
await client.close();

////// 2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by **number of employees**.

// Your Code Goes Here -->

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const filter = {
  number_of_employees: {
    $gt: 5000,
  },
};
const sort = {
  number_of_employees: 1,
};
const limit = 20;

const client = await MongoClient.connect("mongodb://localhost:27017/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const coll = client.db("companiesDB").collection("companies");
const cursor = coll.find(filter, { sort, limit });
const result = await cursor.toArray();
await client.close();

////// 3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fields.

// Your Code Goes Here -->

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const filter = {
  $and: [
    {
      founded_year: {
        $gte: 2000,
      },
    },
    {
      founded_year: {
        $lte: 2005,
      },
    },
  ],
};
const projection = {
  name: 1,
  founded_year: 1,
  _id: 0,
};

const client = await MongoClient.connect("mongodb://localhost:27017/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const coll = client.db("companiesDB").collection("companies");
const cursor = coll.find(filter, { projection });
const result = await cursor.toArray();
await client.close();

////// 4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.

// Your Code Goes Here -->

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const filter = {
  $and: [
    {
      "ipo.valuation_amount": {
        $gt: 100000000,
      },
    },
    {
      founded_year: {
        $lt: 2010,
      },
    },
  ],
};
const projection = {
  name: 1,
  ipo: 1,
  _id: 0,
};

const client = await MongoClient.connect("mongodb://localhost:27017/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const coll = client.db("companiesDB").collection("companies");
const cursor = coll.find(filter, { projection });
const result = await cursor.toArray();
await client.close();

////// 5. All the companies that have less than 1000 employees and have been founded before 2005. Order them by the number of employees and limit the search to 10 companies.

// Your Code Goes Here -->
/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const filter = {
  $and: [
    {
      number_of_employees: {
        $lt: 1000,
      },
    },
    {
      founded_year: {
        $gt: 2005,
      },
    },
  ],
};
const sort = {
  number_of_employees: 1,
};
const limit = 10;

const client = await MongoClient.connect("mongodb://localhost:27017/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const coll = client.db("companiesDB").collection("companies");
const cursor = coll.find(filter, { sort, limit });
const result = await cursor.toArray();
await client.close();

////// 6. All the companies that don't include the `partners` field.

// Your Code Goes Here -->
/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const filter = {
  partners: {
    $exists: false,
  },
};

const client = await MongoClient.connect("mongodb://localhost:27017/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const coll = client.db("companiesDB").collection("companies");
const cursor = coll.find(filter);
const result = await cursor.toArray();
await client.close();

////// 7. All the companies that have a null type of value on the `category_code` field.

// Your Code Goes Here -->
/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const filter = {
  category_code: null,
};

const client = await MongoClient.connect("mongodb://localhost:27017/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const coll = client.db("companiesDB").collection("companies");
const cursor = coll.find(filter);
const result = await cursor.toArray();
await client.close();

////// 8. All the companies that have at least 100 employees but less than 1000. Retrieve only the `name` and `number of employees` fields.

// Your Code Goes Here -->
/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const filter = {
  $and: [
    {
      number_of_employees: {
        $gte: 100,
      },
    },
    {
      number_of_employees: {
        $lt: 1000,
      },
    },
  ],
};
const projection = {
  name: 1,
  number_of_employees: 1,
  _id: 0,
};

const client = await MongoClient.connect("mongodb://localhost:27017/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const coll = client.db("companiesDB").collection("companies");
const cursor = coll.find(filter, { projection });
const result = await cursor.toArray();
await client.close();
////// 9. Order all the companies by their IPO price in a descending order.

// Your Code Goes Here -->

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const filter = {};
const sort = {
  "ipo.valuation_amount": -1,
};

const client = await MongoClient.connect("mongodb://localhost:27017/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const coll = client.db("companiesDB").collection("companies");
const cursor = coll.find(filter, { sort });
const result = await cursor.toArray();
await client.close();
////// 10. Retrieve the 10 companies with most employees, order by the `number of employees`

// Your Code Goes Here -->

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const filter = {};
const sort = {
  number_of_employees: -1,
};
const limit = 10;

const client = await MongoClient.connect("mongodb://localhost:27017/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const coll = client.db("companiesDB").collection("companies");
const cursor = coll.find(filter, { sort, limit });
const result = await cursor.toArray();
await client.close();
////// 11. All the companies founded on the second semester of the year. Limit your search to 1000 companies.

// Your Code Goes Here -->
/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const filter = {
  $and: [
    {
      founded_month: {
        $lte: 12,
      },
    },
    {
      founded_month: {
        $gte: 7,
      },
    },
  ],
};
const limit = 1000;

const client = await MongoClient.connect("mongodb://localhost:27017/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const coll = client.db("companiesDB").collection("companies");
const cursor = coll.find(filter, { limit });
const result = await cursor.toArray();
await client.close();
////// 12. All the companies founded before 2000 that have an acquisition amount of more than 10.000.000

// Your Code Goes Here -->
/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const filter = {
  $and: [
    {
      founded_year: {
        $lt: 2000,
      },
    },
    {
      "acquisition.price_amount": {
        $gt: 10000000,
      },
    },
  ],
};

const client = await MongoClient.connect("mongodb://localhost:27017/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const coll = client.db("companiesDB").collection("companies");
const cursor = coll.find(filter);
const result = await cursor.toArray();
await client.close();

////// 13. All the companies that have been acquired after 2010, order by the acquisition amount, and retrieve only their `name` and `acquisition` field.

// Your Code Goes Here -->
/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const filter = {
  "acquisition.acquired_year": {
    $gt: 2010,
  },
};
const projection = {
  name: 1,
  acquisition: 1,
  _id: 0,
};
const sort = {
  "acquisition.price_amount": 1,
};

const client = await MongoClient.connect("mongodb://localhost:27017/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const coll = client.db("companiesDB").collection("companies");
const cursor = coll.find(filter, { projection, sort });
const result = await cursor.toArray();
await client.close();
////// 14. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.

// Your Code Goes Here -->
/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const filter = {};
const projection = {
  name: 1,
  founded_year: 1,
  _id: 0,
};
const sort = {
  founded_year: 1,
};

const client = await MongoClient.connect("mongodb://localhost:27017/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const coll = client.db("companiesDB").collection("companies");
const cursor = coll.find(filter, { projection, sort });
const result = await cursor.toArray();
await client.close();

////// 15. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their `acquisition price` in a descending order. Limit the search to 10 documents.

// Your Code Goes Here -->
/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const filter = {
  founded_month: {
    $lte: 7,
  },
};
const sort = {
  "acquisition.price_amount": -1,
};

const client = await MongoClient.connect("mongodb://localhost:27017/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const coll = client.db("companiesDB").collection("companies");
const cursor = coll.find(filter, { sort });
const result = await cursor.toArray();
await client.close();
////// 16. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascending order.

// Your Code Goes Here -->

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const filter = {
  $and: [
    {
      category_code: "web",
    },
    {
      number_of_employees: {
        $gt: 4000,
      },
    },
  ],
};
const sort = {
  number_of_employees: 1,
};

const client = await MongoClient.connect("mongodb://localhost:27017/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const coll = client.db("companiesDB").collection("companies");
const cursor = coll.find(filter, { sort });
const result = await cursor.toArray();
await client.close();

////// 17. All the companies whose acquisition amount is more than 10.000.000, and currency is 'EUR'.

// Your Code Goes Here -->
/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const filter = {
  $and: [
    {
      "acquisition.price_currency_code": "EUR",
    },
    {
      "acquisition.price_amount": {
        $gt: 10000000,
      },
    },
  ],
};

const client = await MongoClient.connect("mongodb://localhost:27017/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const coll = client.db("companiesDB").collection("companies");
const cursor = coll.find(filter);
const result = await cursor.toArray();
await client.close();
////// 18. All the companies that have been acquired on the first trimester of the year. Limit the search to 10 companies, and retrieve only their `name` and `acquisition` fields.

// Your Code Goes Here -->
/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const filter = {
  "acquisition.acquired_month": {
    $lte: 3,
  },
};
const projection = {
  name: 1,
  acquisition: 1,
  _id: 0,
};
const limit = 10;

const client = await MongoClient.connect("mongodb://localhost:27017/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const coll = client.db("companiesDB").collection("companies");
const cursor = coll.find(filter, { projection, limit });
const result = await cursor.toArray();
await client.close();
////// 19. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.

// Your Code Goes Here -->

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const filter = {
  $and: [
    {
      founded_year: {
        $gte: 2000,
      },
    },
    {
      founded_year: {
        $lt: 2010,
      },
    },
    {
      "acquisition.acquired_year": {
        $gt: 2011,
      },
    },
  ],
};

const client = await MongoClient.connect("mongodb://localhost:27017/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const coll = client.db("companiesDB").collection("companies");
const cursor = coll.find(filter);
const result = await cursor.toArray();
await client.close();
