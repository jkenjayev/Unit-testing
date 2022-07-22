const products = require("../modules/object");

describe("Products", () => {
  it("should return product with the given id", () => {
    const product = products.getProduct(11);
    expect(product).toEqual({ id: 11, title: "banana", price: 2 });
    expect(product).toMatchObject({ id: 11, price: 2 });
    expect(product).toHaveProperty("price", 2);
  });
});
