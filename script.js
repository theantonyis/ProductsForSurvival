$.ajax('https://my-json-server.typicode.com/theantonyis/ProductsForSurvival/products',{
	dataType: 'json',
	data: {},
	success: function(result){
		console.log(result);
		result.forEach(function(product){
			$('.products').append('<div class="product">' + '<div class="name">Name: ' + product.name + '</div>' + '<img src="'+ product.photo_url +'">' + '<div class="stats">Stats: ' + product.stats + '</div>' + '<div class="desc">Description: ' + product.desc + '</div>' + '<div class="price">Price: ' + product.price + '</div>' + '<input type="button" value="Buy" class="btn btn-buy"></input>' + '</div>');
		});
	},
	error: function(xhr){
		console.log(xhr.statusText)
	}
	});

// $(document).on('keypress', function(event) {
//     if(event.which == 13) {
//         event.preventDefault();
// 		$('#submit').click();
// 		$('#search').val('');
//     }
// });