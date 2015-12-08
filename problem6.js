db.thing.aggregate(
  [
    {
      $unwind: '$items'
    },
    {
      $unwind: '$supply'
    },
    {
      $match: {
        supplierNo: 'S123'
      }
    },
    {
      $unwind: '$order'
    },
    {
      $match: {
        '$itemsOrder.itemNo': '$itemNo'
      }
    },
    {
      $match: {
        '$customer.custId': '$custId'
      }
    },
    {
      $group: {
        _id: '$itemNo',
        custName: '$customer.custName',
        qty: '$itemsOrder.quantity'
      }
    }
  ]
)
