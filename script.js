$.ajax("https://my-json-server.typicode.com/theantonyis/ProductsForSurvival/products",{
        success: function(result){
            console.log(result);
            result.forEach(function(product){
                $(".products").append('<div class="product">' + product.name + ":" + product.stats + '</div>');
            })
        },
        error: function(xhr){
            console.log(xhr.statusText);
        }
    })