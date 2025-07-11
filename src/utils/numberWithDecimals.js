const numberWithDecimals = (number, decimals = 2) => {
  if (number === undefined || number === null || isNaN(number)) {
    return "0.00";
  }

  const num = typeof number === "string" ? parseFloat(number) : number;

  return num.toFixed(decimals);
};

export { numberWithDecimals };
