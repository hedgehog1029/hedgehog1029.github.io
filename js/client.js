document.addEventListener("DOMContentLoaded", function() {
	var parent = document.getElementById("blog");

	var req = new XMLHttpRequest();
	req.open("GET", "http://garden.offbeatwit.ch/blog");

	req.addEventListener("load", function(e) {
		var data = JSON.parse(req.response);

		data.res.posts.forEach(function(post) {
			var po = document.createElement("div"),
				h = document.createElement("h2"),
				p = document.createElement("p");

			h.innerHTML = post.title;
			p.innerHTML = post.body;

			po.className = "post";
			po.appendChild(h);
			po.appendChild(p);

			parent.appendChild(po);
		});
	});

	req.send();
});
