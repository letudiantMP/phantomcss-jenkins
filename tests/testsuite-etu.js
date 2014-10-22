/*
	Require and initialise PhantomCSS module
	Paths are relative to CasperJs directory
*/
var phantomcss = require('./../phantomcss.js');

phantomcss.init(/*{
	screenshotRoot: '/screenshots',
	failedComparisonsRoot: '/failures'
	casper: specific_instance_of_casper,
	libraryRoot: '/phantomcss',
	fileNameGetter: function overide_file_naming(){},
	onPass: function passCallback(){},
	onFail: function failCallback(){},
	onTimeout: function timeoutCallback(){},
	onComplete: function completeCallback(){},
	hideElements: '#thing.selector',
	addLabelToFailedImage: true,
	outputSettings: {
		errorColor: {
			red: 255,
			green: 255,
			blue: 0
		},
		errorType: 'movement',
		transparency: 0.3
	}
}*/);


/*
	The test scenario
*/
casper.start( 'http://www.letudiant.fr' );

casper.viewport(1024, 768);

colors = ["green", "orange", "pink", "blue", "violet", "yellow"];

colors.forEach(function(c) {
    
casper.then(function(){
	casper.click('ul#main-menu li.menu-'+c+' div.nav-item-'+c);
	casper.waitForSelector('#menu-'+c+'.visible', 
		function success(){
			phantomcss.screenshot('#menu-'+c, 'menu-'+c+'-deplie');
		},
	        function timeout(){
			casper.test.fail('Menu '+c+' non visible !!!');
		}
	);
});

});

casper.then( function now_check_the_screenshots(){
	// compare screenshots
	phantomcss.compareAll();
});

casper.then( function end_it(){
	casper.test.done();
});

/*
Casper runs tests
*/
casper.run(function(){
	console.log('\nTHE END.');
	phantom.exit(phantomcss.getExitStatus());
});

