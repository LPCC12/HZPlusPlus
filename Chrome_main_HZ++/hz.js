javascript:(function()
    {
		
		//Icon
		
		var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
		link.type = 'image/x-icon';
		link.rel = 'shortcut icon';
		link.href = 'https://pt2-dshz.netlify.com/exthelper/icon.ico';
		document.getElementsByTagName('head')[0].appendChild(link);

		//Muda logo ao fds
		var d = new Date();
		var n = d.getDay();

		if(n==6 || n==0){
			var plusLinks = document.querySelectorAll('.logo');
			var firstLink = plusLinks[0];
			firstLink.setAttribute('class', 'logo_fds');
		}
		
}
)();


