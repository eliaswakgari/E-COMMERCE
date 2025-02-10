const productModel = require("../model/productModel");

const addProduct = async (req, res) => {
  console.log('Request body:', req.body);
  console.log('Request file:', req.file);
  try {
    let products = await productModel.find({}); //array
    let id;
    if (products.length > 0) {
      let last_product_array = products.slice(-1);
      let last_product = last_product_array[0];
      id = last_product.id + 1;
      console.log(products);
    } else {
      id = 1;
    }
    console.log(products);
    const product = new productModel({
      id: id,
      name: req.body.name,
      image: req.body.image,
      category: req.body.category,
      new_price: req.body.new_price,
      old_price: req.body.old_price,
    });
    console.log(product);

    await product.save();
    return res.status(200).json({ success: true, message: "product added" });
  } catch (error) {
    console.log("error : ", error.message);

    return res.status(500).json({ success: false, message: "Server error" });
  }
};
const removeProduct = async (req, res) => {
  await productModel.findOneAndDelete({ id: req.body.id });
  console.log("removed");
  return res.json({ success: false, message: "product removed." });
};
const getAllProduct = async (req, res) => {
  try {
    const product = await productModel.find({});
    console.log("all product :", product);
    return res.status(201).json({ success: true, product });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};
const updateProduct = async (req, res) => {
  try {
    // Ensure you have both the filter and the update data
    const { id, ...updateData } = req.body;

    // Update the product and return the updated document
    const product = await productModel.findOneAndUpdate(
      { id }, // Filter: find product by id
      updateData, // Update data: fields to update
      { new: true, useFindAndModify: false } // Options: return updated document
    );
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};
module.exports = {
  addProduct,
  removeProduct,
  getAllProduct,
  updateProduct,
};
