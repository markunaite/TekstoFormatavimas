window.addEventListener('load', function () {
	const page = document.getElementById('main');
	const people = [
		{
			image: 'images/51.jpg',
			name: 'Robert Langdon',
			adress: '15 Eagle Way.AL10 8RD',
			about: 'Typical gamer.Friendly practitioner.Alcohol buff.Etreme pop cultureaholic.',
			contact: 'Get Connected',
			fb: '<a href="#"><i class="fab fa-facebook icon"></i></a>',
			twitter: '<a href="#"><i class="fab fa-twitter icon"></i><a>',
			google: '<a href="#"><i class="fab fa-google icon"></i><a>',
			instagram: '<a href="#"><i class="fab fa-instagram icon"></i><a>'
		},
		{
			image: 'images/16.jpg',
			name: 'Deanna I Martin',
			adress: 'Worthington Ohio(OH).43085',
			about: 'Zombie ninja.Wannabr internet buff.Proud introvert.Bacon expert.Social media trailblazer.',
			contact: 'Get Connected',
			fb: '<a href="#"><i class="fab fa-facebook icon"></i></a>',
			twitter: '<a href="#"><i class="fab fa-twitter icon"></i><a>',
			google: '<a href="#"><i class="fab fa-google icon"></i><a>',
			instagram: '<a href="#"><i class="fab fa-instagram icon"></i><a>'
		},
		{
			image: 'images/17.jpg',
			name: 'Sammy M Stoll',
			adress: 'Wellsivlle.New York(NY).14895',
			about: 'Social media junkie.Avid food nerd.Professional travel fan,Tv fanatic.Bacongekk.Web fanatic',
			contact: 'Get Connected',
			fb: '<a href="#"><i class="fab fa-facebook icon"></i></a>',
			twitter: '<a href="#"><i class="fab fa-twitter icon"></i><a>',
			google: '<a href="#"><i class="fab fa-google icon"></i><a>',
			instagram: '<a href="#"><i class="fab fa-instagram icon"></i><a>'
		},
		{
			image: 'images/46.jpg',
			name: 'James C Young',
			adress: '2597 Meadowbrock Mall Rood',
			about: 'Certified food secialist.Pop culture geek.Typical travel evangelist.Award-winning analyst.Zombie lover.',
			contact: 'Get Connected',
			fb: '<a href="#"><i class="fab fa-facebook icon"></i></a>',
			twitter: '<a href="#"><i class="fab fa-twitter icon"></i><a>',
			google: '<a href="#"><i class="fab fa-google icon"></i><a>',
			instagram: '<a href="#"><i class="fab fa-instagram icon"></i><a>'
		},
		{
			image: 'images/34.jpg',
			name: 'Claudette G Hann',
			adress: 'Philadelphia,Pennsylvania(PA).19108',
			about: 'Twitter practtioner.Devoted thinker.Hipster-friendly problem solver.Social media expert.',
			contact: 'Get Connected',
			fb: '<a href="#"><i class="fab fa-facebook icon"></i></a>',
			twitter: '<a href="#"><i class="fab fa-twitter icon"></i><a>',
			google: '<a href="#"><i class="fab fa-google icon"></i><a>',
			instagram: '<a href="#"><i class="fab fa-instagram icon"></i><a>'
		},
		{
			image: 'images/55.jpg',
			name: 'Bruce K Collins',
			adress: 'Westhampton Beach,New York(NY)11378',
			about: 'Wannable social media aficionado.Thinker.Unapologetic beer guru.Internet lover.Avid food buff.',
			contact: 'Get Connected',
			fb: '<a href="#"><i class="fab fa-facebook icon"></i></a>',
			twitter: '<a href="#"><i class="fab fa-twitter icon"></i><a>',
			google: '<a href="#"><i class="fab fa-google icon"></i><a>',
			instagram: '<a href="#"><i class="fab fa-instagram icon"></i><a>'
		},
		{
			image: 'images/21.jpg',
			name: 'Amber C Pantoja',
			adress: 'Nashvillie Tennesse(TN)37209',
			about: 'Wannabe pop culture expert.Alcohol fanatic.Umapologetic introvert.Sbtly charming communicator',
			contact: 'Get Connected',
			fb: '<a href="#"><i class="fab fa-facebook icon"></i></a>',
			twitter: '<a href="#"><i class="fab fa-twitter icon"></i><a>',
			google: '<a href="#"><i class="fab fa-google icon"></i><a>',
			instagram: '<a href="#"><i class="fab fa-instagram icon"></i><a>'
		},
		{
			image: 'images/23.jpg',
			name: 'Adriana E Hubert',
			adress: 'Brunlington North Corolina (NC)27215',
			about: 'Pop culture fanatic.Hardcore annalyst.Infuriatingly humble reader.Incurable troublemarker',
			contact: 'Get Connected',
			fb: '<a href="#"><i class="fab fa-facebook icon"></i></a>',
			twitter: '<a href="#"><i class="fab fa-twitter icon"></i><a>',
			google: '<a href="#"><i class="fab fa-google icon"></i><a>',
			instagram: '<a href="#"><i class="fab fa-instagram icon"></i><a>'
		}
	];
	
	function createElement(element) {
		return document.createElement(element);;
	}

	people.forEach((person) => {
		const card = createElement('div');
		const image = createElement('img');
		const social = createElement('div');
		const name = createElement('h3');
		const adress = createElement('p');
		const about = createElement('p');
		const contact = createElement('p');

		card.classList.add('card');
		page.appendChild(card);

		image.src = person.image;
		image.alt = person.name;
		card.appendChild(image);

		name.textContent = person.name;
		card.appendChild(name);

		adress.textContent = person.adress;
		card.appendChild(adress);

		about.textContent = person.about;
		card.appendChild(about);

		contact.textContent = person.contact;
		card.appendChild(contact);

		card.appendChild(social);
		social.classList.add('social');
		social.innerHTML =
			`${person.fb} 
	${person.twitter}
    ${person.google}
    ${person.instagram}
    `;
	})
	document.querySelector('#title').innerHTML = "Find.Connect.Enjoy";
	document.querySelector('#description').innerHTML = "new way to meet people";

})