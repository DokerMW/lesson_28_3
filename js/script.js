const convertBtn = document.querySelector('.btn')
const fromSelect = document.getElementById('from-select')
const toSelect = document.getElementById('to-select')
const inputQnty = document.querySelector('input')
const spanResult = document.querySelector('.result')
let result;

let myHeaders = new Headers();
myHeaders.append("apikey", "x5Vd56mNFlltmOUHoLk7r0Lf7Bd6benk");

let requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

const getValues = () => {
	let from = fromSelect[fromSelect.selectedIndex].value;
	let to = toSelect[toSelect.selectedIndex].value;
	let qnty = inputQnty.value;
	
 if(fromSelect.selectedIndex != 0 &&
	 	toSelect.selectedIndex != 0 && qnty){
		getData(from,to,qnty)
 }
}

const getData = async (from, to, qnty) => {
  const fetchData = await fetch(`https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${qnty}`, requestOptions);
  const data = await fetchData.json();
	result = data.result
	spanResult.textContent = result
  return result;
}

convertBtn.addEventListener('click', e => {
	getValues()
})
