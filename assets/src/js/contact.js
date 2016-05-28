function contactConfig () {
	var form = {
		name: document.querySelector ("#contactName"),
		email: document.querySelector ("#contactEmail"),
		subject: document.querySelector ("#contactSubject"),
		message: document.querySelector ("#contactMessage")
	}
	var submit = document.querySelector ("#contactSubmit");
	var modal = document.querySelector ("#modal");
	submit.addEventListener ("click", function () {
		var data = {};
		for (var prop in form) {
			data [prop] = form [prop].value;
			form [prop].value = "";
		}
		POST ("/contact", data, function success () {
			modal.DOM ("div.text-center").innerHTML = "Thanks for the message - we will get back to you shortly!";
			modal.className = "modal show";
		}, function err () {
			modal.DOM ("div.text-center").innerHTML = "Uh oh- something went wrong!";
			modal.className = "modal show";
		});
	}, false);
}
contactConfig ();