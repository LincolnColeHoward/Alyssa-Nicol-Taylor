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
		for (var prop in form)
			data [prop] = form [prop].value;
		POST ("/contact", data, function success () {
			flashMessage ("Thanks for the message - we will get back to you shortly!").classList.add ("text-success");
			for (var prop in form)
				form [prop].value = "";
		}, function err () {
			flashMessage ("Uh oh - something went wrong!").classList.add ("text-danger");
		});
	}, false);
}
contactConfig ();