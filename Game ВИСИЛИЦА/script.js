

function checkName(str) {
	let error = $('#tabu')
	error.css('display', 'none')
	
	let new_str = str.replace(new RegExp( ' ', 'g'), '')
	const len = new_str.length
	new_str = new_str.toLowerCase()
	
	const len2 = new_str.length
	const len3 = new_str.length
	str = $('#name').val()
	let tabu = ['@', '/', '*', ':', '#', 'виселица']	
	let isTabu = false
	for(let i = 0; i < tabu.length; i++) {
		let index = new_str.indexOf(tabu[i])
		if (index != -1) {
			isTabu = true
			
			error.text('В имени не должны присутствовать:' + tabu.join() + '!')
			error.css('display', 'block')
		}
	}

	
	let skip = $('#skip:checked')

	if ( (len2 > 0 && len3 < 10 && !isTabu) || skip.length != 0 ) {
		$('#play').prop('disabled', false)
	}
	else {
		$('#play').prop('disabled', true)

	}
} 



function getName() {
	// body...
	let inp = $('#name').val()
	let skip = $('#skip:checked')	
	console.log(skip.length)
	if (skip.length == 0) {
		return inp
	}
	return "Инкогнито"
}

function LetWord() {
	let arr = ['мышь', 'луна', 'валенок', 'сковородка', 'букет', 'драма', 'издательство', 'сауна', 'леденец', 'полачка', 'мясо','мама']
	let W = arr.length
	let N = Math.floor(Math.random()*W)
	return arr[N]
}

let name;
let word = LetWord()
let secret = new Array(word.length).fill('_')
// Осталось угадать
let guess = secret.length
// Массив неправельных букв
let wrong = []
let errors = 1

function main() {
	//Получаем имя игрока
	 name = getName()
	// Удаляем со страницы ненужные элементы и вставляем новые
	$('body').empty()
	
	let div = $('<div class="wrapper">').appendTo('body')
	$('<h1 id="secret">'+secret.join(' ')+'</h1>').appendTo(div)
	let inp = $('<input maxlength="1" type="text"  id="letter" placeholder="Введите букву"> ').appendTo(div)
	$('<button id="game" onclick="game()">Проверить букву</button>').appendTo(div)
	$('<p id="wrong">').appendTo(div)
	let canv = $('<canvas id="canv" Не поддерживается Канвас>').appendTo('body')
	canv.attr({
		width: '1000',
		height: '500'
	});
	inp.focus();


}
function game() {
	let letter = $('#letter').val()
	let isGuessed = false
	for (let i = 0; i < word.length; i++) {
		if (word[i] == letter.toLowerCase()) {
			secret[i] == letter.toUpperCase()
			isGuessed = true
			guess --
		}
	}
	
		if (guess == 0) {
			$('body').empty()
	let win = $('<h1>Ты Победил</h1>').appendTo('body')
		
	}
	else if (errors == 10) {
		konec();
	}
	else {
		$('secret').text(secret.join('#letter'));
		$('#letter').val('');
		$('#letter').focus();
		$('#wrong').text(wrong.join(', '));
	}

	if (!isGuessed) {
		let i = wrong.indexOf(letter.toUpperCase())
		if (i == -1) {
			wrong.push(letter.toUpperCase())
			drawV(errors)
			errors++
		}
	}
	

}

function drawV(n) {

    var canv = document.querySelector('#canv')
    var ctx = canv.getContext('2d')
    if (errors == 1) {
        ctx.moveTo(50, 500);
        ctx.lineTo(150, 500);
        ctx.stroke();
    }

    if (errors == 2) {
        ctx.beginPath();
        ctx.moveTo(100, 100);
        ctx.lineTo(100, 500);
        ctx.closePath();
        ctx.stroke();
    }

    if (errors == 3) {
        ctx.moveTo(100, 100);
        ctx.lineTo(200, 100);
        ctx.stroke();
    }

    if (errors == 4) {
        ctx.moveTo(200, 100);
        ctx.lineTo(200, 200);
        ctx.stroke();
    }

    if (errors == 5) {
        ctx.beginPath();
        ctx.arc(200, 220, 20, 0, 360, false);
        ctx.stroke();
        ctx.closePath();
    }

    if (errors == 6) {
    ctx.moveTo(200, 240);
    ctx.lineTo(200, 330);
    ctx.stroke();
    }

    if (errors == 7) {
        ctx.moveTo(200, 260);
        ctx.lineTo(170, 300);
        ctx.stroke();
    }

    if (errors == 8) {
        ctx.moveTo(200, 260);
        ctx.lineTo(230, 300);
        ctx.stroke();
    }

    if (errors == 9) {
    ctx.moveTo(200, 330);
    ctx.lineTo(170, 380);

    ctx.stroke();

    }


}
 
function konec() {
	var canv = document.querySelector('#canv')
    var ctx = canv.getContext('2d')
    ctx.beginPath()
    ctx.moveTo(200, 330);
    ctx.lineTo(230, 380);
    ctx.closePath();
    ctx.stroke();
    $('body').empty()

    let los = $('<p id = "lose">Ты проиграл</p>').appendTo('body')

    }


$('#canv').drawLine({
	strokeStyle: "black",
	strokeWidth: 10,
	startArrow: true,
	rounded: true,
	arrowAngle: 90,
	arrowRadius: 15,
	x1: 450, y1: 180,
	x2: 700, y2: 50
})

