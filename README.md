# Cfg.js #

Cfg.js is a small javacript tool that allows you to parse configuration data from DOM elements using HTML5 custom attributes.

## Features

* HTML5 Custom attributes support
* Contextual configuration using script tags
* Independant of others libraries
* Global and local configuration
* JSON notation for configuration
* Inspired by Dojo Toolkit's djConfig module < http://dojotoolkit.org/reference-guide/djConfig.html#djconfig >

## Usage

index.html

	<html>
		<head>
			<title>CfgJS Example</title>
			
			<!-- Global configuration -->
			<script type="text/javascript" src="cfg.js" 
				dojo-cfg="modulesPath:'../application/modules/', listItems: 50, slideshow: {duration: 500, easing: 'backInOut'}"></script>
		
			<!-- Specific script configuration -->
			<script type="text/javascript" src="footer.js" 
				dojo-cfg="animation:{ duration: 100, properties: {height: 500, opacity: 1000} }, sponsors: ['IBM','Google','StackOverflow', Github]"></script>
		</head>
		<body>
			<div id="main"></div>
		</body>
	</html>
	
### Accessing to global configuration:

	<script type="text/javascript">
		console.log( Cfg.config.modulesPath ); // ../application/modules/
		console.log( Cfg.config.listItems ); // 50
		console.log( Cfg.config.slideshow.duration ); // 500
		console.log( Cfg.config.slidewhow.easing ); // backInOut
	</script>
	
### Accesing to local configuration

footer.js
	(function(){
		var config = new Cfg(); //loading configuration from current tag script
		
		console.log( config.listItems ); // undefined
		console.log( config.animation.duration ); // 100
		console.log( config.animation.properties.height ); // 500
		
		//iteration
		
		for(var i = 0, l = config.sponsors; i < l; i++ ){
			console.log( config.sponsors[i] );
		}
		
	})();
	
## Copyright and Licensing
* Copyright (c) 2011, John Acosta - @John_Acosta, released under the BSD-2 license.
