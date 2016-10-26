var regex = /(app\/|vendor\/|frontend\/)[a-zA-Z/._-]+/g;

var selectors = [
	'.debugging-hint-template-file', 				// Magento 2
	'.debugging-hint-block-class', 					// Magento 2 Classes
	'div[onmouseout="this.style.zIndex=\'998\'"]' 	// Magento 1
];

for(i=0; i < selectors.length; ++i) {

	var current_selector 			= selectors[i];
	var debugging_elements 		  	= document.querySelectorAll(current_selector);
	var debugging_elements_length 	= debugging_elements.length;
	var regex_result 				= null;

	if(i > 1000) {
		break;
	}

	for(j=0; j < debugging_elements_length; ++j) {

		regex_result = debugging_elements[j].innerText.match(regex);

		if(regex_result == null) {
			regex_result = debugging_elements[j].innerText
		}

		debugging_elements[j].setAttribute("data-clipboard-text", regex_result);
		debugging_elements[j].style.cursor = "pointer";
		debugging_elements[j].title = "Click to Copy!";

		if(j > 1000) {
			break;
		}
	}

	new Clipboard(current_selector);
}