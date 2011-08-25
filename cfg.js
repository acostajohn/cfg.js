/**
 * cfg.js: Parse configuration data from markup
 * 
 * Copyright (c) 2011, John Acosta - @John_Acosta <wwww.jseros.com>
 * All rights reserved.
 * License: http://www.opensource.org/licenses/BSD-2-Clause
 */
(function(global){

var Cfg = function(element, attribute){
	
	/**
	 * DOM Node to apply configuration
	 * @private
	 **/
	var el = element,
	
	/**
	 * Reference to myself
	 * @private
	 **/
	self = this,
	
	/**
	 * Defines attribute where I can find the configuration data
	 * @private
	 **/	
	cfgAttribute = attribute || 'cfg',
		
	/**
	 * @constructor
	 **/
	init = function(){
		if( !el || el.nodeType !== 1 ){
			var script = resolve();
			
			if( script ){
				el = script;
			}
		}
		
		mixin( getData(el) );
	},
	
	/**
	 * Fetches configuration data
	 * @private
	 * @param  {HTMLElement} el DOM Element to extract data
	 * @returns {JSON} JSON notation
	 **/
	getData = function(el){
		return parse( 'dataset' in el ? 
			el.dataset[ cfgAttribute ] : 
			el.getAttribute('data-'+ cfgAttribute )
		);
	},
	
	/**
	 * Parse data and returns its json notation
	 * @private
	 * @param {String} data String extrated from markup
	 * @returns {Object} Native object representation of the configuration data
	 **/
	parse = function( data ){
		return data ? eval('({' + data + '})') : null;
	},
	
	/**
	 * Mix an object with myself :P
	 * @private
	 * @param {Object} data Set of properties to mix with the object
	 **/
	mixin = function(data){
		if( !data || typeof data !== 'object' ) return;
		
		for(var prop in data){
			if( data.hasOwnProperty( prop ) && !(prop in self) ){
				self[prop] = data[prop];
			}
		}
	},
	
	/**
	 * Get reference to last loaded tag script
	 * @private
	 * @param {String} data String extrated from markup
	 **/
	resolve = function(){
		var scripts = document.getElementsByTagName('script');
		return scripts[ scripts.length - 1 ];
	};
	
	// go!
	init();
}; 


// Initializing global configuration
Cfg.config = new Cfg();

//Exporting globals
global.Cfg = Cfg;

})(this);
