window.attachEvent('onload', mmwidth);  
window.attachEvent('onresize', mmwidth);  
function mmwidth(){  
	document.getElementById('wrapper').style.width = ((document.documentElement.clientWidth ||  
	document.body.clientWidth) < 1002) ? '1002px' :  
	((document.body.clientWidth > 1002) ? 'auto' : 'auto');
};