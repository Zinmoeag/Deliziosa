const display = document.querySelector(".display");
const iconBox = document.querySelector(".icon-box");
const iconContainer = document.querySelector(".icon-container");
const displayOrdFood  = document.querySelector(".displayOrdFood");

const showBtn = document.querySelectorAll(".show");


let orderItemList =[];


const text = "FOLLOW US";
const arr = text.split("");


for(let i = 0 ; i < 9; i++){

	let el = document.createElement("div");
	el.innerHTML=arr[i];
	el.classList.add("lett")
	if(arr[i]===" "){
		el.classList.add("space")
	}

	display.append(el);
}

iconBox.onmouseover=()=>{
	display.style.transform="translateX(-10rem)"
	iconContainer.style.transform="translateX(-0.4rem)"
}

iconBox.onmouseout=()=>{
	display.style.transform="translateX(0.6rem)"
	iconContainer.style.transform="translateX(10rem)"
}

// chef

const displayPic = document.querySelector(".activeImg");
const miniBox = document.querySelector(".mini-box ");
const activeChef = document.querySelector(".chef-display");
const displayChefName = document.querySelector(".chef-name");
const displayChefInfo = document.querySelector(".chef-info");
const outlineColor = document.querySelector(".outline");


window.onload=()=>{
	show();
	getRAC();
	getJuice();

	orderItemList =[]
}


let chefList ={
	1: {		id:1,
				name:"David",
				pic:"./assets/img/chef1.jpg",
				quote:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation`,
				color:'dark-red',
				display:true
	},
	2: {	
				id:2,
				name:"Loura",
				pic:"./assets/img/chef2.jpg",
				quote:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation`,
				color:"white-grey",
				display:false
	},
	3: {		
				id:3,
				name:"Christian Bale",
				pic:"./assets/img/chef3.jpg",
				quote:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation`,
				color:"darkest-blue",
				display:false
	},
	4: {		id:4,
				name:"Cavil",
				pic:"./assets/img/chef4.jpg",
				quote:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation`,
				color:"darkblue",
				display:false
	},

}



let show =()=>{
	for(i in chefList){
	if(chefList[i].display===true){
		 activeChef.setAttribute("data-active-id",chefList[i].id);
		displayPic.src=chefList[i].pic;

		displayChefName.innerHTML = chefList[i].name;
		displayChefInfo.innerHTML = chefList[i].quote;
		outlineColor.style.background=`var(--${chefList[i].color})`;


	}else{

		let el = document.createElement("div");
		el.className="col-cus col-md-4 col-lg-4 mini-card mt-3";
		el.setAttribute("data-chef-id",chefList[i].id)
			el.innerHTML = `
						<img src=${chefList[i].pic} alt="" class="mini-chef-pic">
						<div class="card-body mt-3">
								<h4 class='text-center'>${chefList[i].name}</h4>
						</div>
						`
		miniBox.append(el);
	}

}

let miniCard = document.querySelectorAll(".mini-card");
miniCard.forEach(card =>{
	card.onclick =()=>{
		let getId = card.getAttribute("data-chef-id");

		let activeId = activeChef.getAttribute("data-active-id");

		chefList[activeId].display = false;
		chefList[getId].display = true;
		


		miniBox.innerHTML="";
		show()
	}
})
}



let foodAndDrink ={
	Rice : {
		1: {
			id:"1",
			name:"Rice with Vegitable Curry",
			img:"./assets/img/rice/img (1).jpg",
			price:"15$"
		},
		2: {
			id:"2",
			name:"Coconut Rice with Chicken Curry",
			img:"./assets/img/rice/img (2).jpg",
			price:"18$"
		},
		3: {
			id:"3",
			name:"Rice with Vegitable Curry",
			img:"./assets/img/rice/img (3).jpg",
			price:"12$"
		},
		4: {
			id:"4",
			name:"Fried Rice",
			img:"./assets/img/rice/img (4).jpg",
			price:"15$"
		},
	},
	Juice : {
		1: {
			id:"1",
			name:"Kiwi",
			img:"./assets/img/juice/img (1).jpg",
			price:"10$"
		},
		2: {
			id:"2",
			name:"Grape",
			img:"./assets/img/juice/img (2).jpg",
			price:"10$"
		},
		3: {
			id:"3",
			name:"Orange",
			img:"./assets/img/juice/img (3).jpg",
			price:"10$"
		},
		4: {
			id:"4",
			name:"Avocado",
			img:"./assets/img/juice/img (4).jpg",
			price:"10$"
		},
	}
}


const racMenu = document.querySelector("#RAC .menu .row");



let getRAC =()=>{

	let list = foodAndDrink.Rice;
	for(i in list){
		
		let el = document.createElement("div");
		el.className="col-lg-3 col-md-6 mb-5 col-sm-12";
		el.innerHTML=`	<div class="card card-cus border-cus-style item-card">
							<img src="${list[i].img}">

							<div class="card-body food-item">
								<h6 class="text-center fw-bold text-uppercase curry-title">${list[i].name}</h6>
								<p>Lorem ipsum dolor sit amet,dagh</p>
								<p style="padding:0"class="text-end">Price : ${list[i].price}</p>	
								<button class="button-order btn btn-warning btn-md rounded-0" data-target="Rice-${list[i].id}">Add list</button>
							</div>
						</div>
		`
		racMenu.append(el);

		console.log(el.getBoundingClientRect());
	}

		let orderBtn = document.querySelectorAll(".button-order");
		orderBtn.forEach(obtn =>{
			obtn.onclick=(e)=>{
				let target = obtn.getAttribute("data-target");
				let item = target.split("-")[1];
				let type = target.split("-")[0];

				btnOrder(e.target,item,type);
				
			}
		})



}

const juiceMenu = document.querySelector("#juice .menu .row");

let getJuice =()=>{

	let list = foodAndDrink.Juice;
	for(i in list){
		
		let el = document.createElement("div");
		el.className="col-lg-3 col-md-6 mb-5 col-sm-12";
		el.innerHTML=`	<div class="card card-cus border-cus-style item-card">
							<img src="${list[i].img}">

							<div class="card-body food-item">
								<h6 class="text-center fw-bold text-uppercase curry-title text-light">${list[i].name}</h6>
								<p class="text-light">Lorem ipsum dolor sit amet,dagh</p>
								<p style="padding:0"class="text-end text-light">Price : ${list[i].price}</p>	
								<button class="button-order btn btn-warning btn-md rounded-0" data-target="Juice-${list[i].id}">Add list</button>
							</div>
						</div>
		`
		juiceMenu.append(el);
	}
		let orderBtn = document.querySelectorAll(".button-order");
		orderBtn.forEach(obtn =>{
			obtn.onclick=(e)=>{
				let target = obtn.getAttribute("data-target");
				let item = target.split("-")[1];
				let type = target.split("-")[0];

				
				btnOrder(e.target,item,type);

			}
		})


		
	
}

let btnOrder =(target,item,type)=>{
	if(target.classList.contains("active")){
		target.classList.remove("active");
		target.innerHTML="Add to list";

		remove(item,type);
	}else{
		target.classList.add("active");
		target.innerHTML="Added";
		order(item,type);
	}
}


const dash = document.querySelectorAll(".dash");


dash.forEach(dash=>{
	if(dash.classList.contains("fix")){
		dash.innerHTML = "---------------------------------";
	}else{
		dash.innerHTML = "------------------------------------";
	}
	
});




let order =(item,type)=>{

	let itemName = foodAndDrink[type][item].name;
	let itemPrice = foodAndDrink[type][item].price;

	let orderItem = `${itemName} (${itemPrice})`;

	orderItemList.push(orderItem);


	orderDisplay()


}

let remove =(item,type)=>{

	let remveItem = `${foodAndDrink[type][item].name} (${foodAndDrink[type][item].price})`;

	let index = orderItemList.indexOf(remveItem);

	orderItemList.splice(index,1);

	console.log(orderItemList,index);

	orderDisplay();

}

let orderDisplay =()=>{

	displayOrdFood.innerHTML =``;
	for(let i = 0; i < orderItemList.length; i++){

		let el = document.createElement("li");
		el.innerHTML=orderItemList[i]
			displayOrdFood.append(el);
	}
	
}


let clearBtn = document.querySelector("#forclear");

clearBtn.onclick=()=>{
	let allActive = document.querySelectorAll(".food-item .active");

	allActive.forEach(el=>{
		el.classList.remove("active");
	})

	clear();
}

let clear =()=>{
	displayOrdFood.innerHTML=`<li class="noItm">No Item Found</li>`;
	orderItemList=[];


}


showBtn.forEach(btn=>{
	btn.onclick=(e)=>{
	let id = e.target.getAttribute("data-target");

	if(document.querySelector(`#${id} .menu-list`).classList.contains("active")){
		document.querySelector(`#${id} .menu-list`).classList.remove("active")
		e.target.innerHTML ="Show all"

	}else{
		document.querySelector(`#${id} .menu-list`).classList.add("active")
		e.target.innerHTML ="Show less"

	}
}

})



























