
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


// This is for the image scroller in the second section of the html.


setInterval(() => { right(); }, 5000);
function right() {
    let imgNum = 1;	
	if(imgNum != 3) {
		imgNum += 1;
		changeImg(imgNum, -1);
	}
	else {
		imgNum = 1;
		changeImg(imgNum, +2);
	}
}
function left() {
	let imgNum = 2;
	if(imgNum != 1) {
		imgNum -= 1;
		changeImg(imgNum, +1);
	}
	else {
		imgNum = 3;
		changeImg(imgNum,-2);
	}
}
function changeImg(value, count) {
		document.getElementById(`img${value}`).style.opacity = '1';
		document.getElementById(`img${value + count}`).style.opacity = '0';
		document.getElementById(`circle${value + count}`).style.background = 'transparent';
		document.getElementById(`circle${value}`).style.background = 'white';
}


//This is for the slider on the third section of the pge.
	const carouselSlide = document.querySelector(".carousel-slide");
    const carouselImages = document.querySelectorAll(".carousel-slide img");
    const prevBtn = document.querySelector("#prevBtn");
    const nextBtn = document.querySelector("#nextBtn");
    const size = carouselImages[0].clientWidth;

    let counter = 1;
carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
function next() 
{
	if (counter >= carouselImages.length - 1) return;
	carouselSlide.style.transition = "transform 0.7s ease-in-out";
	counter++;
	carouselSlide.style.tansform = "translateX(" + (-size * counter) + "px)";
};

nextBtn.addEventListener("click", next);

prevBtn.addEventListener("click", () => {
	if (counter <= 0) return;
	carouselSlide.style.transition = "transform 0.7s ease-in-out";
	counter--;
	carouselSlide.stye.transform = "translateX(" + (-size * counter) + "px)";
});

carouselSlide.addEventListener("transitioned", () => {
	if (carouselImages[counter].id === "lastClone") {
		carouselSlide.style.transition = "none";
		counter = carouselImages.length - 2;
		carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
	};

		if (carouselImages[counter].id === "firstClone") {
			carouselSlide.style.transition = "none";
			counter = carouselImages.length - counter;
			carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
		};
});
