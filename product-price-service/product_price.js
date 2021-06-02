module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');
    //To DO: Add the patterns and their corresponding functions
    // const GET_PRODUCT_PRICE = { role: 'product', cmd: 'getProductPrice' };
    this.add('role:product,cmd:getProductPrice', productPrice);
    //To DO: add the pattern functions and describe the logic inside the function
    function productPrice(args,done){
        var productID = parseInt(args.productId);
        
        console.log(productID)
        var product = mockData.find( product =>
            product.product_id === productID
            );
        done(null, { result: product.product_price});

    }
}