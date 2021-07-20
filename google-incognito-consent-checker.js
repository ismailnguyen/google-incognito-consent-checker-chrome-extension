var checkConsents = function () {
	if (!document || !document.location || !document.location.origin) return;
	
	var locationOrigin = document.location.origin;

	// Youtube
	if (locationOrigin.indexOf('youtube.com') > -1) {
		// Homepage
		if (document.querySelector('*[aria-label^="Agree"]'))
			document.querySelector('*[aria-label^="Agree"]').click();

		// Video page
		if (document.querySelector('*[aria-label^="No "]'))
			document.querySelector('*[aria-label^="No "]').click();
	}
		
	// Google
	if (locationOrigin.indexOf('google.com') > -1) {
		// Search page
		if (document.getElementById('zV9nZe'))
			document.getElementById('zV9nZe').click();
	}
	
	// Facebook
	if (locationOrigin.indexOf('facebook.com') > -1) {
		// Login popin
		if (document.getElementById('expanding_cta_close_button'))
			document.getElementById('expanding_cta_close_button').click();
		
		// Cookie consent
		if (document.querySelector('*[data-cookiebanner^="accept_button"]'))
			document.querySelector('*[data-cookiebanner^="accept_button"]').click();
	}	
}

window.addEventListener('load', (event) => {
  checkConsents();
});
