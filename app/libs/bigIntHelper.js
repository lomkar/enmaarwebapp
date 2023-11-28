const { BigDecimal } = require("bigdecimal");

export const convertToBigInt = (decimal)=> {
  const maticValue = new BigDecimal(decimal);
  console.log(maticValue.toString());
  return decimal;
}
