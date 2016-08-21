$(document).ready(function() {

	// 1. Get all posts 

	$.get("http://jsonplaceholder.typicode.com/posts", function(data) {

		$('#allPostsList').hide();
		data.forEach(function(post) {

			var li = $('<li></li>');
			li.text(post.body);
			$('#allPostsList').append(li);
		})

		$('#allPosts').on('click', function() {
			$('#allPostsList').toggle();
		});

	});


	// 2. Get posts with id of 10

	$.get("http://jsonplaceholder.typicode.com/posts", {id: 10}, function(data) {

		$('#id10List').hide();
		var post = data[0];
		var li = $('<li></li>')
		li.text(post.body);
		$('#id10List').append(li);

		$('#id10').on('click', function() {
			$('#id10List').toggle();
		});
	
	});


	// 3. Get the comments from post with id of 12 

	$.get("http://jsonplaceholder.typicode.com/comments", {id: 12}, function(data) {

		$('#commentsId12List').hide();
		var post = data[0];
		var li = $('<li></li>')
		li.text(post.body);
		$('#commentsId12List').append(li);

		$('#commentsId12').on('click', function() {
			$('#commentsId12List').toggle();
		});
	
	});


	// 4. Get posts with id of 10

	$.get("http://jsonplaceholder.typicode.com/posts", {userId: 2}, function(data) {

		$('#postsUser2List').hide();
		data.forEach(function(post) {

			var li = $('<li></li>');
			li.text(post.body);
			$('#postsUser2List').append(li);
		})

		$('#postsUser2').on('click', function() {
			$('#postsUser2List').toggle();
		});
	
	});


	// 5. Create a new post and log the id generated for it by the server

	$.post("http://jsonplaceholder.typicode.com/posts", {
		// userId: 2,
		title: "Cheesy feet cream cheese dolcelatte.",
		body: "Cheese strings cheese triangles smelly cheese cheesecake blue castello cow caerphilly boursin. Squirty cheese jarlsberg macaroni cheese cauliflower cheese chalk and cheese smelly cheese fromage frais pepper jack."}, 
		function(data) {
			console.log("Button #5 results:")
			console.log(data);
			$('#newPostList').hide();
			// var post = data[0];
			var li = $('<li>See Console Log for results. Post ID listed as 101</li>')
			$('#newPostList').append(li);

			$('#newPost').on('click', function() {
				$('#newPostList').toggle();
			});
		});


	// 6. Replace the post with id of 12 and render the responseJSON

	$.ajax({
		method: 'PUT',
		url: 'http://jsonplaceholder.typicode.com/posts/12',
		data: {body: 'Cheese slices when the cheese comes out everybodys happy fondue airedale parmesan croque monsieur emmental fromage frais. Airedale rubber cheese st. agur blue cheese mozzarella croque monsieur port-salut swiss goat. Pecorino airedale.'},
		complete: function(data) {
			console.log("Button #6 results:")
			console.log(data.responseText);
			$('#replace12List').hide();
			// var post = data[0];
			var li = $('<li>See Console Log for results. Post ID #12 body updated</li>')
			$('#replace12List').append(li);

			$('#replace12').on('click', function() {
				$('#replace12List').toggle();
			})
		}
	});

	$.ajax({
		method: 'PUT',
		url: 'http://jsonplaceholder.typicode.com/posts/12',
		data: {title: 'Danish fontina babybel smelly cheese.'},
		complete: function(data) {
			console.log("Button #7 results:")
			console.log(data.responseText);
			$('#title12List').hide();
			// var post = data[0];
			var li = $('<li>See Console Log for results. Post ID #12 title updated</li>')
			$('#title12List').append(li);

			$('#title12').on('click', function() {
				$('#title12List').toggle();
			})
		}
	});


	var newObject = $.ajax({
		method: 'DELETE',
		url: 'http://jsonplaceholder.typicode.com/posts/12',
		complete: function(data) {
			console.log("Button #8 results:")
			console.log(data.responseText);
			$('#delete12List').hide();
			// var post = data[0];
			var li = $('<li>See Console Log for results. All post ID #12 content deleted</li>')
			$('#delete12List').append(li);

			$('#delete12').on('click', function() {
				$('#delete12List').toggle();
			})
		}
	});

});