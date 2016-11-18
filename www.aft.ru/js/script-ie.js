window.attachEvent('onload', mmwidth);  
window.attachEvent('onresize', mmwidth);  
function mmwidth(){  
	document.getElementById('main-wrapper').style.width = ((document.documentElement.clientWidth ||  
	document.body.clientWidth) < 1000) ? '1000px' :  
	((document.body.clientWidth > 1000) ? 'auto' : 'auto');
};
DD_belatedPNG.fix('#play_button');