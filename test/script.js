var config = new Cfg();
var elConfig1 = new Cfg( document.getElementById('panel1') );
var elConfig2 = new Cfg( document.getElementById('panel2'), 'configuration');

test('Global configuration', function(){
	ok(Cfg.config instanceof Cfg, 'Instance is ok');
	
	equals(Cfg.config.path, 'the/path/to/', 'Checking properties');
	equals(Cfg.config.counter, 5, 'Checking properties');
	
	ok(Cfg.config.items.constructor === Array, 'Checking properties');
	equals(Cfg.config.items.join(' '), 'a b 3', 'Checking properties');
	
	ok(Cfg.config.obj.constructor === Object, 'Checking properties');
	equals(Cfg.config.obj.a, 1, 'Checking properties');
	equals(Cfg.config.obj.b, 2, 'Checking properties');
	equals(Cfg.config.obj.c, '3', 'Checking properties');
});


test('Script configuration', function(){
	ok(config instanceof Cfg, 'Instance is ok');
	
	equals(config.counter, 6, 'Checking properties');
	
	ok(config.thelist.constructor === Array, 'Checking properties');
	equals(config.thelist.join(' '), 'aaa bbb ccc', 'Checking properties');
});


test('DOM configuration', function(){
	ok(elConfig1 instanceof Cfg, 'Instance is ok');
	
	equals(elConfig1.model, 'products', 'Checking properties');
	equals(elConfig1.type, 3, 'Checking properties');
	
	ok(elConfig1.items.constructor === Array, 'Checking properties');
	equals(elConfig1.items[0].name, 'letr', 'Checking properties');
	equals(elConfig1.items[0].type, 5, 'Checking properties');
	equals(elConfig1.items[1].name, 'erf', 'Checking properties');
	equals(elConfig1.items[1].type, 2, 'Checking properties');
});


test('DOM configuration 2', function(){
	ok(elConfig2 instanceof Cfg, 'Instance is ok');
	
	equals(elConfig2.model, 'stores', 'Checking properties');
	equals(elConfig2.type, 1, 'Checking properties');
	
	ok(elConfig1.items.constructor === Array, 'Checking properties');
	equals(elConfig1.items.length, 0, 'Checking properties');
});
