/**
 * cfg.js: Parse configuration data from markup
 * 
 * Copyright (c) 2011, John Acosta - @John_Acosta <wwww.jseros.com>
 * All rights reserved.
 * License: http://www.opensource.org/licenses/BSD-2-Clause
 */
(function(global){

var Cfg = function(element, attribute){	
	var el = element,
	
	cfgAttribute = attribute || 'cfg',
		
	init = function(){
		if( !el || el.nodeType !== 1 ){
			var script = resolve();
			
			if( script ){
				el = script;
			}
		}
		
		mixin( getData(el) );
	},
	
	getData = function(el){
		return parse( 'dataset' in el ? 
						el.dataset[ cfgAttribute ] : 
						el.getAttribute('data-'+ cfgAttribute )
				);
	},
	
	parse = function( data ){
		if( !data ) return null;
		
		return eval('({' + data + '})');
	},
	
	mixin: function(data){
		if( !data || typeof data !== 'object' ) return;
		
		for(var prop in data){
			if( data.hasOwnProperty( prop ) && !(prop in this) ){
				this[prop] = data[prop];
			}
		}
	},
	
	resolve: function(){
		var scripts = document.getElementsByTagName('script');
		return scripts[ scripts.length - 1 ];
	};
	
	
	this.resolve = resolve;
	
	// go!
	init();
}; 


/**
 * Initializing global configuration
 */
Cfg.initGlobal = function(){	
	var script = Cfg.prototype.resolve();
	
	if( script ){
		Cfg.config = new Cfg(script);
	}
};


// Storing global configuration
Cfg.initGlobal();

//Exporting globals
global.Cfg = Cfg;

})(this);
