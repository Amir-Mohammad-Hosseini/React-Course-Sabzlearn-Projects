  const calculateSumProductsPrice = (products) => {
    const sumProductsPrice = products.reduce((acc, current) => {
      return acc + Number(current.price);
    }, 0);
    return sumProductsPrice;
  };
export default calculateSumProductsPrice