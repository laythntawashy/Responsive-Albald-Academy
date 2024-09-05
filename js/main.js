const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});




/*<-----------  JavaScript Code Start  ---------->*/



const one = document.querySelector(".one");

const two = document.querySelector(".two");

const three = document.querySelector(".three");

const four = document.querySelector(".four");

const five = document.querySelector(".five");


one.onclick = function() {

    one.classList.add("active");

    two.classList.remove("active");

    three.classList.remove("active");

    four.classList.remove("active");

    five.classList.remove("active");

}


two.onclick = function() {

    one.classList.add("active");

    two.classList.add("active");

    three.classList.remove("active");

    four.classList.remove("active");

    five.classList.remove("active");

}

three.onclick = function() {

    one.classList.add("active");

    two.classList.add("active");

    three.classList.add("active");

    four.classList.remove("active");

    five.classList.remove("active");

}

four.onclick = function() {

    one.classList.add("active");

    two.classList.add("active");

    three.classList.add("active");

    four.classList.add("active");

    five.classList.remove("active");

}

five.onclick = function() {

    one.classList.add("active");

    two.classList.add("active");

    three.classList.add("active");

    four.classList.add("active");

    five.classList.add("active");

}