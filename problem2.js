// show dbs
// use CustomerOrder

// db.customer
{
  customer: {
    custId: Number,
    phone: {
      areaCode: Number, // 3 digits
      number: Number // 7 digits
    },
    custName: {
      lastName: String,
      firstName: String
    },
    custAdd: {
      street: String,
      city: String,
      state: String, // 2 digits
      zip: String // 5 or 9 digits
    },
    creditLimit: Number,
    orders: [] // Array of orderNo values
  },
  order: {
    orderNo: Number,
    custId: Number, // From db.customer
    date: String, // yyyymmdd
    totalAmount: Number,
    tax: Number,
    deliverToAddress: {
      street: String,
      city: String,
      state: String, // 2 digits
      zip: String // 5 or 9 digits
    },
    deliverToPhone: {
      areaCode: Number, // 3 digits
      number: Number // 7 digits
    },
    itemsOrder: [{
      itemNo: Number, // itemNo values from db.items
      quantity: Number
    }]
  },
  items: {
    itemNo: Number,
    itemName: String,
    unitPrice: Number,
    qtyOnHand: Number,
    reorderPoint: Number,
    supply: {
      supplierNo: Number, // supplierNo values from db.suppliers
      unitCost: Number
    }
  },
  suppliers: {
    supplierNo: Number,
    supName: String,
    phone: {
      countryCode: Number,
      areaCode: Number, // 3 digits
      number: Number // 7 digits
    },
    supAdd: {
      street: String,
      city: String,
      state: String, // 2 digits
      zip: String,
      country: String
    },
    contactName: String,
    items: [] // itemNo values from db.items
  }
}
