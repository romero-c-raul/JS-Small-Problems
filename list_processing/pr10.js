/*
ALGORITHM
  - Create a new object that tallies quantity left of each transaction, based on id
  - Iterate through each transaction
    - If the movement is in, increase value by the quantity
    - If the movement is out, decrease value by the quantity

  - Filter each transaction based on the value on the tally
    - return true if desired transaction has a value greater than 0 on the tally

 */

function transactionsFor(id, transactions) {
  return transactions.filter(transaction => {
    return transaction.id === id
  })
}

// function isItemAvailable(id, transactions) {
//   let relevantTransactions = transactionsFor(id, transactions);

//   let totalItems = relevantTransactions.reduce((total, transaction) => {
//     if (transaction.movement === 'in') {
//       total += transaction.quantity;
//     } else {
//       total -= transaction.quantity;
//     }

//     return total;
//   }, 0)

//   return totalItems > 0;
// }

function isItemAvailable(id, transactions) {
  let relevantTransactions = transactionsFor(id, transactions);
  let finalQuantity = 0;

  relevantTransactions.forEach(transaction => {
    if (transaction.movement === 'in') {
      finalQuantity += transaction.quantity;
    } else {
      finalQuantity -= transaction.quantity;
    }
  })

  return finalQuantity;
}

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true

