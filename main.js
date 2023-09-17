const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const emptyInput = document.querySelector(".empty");

function addTask() {
	if (inputBox.value === "") {
		emptyInput.classList.add("show");
	} else {
		emptyInput.classList.remove("show");
		let li = document.createElement("li");
		li.innerHTML = inputBox.value;
		listContainer.appendChild(li);
		let span = document.createElement("span");
		span.innerHTML = "\u00d7";
		li.appendChild(span);
	}
	inputBox.value = "";
	saveData();
}

listContainer.addEventListener(
	"click",
	function (e) {
		if (e.target.tagName === "LI") {
			e.target.classList.toggle("checked");
			saveData();
		} else if (e.target.tagName === "SPAN") {
			e.target.parentElement.remove();
			saveData();
		}
	},
	false
);

function saveData() {
	localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
	listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

inputBox.addEventListener("keydown", (event) => {
	if (event.key === "Enter") {
		addTask();
	}
});
