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
		var opts = {
			data: data,
			cb: function () {
				if (ga) ga ("send", "event", "Contact", "submit", "success");
				
				flashMessage ("Thanks for the message - we will get back to you shortly!").classList.add ("text-success");
				for (var prop in form)
					form [prop].value = "";
			},
			err: function () {
				if (ga) ga ("send", "event", "Contact", "submit", "error");
				
				flashMessage ("Uh oh - something went wrong!").classList.add ("text-danger");
			}
		}
		POST ("/contact", opts);
	}, false);
}
contactConfig ();