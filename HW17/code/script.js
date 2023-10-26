const roles = {
	admin: "../images/admin.png",
	student: "../images/student.png",
	lector: "../images/lector.png"
};

const gradation = {
	20: "satisfactory",
	55: "good",
	85: "very-good",
	100: "excellent",
};

let users = [
	{
		name: "Jack Smith",
		age: 23,
		img: "../images/user.png",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 20
			},
			{
				"title": "Java Enterprise",
				"mark": 100
			}
		]
	},
	{
		name: "Amal Smith",
		age: 20,
		img: "../images/user.png",
		role: "student"
	},
	{
		name: "Noah Smith",
		age: 43,
		img: "../images/user.png",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 50
			}
		]
	},
	{
		name: "Charlie Smith",
		age: 18,
		img: "../images/user.png",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 75
			},
			{
				"title": "Java Enterprise",
				"mark": 23
			}]
	},
	{
		name: "Emily Smith",
		age: 30,
		img: "../images/user.png",
		role: "admin",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 10,
				"lector": "Leo Smith"
			},
			{
				"title": "Java Enterprise",
				"score": 50,
				"lector": "David Smith"
			},
			{
				"title": "QA",
				"score": 75,
				"lector": "Emilie Smith"
			}]
	},
	{
		name: "Leo Smith",
		age: 253,
		img: "../images/user.png",
		role: "lector",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 78,
				"studentsScore": 79
			},
			{
				"title": "Java Enterprise",
				"score": 85,
				"studentsScore": 85
			}
		]
	}
];

class User {
	constructor(name, age, img, role, courses) {
		this.name = name;
		this.age = age;
		this.img = img;
		this.role = role;
		this.courses = courses;
	}

	getGrade(grade) {
		if (grade >= 20) return gradation[20];
		if (grade >= 55) return gradation[55];
		if (grade >= 85) return gradation[85];
		if (grade === 100) return gradation[100];
	}

	render() {
		document.write(
	`<div class="users">
		<div class="user">
			<div class="user__info">
				<div class="user__info--data">
					<img src="${this.img}" alt="${this.name}" height="50">
					<div class="user__naming">
						<p>Name: <b>${this.name}</b></p>
						<p>Age: <b>${this.age}</b></p>
					</div>
				</div>
				<div class="user__info--role ${this.role}">
					<img src="${roles[this.role]}" alt="${this.role}" height="25">
					<p>${this.role}</p>
				</div>
			</div>
			${this.renderCourses()}
		</div>
	</div>`);
	}

	renderCourses() {
		let htmlString = `<div class="user__courses">`;

		this.courses?.forEach(course => {
			let mark = course.mark;

			htmlString += `
			<p class="user__courses--course ${this.role}">
				${course.title} <span class="${this.getGrade(mark)}">${this.getGrade(mark)}</span>
            </p>`;
		});

		htmlString += `</div>`;
		return htmlString;
	}
}

class Student extends User {
	constructor(name, age, img, role, courses) {
		super(name, age, img, role, courses);
	}
}

class Lector extends User {
	constructor(name, age, img, role, courses) {
		super(name, age, img, role, courses);
	}

	renderCourses(){
		let htmlString = `<div class="user__courses admin--info">`;

		this.courses?.forEach(course => {
			let mark = course.score;

			htmlString += `
                <div class="user__courses--course ${this.role}">
                    <p>Title: <b>${course.title}</b></p>
                    <p>Lector's score: <span class="${this.getGrade(mark)}">${this.getGrade(mark)}</span></p>
                    <p>Average student's score: <span class="${course.studentsScore}">${course.studentsScore}</span></p>
                </div>`;
		});

		htmlString += `</div>`;
		return htmlString;
	}
}

class Admin extends User {
	constructor(name, age, img, role, courses) {
		super(name, age, img, role, courses);
	}

	renderCourses(){
		let htmlString = `<div class="user__courses admin--info">`;

		this.courses?.forEach(course => {
			let mark = course.score;

			htmlString += `
			<div class="user__courses--course ${this.role}">
				<p>Title: <b>${course.title}</b></p>
				<p>Admin's score: <span class="${this.getGrade(mark)}">${this.getGrade(mark)}</span></p>
			    <p>Lector: <b>${course.lector}</b></p>
			</div>`;
		});

		htmlString += `</div>`;
		return htmlString;
	}
}

let students = users.filter(user => {
	if (user.role === 'student') {
		return user;
	}
});

students = students.map(user =>  new Student(user.name, user.age, user.img, user.role, user.courses));

students.forEach(user => {
	user.render();
});

let admins = users.filter(user => {
	if (user.role === 'admin') {
		return user;
	}
});

admins = admins.map(user =>  new Admin(user.name, user.age, user.img, user.role, user.courses));

admins.forEach(user => {
	user.render();
});

let lectors = users.filter(user => {
	if (user.role === 'lector') {
		return user;
	}
});

lectors = lectors.map(user =>  new Lector(user.name, user.age, user.img, user.role, user.courses));

lectors.forEach(user => {
	user.render();
});