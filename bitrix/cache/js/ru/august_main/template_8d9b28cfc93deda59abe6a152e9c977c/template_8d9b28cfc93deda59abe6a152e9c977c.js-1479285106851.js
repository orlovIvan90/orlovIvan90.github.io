
; /* Start:"a:4:{s:4:"full";s:93:"http://www.avgust.com/bitrix/templates/.default/components/bitrix/menu/top_depo_multilevel/script.js?1464262716469";s:6:"source";s:79:"../../../../../templates/.default/components/bitrix/menu/top_depo_multilevel/script.js"/*tpa=http://www.avgust.com/bitrix/templates/.default/components/bitrix/menu/top_depo_multilevel/script.js*/;s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var jshover = function()
{
	var menuDiv = document.getElementById("horizontal-multilevel-menu")
	if (!menuDiv)
		return;

	var sfEls = menuDiv.getElementsByTagName("li");
	for (var i=0; i<sfEls.length; i++) 
	{
		sfEls[i].onmouseover=function()
		{
			this.className+=" jshover";
		}
		sfEls[i].onmouseout=function() 
		{
			this.className=this.className.replace(new RegExp(" jshover\\b"), "");
		}
	}
}

if (window.attachEvent) 
	window.attachEvent("onload", jshover);
/* End */
;; /* /bitrix/templates/.default/components/bitrix/menu/top_depo_multilevel/script.js?1464262716469*/
