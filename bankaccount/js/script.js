/*eslint-env browser*/

var name, deposit, withdrawal, balance = 0, html = "";

document.getElementById("name").addEventListener("click", function () {
	"use strict";
	name = window.prompt("Please enter your name");
	html += "Account Name: " + name + "<br>";
	html += "Balance Amount: " + balance + "<br>";
	document.getElementById('accountDisplay').innerHTML = html;
});

document.getElementById("deposit").addEventListener("click", function () {
	"use strict";
	deposit = parseInt(window.prompt("Enter amount to deposit"), 10);
	html += "Deposit Amount: " + deposit + "<br>";
	html += "Balance Amount: " + balance + "<br>";
	document.getElementById('accountDisplay').innerHTML = html;
});

document.getElementById("withdrawal").addEventListener("click", function () {
	"use strict";
	withdrawal = parseInt(window.prompt("Enter amount to withdrawal"), 10);
	html += "Withdrawal Amount: " + withdrawal + "<br>";
	html += "Balance Amount: " + balance + "<br>";
	document.getElementById('accountDisplay').innerHTML = html;
});

function bankAccount (ownerName) {
	var balance, owner = ownerName;
	return {
	getBalance: function () {
		return balance;
	},
	withdrawal: function (withdrawalAmount) {
		balance -= withdrawalAmount;
		return balance;
	},
	deposit: function (depositAmount) {
		balance += depositAmount;
		return balance;
	}
}
};

