

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown2");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}



//This is to click the nav bar and scroll down to the section of 
// the page.

const sections = [...document.querySelectorAll('section')];
const link = (id) => document.querySelector(`a[herf="#${ id }"]`);

const inView = (element) => {
	var top = element.offsetTop;
	var height = element.offsetHeight;

	while(element.offsetParent) {
		element = element.offsetParent;
		top += element.offsetTop;
	}

	return (
		top < (window.pageYOffset + window.innerHeight) &&
		(top + height) > window.pageYOffset
	);
};

const init = () => {
	function update() {
		let next = false;

		sections.forEach(section => {
			const current = link(section.id);

			if (inView(section) && !next) {
				current.classList.add('current');
				next = true;
			} else {
				current.classList.remove('current');
			}
		});
	}

	update();
	window.addEventListener('scroll', update);
}

init();