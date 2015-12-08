db.thing.aggregate(
  {
    $unwind: '$order'
  },
  {
    $unwind: '$itemsOrder'
  }
  {
    $match: {
      itemNo: 'Widget13'
    }
  },
  {
    $unwind: '$customer'
  },
  {
    $match: {
      custId: '$order.custId'
    }
  },
  {
    $group: {
      _id: '$custId',
      custName: '$custName',
      qty: '$qty'
    }
  }
)
