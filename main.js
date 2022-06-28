// PreUNI Course Preferences Test
// This Javascript includes array's of objects that stores the course categories that is prompted to the user and the weight for each option, and calculations for the total score and result to be displayed.
// It also hides and shows different divs and classes from the html

// What pages to be "shown" at the beginning (just hobby page is shown)
$('#hob').addClass('show');
$('#int').addClass('hide');
$('#sub').addClass('hide');
$('#Art').addClass('hide');
$('#Com').addClass('hide');
$('#Eng').addClass('hide');
$('#Med').addClass('hide');
$('.email').addClass('hide');

// This is an array of objects that stores the hobby category prompts that is shown to the user and the class for each option. 
var prompts = [
{
	prompt: 'A: Painting' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + 'B: Sports Commentary' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + 'C: Gaming' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + 'D: Gardening',
	class: 'group1'
},
{
	prompt: 'A: Theatre'+ '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +' B: Finances'+ '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + 'C: Programming' +'\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+ 'D: Cooking',
	class: 'group2'
},
{
	prompt: 'A: Photography '+ '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +' B: Writing '+ '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +' C: LEGO building '+ '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +'  D: Experiments',
	class: 'group3'
},
{
	prompt: 'A: Music  '+ '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +'  B: Debating  '+ '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +'  C: Magic  '+ '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +'   D: Crafts' +'\xa0\xa0\xa0\xa0',
	class: 'group4'
},
{
	prompt: 'A: Sewing  '+ '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +'  B: Journaling '+ '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +' C: Hacking '+ '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +' D: Baby-sitting',
	class: 'group5'
},
]

// This array stores all of the possible selection options for hobbies and the weight associated with the value. 
// A = Art category (5 points each)
// B = Commerce category (10 points each)
// C = Engineering category (15 points each)
// D = Medicine category (20 points each)
var prompt_values = [
{
	value: 'A', 
	class: 'btn-default btn-art',
	weight: 5
},
{
	value: 'B',
	class: 'btn-default btn-com',
	weight: 10
}, 
{
	value: 'C',
	class: 'btn-default btn-eng',
	weight: 15
},
{ 
	value: 'D',
	class: 'btn-default btn-med',
	weight: 20
}
]
createPromptItems();
createValueButtons();

// For each prompt, create a list item to be inserted in the list group
function createPromptItems() {

	for (var i = 0; i < prompts.length; i++) {
		var prompt_li = document.createElement('li');
		var prompt_p = document.createElement('p');
		var prompt_text = document.createTextNode(prompts[i].prompt);

		prompt_li.setAttribute('class', 'list-group-item prompt');
		prompt_p.appendChild(prompt_text);
		prompt_li.appendChild(prompt_p);

		document.getElementById('hobbies').appendChild(prompt_li);
	}
}

// For each possible value, create a button for each to be inserted into each li of the test
function createValueButtons() {
	for (var li_index = 0; li_index < prompts.length; li_index++) {
		var group = document.createElement('div');
		group.className = 'btn-group btn-group-justified';

		for (var i = 0; i < prompt_values.length; i++) {
			var btn_group = document.createElement('div');
			btn_group.className = 'btn-group';

			var button = document.createElement('button');
			var button_text = document.createTextNode(prompt_values[i].value);
			button.className = 'group' + li_index + ' value-btn btn ' + prompt_values[i].class;
			button.appendChild(button_text);

			btn_group.appendChild(button);
			group.appendChild(btn_group);

			document.getElementsByClassName('prompt')[li_index].appendChild(group);
		}
	}
}
// Set the total value to start at 0
var total = 0;

// Function for when the user clicks a button
$('.value-btn').mousedown(function () {
	var classList = $(this).attr('class');
	var classArr = classList.split(" ");
	var this_group = classArr[0];
	
	// If button is already selected, de-select it when clicked and subtract any previously added values to the total
	// Otherwise, de-select any selected buttons in group and select the one just clicked
	// And subtract deselected weighted value and add the newly selected weighted value to the total
	if($(this).hasClass('active')) {
		$(this).removeClass('active');
		total -= (findWeight(prompt_values, $(this).text()));
	} else {
		total -= (findWeight(prompt_values, $('.'+this_group+'active').text()));
		$('.'+this_group).removeClass('active');
		$(this).addClass('active');
		total += (findWeight(prompt_values, $(this).text()));
	}
})


// This is an array of objects that stores the interest category prompts that is shown to the user and the class for each option. 
var interestprompts = [
{
	intprompt: 'A: Scripts & Plays' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + 'B: Politics' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + 'C: Architecture' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + 'D: Makeup',
	class: 'group1'
},
{
	intprompt: 'A: Instruments'+ '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +' B: Stock market'+ '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + 'C: Car racing' +'\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+ 'D: Science',
	class: 'group2'
},
{
	intprompt: 'A: Artworks '+ '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +' B: Social media '+ '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +' C: Mechanics '+ '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +'  D: Nursing',
	class: 'group3'
},
{
	intprompt: 'A: Films  '+ '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +'  B: Foreign languages  '+ '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +'  C: Tools  '+ '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +'   D: Books',
	class: 'group4'
},
{
	intprompt: 'A: Rick & Morty  '+ '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +'  B: Law & Order '+ '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +' C: Silicon Valley '+ '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +' D: Good Doctor',
	class: 'group5'
},
]

// This array stores all of the possible selection options for interests and the weight associated with the value.  (Same as Hobby prompt-values)
	var interest_prompt_values = [
{
	value: 'A', 
	class: 'btn-default btn-art',
	weight: 5
},
{
	value: 'B',
	class: 'btn-default btn-com',
	weight: 10
}, 
{
	value: 'C',
	class: 'btn-default btn-eng',
	weight: 15
},
{ 
	value: 'D',
	class: 'btn-default btn-med',
	weight: 20
}
]

// For each prompt, create a list item to be inserted in the list group
function createInterestPromptItems() {

	for (var i = 0; i < interestprompts.length; i++) {
		var intprompt_li = document.createElement('li');
		var intprompt_p = document.createElement('p');
		var intprompt_text = document.createTextNode(interestprompts[i].intprompt);

		intprompt_li.setAttribute('class', 'list-group-item intprompt');
		intprompt_p.appendChild(intprompt_text);
		intprompt_li.appendChild(intprompt_p);

		document.getElementById('interests').appendChild(intprompt_li);
	}
}

// For each possible value, create a button for each to be inserted into each li of the test
function createIntInterestValueButtons() {
	for (var li_index = 0; li_index < interestprompts.length; li_index++) {
		var group = document.createElement('div');
		group.className = 'btn-group btn-group-justified';

		for (var i = 0; i < interest_prompt_values.length; i++) {
			var btn_group = document.createElement('div');
			btn_group.className = 'btn-group';

			var button = document.createElement('button');
			var button_text = document.createTextNode(interest_prompt_values[i].value);
			button.className = 'group' + li_index + ' value-btn btn ' + interest_prompt_values[i].class;
			button.appendChild(button_text);

			btn_group.appendChild(button);
			group.appendChild(btn_group);

			document.getElementsByClassName('intprompt')[li_index].appendChild(group);
		}
	}
}

// Same function for when the user clicks a button	
$('.value-btn').mousedown(function () {
	var classList2 = $(this).attr2('class');
	var classArr2 = classList2.split(" / ");
	var this_group = classArr2[0];
	
	if($(this).hasClass('active')) {
		$(this).removeClass('active');
		total -= (findWeight(interest_prompt_values, $(this).text()));
	} else {
		total -= (findWeight(interest_prompt_values, $('.'+this_group+'.active').text()));
		$('.'+this_group).removeClass('active');
		$(this).addClass('active');
		total += (findWeight(interest_prompt_values, $(this).text()));
	}
})
createInterestPromptItems();
createIntInterestValueButtons();

// This is an array of objects that stores the subject category prompts that is shown to the user and the class for each option. 
var subjectprompts = [
{
	subprompt: 'A: Music (any)' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + 'B: English (any)' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + 'C: IPT / SDD' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + 'D: Chemistry',
	class: 'group1'
},
{
	subprompt: 'A: Drama'+ '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +' B: Economics'+ '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + 'C: Design and Technology' +'\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+ 'D: PDHPE',
	class: 'group2'
},
{
	subprompt: 'A: Multimedia '+ '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +' B: History (any)'+ '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +' C: Engineering Studies'+ '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +'  D: Physics ',
	class: 'group3'
},
{
	subprompt: 'A: Visual Arts  '+ '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +'  B: Legal Studies  '+ '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +'  C: Food technology'+ '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +'   D: Biology',
	class: 'group4'
},
{
	subprompt: 'A: Textiles  '+ '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +'  B: Geography '+ '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +' C: Agriculture'+ '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +' D: Maths (any)',
	class: 'group5'
},
]
// This array stores all of the possible selection options for interests and the weight associated with the value.  (Same as Hobby & Interest prompt-values)
	var subject_prompt_values = [
{
	value: 'A', 
	class: 'btn-default btn-art',
	weight: 5
},
{
	value: 'B',
	class: 'btn-default btn-com',
	weight: 10
}, 
{
	value: 'C',
	class: 'btn-default btn-eng',
	weight: 15
},
{ 
	value: 'D',
	class: 'btn-default btn-med',
	weight: 20
}
]

// For each prompt, create a list item to be inserted in the list group
function createSubjectPromptItems() {

	for (var i = 0; i < subjectprompts.length; i++) {
		var subprompt_li = document.createElement('li');
		var subprompt_p = document.createElement('p');
		var subprompt_text = document.createTextNode(subjectprompts[i].subprompt);

		subprompt_li.setAttribute('class', 'list-group-item subprompt');
		subprompt_p.appendChild(subprompt_text);
		subprompt_li.appendChild(subprompt_p);

		document.getElementById('subjects').appendChild(subprompt_li);
	}
}

// For each possible value, create a button for each to be inserted into each li of the test
function createIntSubjectValueButtons() {
	for (var li_index = 0; li_index < subjectprompts.length; li_index++) {
		var group = document.createElement('div');
		group.className = 'btn-group btn-group-justified';

		for (var i = 0; i < subject_prompt_values.length; i++) {
			var btn_group = document.createElement('div');
			btn_group.className = 'btn-group';

			var button = document.createElement('button');
			var button_text = document.createTextNode(subject_prompt_values[i].value);
			button.className = 'group' + li_index + ' value-btn btn ' + subject_prompt_values[i].class;
			button.appendChild(button_text);

			btn_group.appendChild(button);
			group.appendChild(btn_group);

			document.getElementsByClassName('subprompt')[li_index].appendChild(group);
		}
	}
}
createSubjectPromptItems();
createIntSubjectValueButtons();
	
$('.value-btn').mousedown(function () {
	var classList3 = $(this).attr('class');
	var classArr3 = classList3.split(" .. ");
	var this_group3 = classArr3[0];	
	if($(this).hasClass('active')) {
		$(this).removeClass('active');
		
		// Keep a running total of the values they have selected. If the total is negative, the user is introverted. If positive, user is extroverted.
		// Calculation will sum all of the answers to the prompts using weight of the value * the weight of the prompt.

		total -= (findWeight(subject_prompt_values, $(this).text()));
	} else {
		total -= (findWeight(subject_prompt_values, $('.'+this_group3+'.active').text()));
		$('.'+this_group3).removeClass('active');
		$(this).addClass('active');
		total += (findWeight(subject_prompt_values, $(this).text()));
	}
})

// Get the weight associated to the value
function findWeight(values, value) {
	var weight = 0;
	for (var i = 0; i < values.length; i++) {
		if (values[i].value === value) {
			weight = values[i].weight;
		}
	}
	return weight;
}
// Next button function on Hobby page (to interests)
$('#next-int-btn').click(function () {
	if (total <=20){
		// Error catch: not enough answers selected
		window.alert("ERROR: Not enough answers selected");
	} else {
	$('#int').removeClass('hide');
	$('#int').addClass('show');
	$('#hob').removeClass('show');
	$('#hob').addClass('hide');
	}
})
// Back button function on Interest page (back to hobbies) 
$('#back-hob-btn').click(function () {
	$('#int').removeClass('show');
	$('#int').addClass('hide');
	$('#hob').removeClass('hide');
	$('#hob').addClass('show');
})
// Next button function on Interest page  (to subjects)
$('#next-sub-btn').click(function () {
	if (total <=45){
		// Error catch: not enough answers selected
		window.alert("ERROR: Not enough answers selected");
	} else {
	$('#int').removeClass('show');
	$('#int').addClass('hide');
	$('#sub').removeClass('hide');
	$('#sub').addClass('show');
	}
})
// Back button function on Subject page  (back to interest)
$('#back-int-btn').click(function () {
	$('#sub').removeClass('show');
	$('#sub').addClass('hide');
	$('#int').removeClass('hide');
	$('#int').addClass('show');
})

// Submit answers function button
$('#submit-btn').click(function () {
	// After clicking submit, show results
	$('.results').removeClass('hide');
	$('.results').addClass('show');
		
	// After clicking submit, add up the totals from answers
	if(total < 75){
		// Error catch: not enough answers were selected
		window.alert("ERROR: Please select all your answers");
	} else if(total <=110) {
		// Show results for Art courses category
		$('#Art').addClass('show');
	} else if(total <=185) {
		// Show results for Commerce courses category
		$('#Com').addClass('show');
	} else if(total <=260){
		// Show results for Engineering courses category
		$('#Eng').addClass('show');
	} else if(total <=300){
		// Show results for Medicine courses category
		$('#Med').addClass('show');	
	} else {
		// Error catch: incorrect number of buttons selected
		window.alert("ERROR: Too many answers selected");	
	}

	// Hide the test after they submit their results
	$('#sub').removeClass('show');
	$('#sub').addClass('hide');
	$('#submit-btn').addClass('hide');
	$('#retake-btn').removeClass('hide');
	$('.email').removeClass('hide');
})

// Refresh the screen to show a new quiz if they click the retake quiz button
$('#retake-btn').click(function () {
	document.location.reload();
})

// Stub function button for submitting email, with pop-up
$('.email-btn').click(function () {
	window.alert("Function coming soon");
})
// JavaScript Document