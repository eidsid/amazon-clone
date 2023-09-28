export const getAllCost = (BasktItems) => {
  let AllCost = 0;
  BasktItems.forEach((item) => (AllCost += item.price * Number(item.count)));

  return AllCost;
};
