module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');

    //Add the patterns and their corresponding functions
    this.add('role:product,cmd:getProductURL', productURL);
    this.add('role:product,cmd:getProductName', productName);


    //To DO: add the pattern functions and describe the logic inside the function
    function productURL(args,done){
        var productID = parseInt(args.productId);

        var product = mockData.find( product =>
            product.product_id === productID
            );
        console.log(productID);
            
        done(null, { result: product.product_url});

    }

    function productName(args,done){
        
        var productID = parseInt(args.productId);
        var product = mockData.find( product =>
            product.product_id === productID
            );
        console.log(productID);
        console.log(product);
        done(null, { result: product.product_name});

    }
}