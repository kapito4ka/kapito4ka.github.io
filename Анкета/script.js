function main() {
	// Получаем данные из формы
	let s_name = $('#s_name').val();
	let name = $('#name').val();
	let f_name = $('#f_name').val();
	let phone = $('#phone').val();
	let email = $('#email').val();
	let date = $('#date').val()
	let age = getAge(date)
	console.log(age)


	let leng = getleng();
	let img = ''
	if (leng.length > 0) {
		img = getlogo(leng)
	}
	$('body').append(img)

	let color = $('#color').val()

	if (age < 0) age = 0

	let genderID = $('input[name="gender"]:checked')[0].id
	let gender = $('label[for="'+genderID+'"]').text()
	console.log(gender)

	let city = $('#city>option:selected').text()
	if (city == 'Выберете Ваш город') city = 'Неизвестный';
	console.log(city)

	let about = $('#about').val()
	console.log(about)

	let pictureLink = $('#picure').attr('src');




	$('form').remove()

	$('body').append('<main class="main">')
	let main = $('.main')
	main.append('<img if ="face" src="' +pictureLink+'">')
	makeDivs(main, 'Фамилия:', s_name)
	makeDivs(main, 'Имя:', name)
	if(f_name) makeDivs(main, 'Отчество:', f_name)
	makeDivs(main, 'Телефон:', phone)
	makeDivs(main, 'Почта:', email)
	makeDivs(main, 'Возраст:', age)
	makeDivs(main, 'Пол:', gender)
	makeDivs(main, 'City:', city)
	makeDivs(main, 'Подробнее:', about)
	makeDivs(main, 'City:', city)
}

function makeDivs(main, prop, value) {
	main.append('<div class="line"><span class="prop">'+prop+'</span><span class="value">'+value+'</span></div>')
}

function m() {
	$('body').css({
		'background-color': 'black',
		color: 'white'
	})
	$('.zzz').remove()
	$('body').append('<button onclick="ma()" class="c1">Light</button>')
}

function ma() {
	$('body').css({
		'background-color': 'white',
		color: 'black'
	})
	$('.c1').remove()
	$('body').append('<button onclick="m()" class="zzz">Night</button>')
}

function getAge(date) {
	let tmp = date.split('-');
	let year = +tmp[0]
	let month = +tmp[1]
	let day = +tmp[2]

	const now = new Date()
	let nowYear = +now.getFullYear();
	let nowMonth = +now.getMonth() + 1;
	let nowDay = +now.getDate();

	let age = nowYear - year;
	if (nowMonth < month) {
		age--;
	}

	else if(nowMonth == month) {
		if (nowDay < day) {
			age--;
		}
	}
	return age
}

function getLogo(leng) {
	let logo = [
		{id: 'html', link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png'},
		{id: 'css', link: 'https://vignette.wikia.nocookie.net/wikies/images/a/a9/CSS3.p..'},
		{id: 'js', link: 'https://w3.org.ua/wp-content/uploads/2017/01/icon.javascript...'},
		{id: 'PHP', link: 'https://d2xzmw6cctk25h.cloudfront.net/basiccourse/4/image/med..'},
		{id: 'Pascal', link: 'https://besplatnye-programmy.com/uploads/posts/2013-03/136397..'},
		{id: 'Basic', link: 'https://pbs.twimg.com/profile_images/683053362145673216/vm1In..'},
		{id: 'Python', link: 'https://cms-assets.tutsplus.com/uploads/users/34/posts/25689/..'},
		{id: 'C++', link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmlSAb2..'},
		{id: 'C#', link: 'https://miro.medium.com/max/512/1*57j81M60MP_GDtVeWrmPpQ.png'},
		{id: 'Dylan', link: 'http://www.dylanpro.com/picts/dylan_banner3.GIF'},
		];

	let images = ''
		for(let i = 0; i < leng.length; i++) {
			let imgLink = logo.find(item => item.id == leng[i]).link
			images += '<img class="icon" src ="'+imgLink+'">'
		}
	return images
}

function getleng() {
	let lengID = []
	let checkboxes = $('input[name="gender"]:checked')
	for (let i = 0; i < checkboxes.length; i++) {
		lengID.push(checkboxes[i].id)
	}
	return lengID
}

function readURL(input) {
	if (input.files && input.files[0]) {
		let reader = new FileReader();

		reader.onload = function(e) {
			$('#picures').attr('src', e.target.result);
		}

		reader.readAsDataURL(input.files[0])
	}
}