/* h5component.js */
var H5componentBase = function(name,cfg){
	var cfg = cfg || {};
	var id = ("h5_c_"+Math.random()).replace(".","_");
	var cls = "h5_component_"+cfg.type;
	var component = $("<div class='h5_component "+cls+" h5_component_name_"+name+"' id='"+id+"'>");
	//+" h5_component_name_"+name
	cfg.text && component.text(cfg.text);
	cfg.width && component.width(cfg.width/2);
	cfg.height && component.height(cfg.height/2);
	cfg.css && component.css(cfg.css);
	cfg.bg && component.css("backgroundImage","url("+cfg.bg+")");

	if (cfg.center===true) {
		component.css({
			marginLeft:(cfg.width/4*-1)+"px",
			left:'50%'
		})
	}

	if (typeof cfg.onclick == 'function') {
		component.on('click',cfg.onclick);
	}

	component.on('onLoad',function(){
		setTimeout(function(){
			component.addClass(cls+'_load').removeClass(cls+'_leave');
			cfg.animateIn && component.animate(cfg.animateIn);
			return false;
		},cfg.delay||0);
	})
	component.on('onLeave',function(){
		component.addClass(cls+'_leave').removeClass(cls+'_load');
		cfg.animateOut && component.animate(cfg.animateOut);
		return false;
	})

	return component;
}