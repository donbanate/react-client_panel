const clients = [{ name: "x", bal: 2210 }, { name: "y", bal: 32 }];

const res = clients.reduce((total, currentValue) => {
  return total + parseFloat(currentValue.bal);
});

const total = { total: res };

console.log(total);
