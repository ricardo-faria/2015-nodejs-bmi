var BMIService = {

	getIndex: function(weight, height, callback) {
		$.ajax({
		  url: '/api/bmi',
		  data: {'weight': weight, 'height': height},
		  success: function(result) {
		  	callback(result);
		  },
		  error: function() {
		  	callback(null);
		  }
		});
	},
	
	getDescription: function (index) {
		
		return "";
	}
	
};