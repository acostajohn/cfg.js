# Cfg.js

Cfg.js is a small javacript tool that allows you to parse configuration data from DOM elements using HTML5 custom attributes.

## Features

* HTML5 Custom attributes support
* Contextual configuration using script tags
* Independant of others libraries
* Global and local configuration
* JSON notation for configuration
* Inspired by Dojo Toolkit's 'djConfig module

## Usage

index.html

	<html>
		<head>
			<title>CfgJS Example</title>
			
			<!-- Global configuration -->
			<script type="text/javascript" src="cfg.js" dojo-cfg="modulesPath:'../application/modules/', listItems: 50, slideshow: {duration: 500, easing: 'backInOut'}"></script>
		</head>
		<body>
			<div id="main"></div>
		</body>
	</html>
	
	
# Copyright and Licensing #
* Copyright (c) 2011, John Acosta - @John_Acosta, released under the BSD-2 license.
