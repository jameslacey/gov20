var techPrefixes =
    [
	'Mobile',
	'Web',
	'Easy',
	'The New Way To Do ',
	'Internet',
	'Inter',
	'Win',
	'Super',
	'A Better Way To Do ',
	'Your New ',
];

var postThings = [];

var ninetiesThings =
    [
	'E-Mail',
	'IRC',
	'MSN',
	'AOL',
	'Tel',
	'Chat',
	'2000',
	'Windows 98',
	'Microsoft Bob',
	'Mobile',
	'Net',
	'Computing',
	'Microsoft Bob',
	'Windows',
    ];

var webThings =
    [
	'For the Internet',
	'For The Web',
	'With Online Integration',
	'Online',
	'Online 2000',
	'With Web Functionality',

    ];




function rand(num) {
    return Math.floor(Math.random()*num);
}

function randArr(items) {
    /* Return random item from items */
    return items[rand(items.length)]
}

function makeThing() {
    return '<p>&ldquo;It\'s basically <span class="startup">'
	+ randArr(techPrefixes)
	+ '</span><span class="startup">'
	+ randArr(ninetiesThings) 
	+ randArr(webThings)
	+ '.</span>&rdquo;</p>';
}

$(document).ready(
    function() {
	var els = [];
	for (var i=0;i<1;i++) {
	    els.push(makeThing());
	}
	$('#things').append(els.join(''));
    });
