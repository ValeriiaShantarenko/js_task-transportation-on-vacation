/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyPrice = 40;
  let cost = dailyPrice * days;

  if (days >= 7) {
    cost = cost - 50;
  } else if (days >= 3 && days < 7) {
    cost = cost - 20;
  }

  return cost;
}

module.exports = calculateRentalCost;
