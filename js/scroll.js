import zenscroll from 'zenscroll';

// Change zenscroll settings
var edgeOffset = 0; // px
zenscroll.setup(defaultDuration, edgeOffset);

// Scroll to portfolio
var portfolio = document.getElementById("portfolio");
zenscroll.to(portfolio);