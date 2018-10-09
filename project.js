var style = document.createElement ('link')
document.head.appendChild (style)
style.rel = 'stylesheet'
style.href = "https://fonts.googleapis.com/css?family=Montserrat"
document.body.style.fontFamily = 'Montserrat'


var levelSelect = document.getElementById('levelSelect')
var selectsWrap = document.getElementById('selectsWrap')
var btnShowTile = document.getElementById('showTile')
var quessConfirm = document.getElementById('quessConfirm')
var allMosaicsWrap = document.getElementById('allMosaicsWrap')
var tilesWrap = document.getElementById('tilesWrap')
var inputQuess = document.getElementsByTagName('input')[0]
var header = document.getElementsByTagName('header')[0]
var map = document.getElementById('map')


var mosaics = [
	{
		name: "Харьков",
		url: 
		// "./img/Gosprom.ipg"
			"http://stroyobzor.ua/assets/files/%D1%84%D0%BE%D1%82%D0%BE%20WWW/%D0%B2%D0%B8%D0%B4%D1%8B%20%D1%85%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2%D0%B0/%D0%B3%D0%BE%D1%81%D0%BF%D1%80%D0%BE%D0%BC%20%D0%B7%D0%B8%D0%BC%D0%BE%D0%B9.jpg",			
		mapUrl:
		"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d164152.76882060966!2d36.14574225861665!3d49.99472774462043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a09f63ab0f8b%3A0x2d4c18681aa4be0a!2z0KXQsNGA0YzQutC-0LIsINCl0LDRgNGM0LrQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0Yw!5e0!3m2!1sru!2sua!4v1538729313730" 
	},
	{
		name: "Париж",		
		url: 
		// "./img/ejfeleva-bashnya.ipg"
			"https://puteshestvovat.com/wp-content/uploads/2016/12/ejfeleva-bashnya.jpg",
		mapUrl:
		"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.75769486208!2d2.2770203208266304!3d48.85895068082362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2z0J_QsNGA0LjQtiwg0KTRgNCw0L3RhtC40Y8!5e0!3m2!1sru!2sua!4v1538729362966" 
	},
	{
		name: "Венеция",
		url: 
		// "./img/Venetsiya.ipg"
			"http://el-voyage.com.ua/wp-content/uploads/2017/08/Venetsiya.jpg",			
		mapUrl:
		"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d179278.72852652392!2d12.241659597219599!3d45.404698693671286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477eb1daf1d63d89%3A0x7ba3c6f0bd92102f!2z0JLQtdC90LXRhtC40Y8sINCY0YLQsNC70LjRjw!5e0!3m2!1sru!2sua!4v1538729397231" 
	},	
	{
		name: "Лондон",
		url: 
		// "./img/Venetsiya.ipg"
			"https://img.pac.ru/resorts/240733/245882/big/8F8D988E7F00010110AB4E91E0DCCB0F.jpg",			
		mapUrl:
		"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2z0JvQvtC90LTQvtC9LCDQktC10LvQuNC60L7QsdGA0LjRgtCw0L3QuNGP!5e0!3m2!1sru!2sua!4v1539022816976" 
	},
	{
		name: "Сидней",
		url: 
		// "./img/Venetsiya.ipg"
		"https://avatars.mds.yandex.net/get-pdb/33827/543f3c65-8797-477a-92ba-c87844a07553/s1200",
		mapUrl:
		"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424143.2712077331!2d150.65179362471457!3d-33.84792704788401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2z0KHQuNC00L3QtdC5INCd0L7Qsi4g0K7Qti4g0KPRjdC70YzRgSwg0JDQstGB0YLRgNCw0LvQuNGP!5e0!3m2!1sru!2sua!4v1539023315790" 
	},	
]


var levels = [
	{
		name: "Уровень 1",
		tilesAmount: [2, 3]
	},
	{
		name: "Уровень 2",
		tilesAmount: [4, 6]
	},
	{
		name: "Уровень 3",
		tilesAmount: [8, 12]
	}
]

var difficultyLevels = levels.map(
  function(level){
    return level.name
  }
)
difficultyLevels.unshift("Выбери уровень")

function buildTextSelect (options, container){
	var sel = document.createElement('select')
	var _container = container ? container : document.body
	_container.appendChild(sel)
	for (var item of options){
		var opt = document.createElement('option')
		sel.appendChild(opt)
		opt.innerText = item
	}
	return sel
}

var difficultySelection = buildTextSelect (difficultyLevels, levelSelect)
levelSelect.appendChild(difficultySelection)


function makeArray (amount){
	var resultArray = []	
	for (var i = 0; i < amount; i++){		
		resultArray.push(i)
	}
	return resultArray
}

function buildSelect (options, container){
	var sel = document.createElement('select')
	var _container = container ? container : document.body
	_container.appendChild(sel)
	for (var item of options){
		var opt = document.createElement('option')
		sel.appendChild(opt)
		opt.innerText = item + 1
	}
	return sel
}

allMosaicsWrap.style = `			
    		background-color: #8d949b; 
    		`

selectsWrap.style = `opacity: 0;
					transition: all 10s;`


var congrats = document.createElement('img')
congrats.src = "https://melbournechapter.net/images/vector-gif-confetti-2.gif"
congrats.id = "congrats"

var counter = 0


difficultySelection.onchange = function(event){
	var rowsAmount = levels[this.options.selectedIndex - 1].tilesAmount[0]
	var columsAmount = levels[this.options.selectedIndex - 1].tilesAmount[1]

	difficultySelection.setAttribute("disabled", "disabled")
	difficultySelection.style = `background-color: #c1c5ca;`
	selectsWrap.style = `opacity: 1`

	var rows = makeArray (rowsAmount)
	var rowsSelect = buildSelect (rows, selectsWrap)
	selectsWrap.insertBefore(rowsSelect, document.getElementById('chooseColumn'))

	var colums = makeArray (columsAmount)
	var columsSelect = buildSelect (colums, selectsWrap)
	selectsWrap.insertBefore(columsSelect, document.getElementById('showTile'))



	var mosaicPict = mosaics[Math.floor(Math.random() * mosaics.length)]
	var currentPictUrl = mosaicPict.url

	document.getElementById('mosaic').src = `${currentPictUrl}`
	var mosaic = document.querySelector('#mosaic')



	function addElement(tagName, container){
  		var _container = container ? container : document.body
  		return _container.appendChild(
    		document.createElement(tagName)
  		)
	}


	function makeMosaic (arrayOfRows, arrayOfColums){
	var k = 1
		for (var elem of arrayOfRows){
		var j = 1			
			for (var item in arrayOfColums){			
			var mosaicTile = addElement('div', tilesWrap)	
			mosaicTile.id = "tileDiv" + k + j		
			mosaicTile.setAttribute('class', 'tileDivs')
			var mosaicWrapStyle = allMosaicsWrap.getBoundingClientRect()
			var TileWidth = mosaicWrapStyle.width/arrayOfColums.length - 0.1
			var TileHeight = mosaicWrapStyle.height/arrayOfRows.length - 0.1
			mosaicTile.style = `
				height: ${TileHeight}px;
				width: ${TileWidth}px;	
				
	    		border: solid 0.1px #f8f8f8;
	    		float: left;
	    		display: flex;
	    		align-items: center;
	    		justify-content: center;
	    		background-color: #8d949b; 
	    		opacity: 1;
	    		box-sizing: border-box;
	    		z-index: 5000;
			`
			mosaicTile.onclick = function(event){
				openTile(this)
				counter++
			}
			// mosaicTile.onmouseover = function(event){
			// 	event.target.style.width = event.target.style.width + 20 + "px"
			// 	event.target.style.height = event.target.style.height + 20 + "px"
			// }
			var mosaicNum = addElement('p', document.getElementById("tileDiv" + k + j))
			mosaicNum.id = "tileNum" + k + j
			mosaicNum.innerText = k + "." + j
			mosaicNum.setAttribute('class', 'tileNums')
			mosaicNum.style = `
				text-align: center;
			`			
			j++							
			}
		k++
		}	
		allMosaicsWrap.style.backgroundColor = ""
	}

	var emptyMosaic = makeMosaic (rows, colums)


	quessConfirm.onclick = function (event){		
		if (inputQuess.value.toUpperCase() === mosaicPict.name.toUpperCase()){
				alert('Поздравляем! Все верно! Вы угадали с ' + counter + ' раз(-а).')
				tilesWrap.style.opacity = "0"
				inputQuess.value = null
				window.scrollTo({
	    			top: 1000,
	    			behavior: "smooth"
				})
				document.body.appendChild(congrats)
				setTimeout (function(){
					document.body.removeChild(congrats)
				}, 3000)
				map.src = mosaicPict.mapUrl
				
		} else {
			alert('Попробуй еще раз')
			inputQuess.value = null
			counter++
		}			 	
	}


	function openTile (param){
		param.style.opacity = "0"
		param.innerText = null
	}

	btnShowTile.onclick = function(event){
		var currentRowSelection = rowsSelect.options.selectedIndex + 1
		var currentColumsSelection = columsSelect.options.selectedIndex + 1
		var currentId = "tileDiv" + currentRowSelection + currentColumsSelection
		var currentTile = document.getElementById(currentId)
		openTile(currentTile)
		counter++
	}
}



