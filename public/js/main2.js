async function getData()
{
    const response=await fetch("https://covid-19-data.p.rapidapi.com/country/all?format=json", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "e07661376fmsh1c6bb460e8a72d9p10ce47jsnb6d5d4482dc7",
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com"
	}
});
const data=await response.json();
const arraydata=[data];
console.log(arraydata);
}

getData();