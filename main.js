$(document).ready(function() {
	var sideLength = 10;
	createGrid(sideLength);

	/// Pick Random Color Function

	function pickColor() {
		var character = "0123456789abcdef";
		var color = "#";
		for(var i = 0; i < 6; i++) {
			color += character[Math.floor( Math.random() * 16 )];
		}
		return color;

	};


	///Create Box Grid Function (loop through)

	function createGrid(side) {

		var width = 800/side;

		for(var i = 0; i < side; i++) {
			$('<div></div>').appendTo(".container").addClass("boxCol").width(width).height(width);

			for(var j = 0; j < side-1; j++) {

				$('<div></div>').appendTo(".container").addClass("boxRow").width(width).height(width);

			}

		}

		$("div").on('mouseenter',function() {
			$(this).css( "background-color", pickColor() );
		});
	}

	
	///Create inital grid



	///Apply colour to hovered cells

	$("div").on('mouseenter',function() {
		$(this).css( "background-color", pickColor() );
	});

	///Resize Button
	$('.clear').on('click', function() {
		sideLength = prompt("Sidelength of the new grid? (default 16)");
		$('div').remove(".boxRow").remove(".boxCol");
		createGrid(sideLength);

	});

	///

});