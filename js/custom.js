let htmlLang = navigator.language || navigator.userLanguage; 
if (window.location.search == "?de") {
	htmlLang = 'de'
}
if (window.location.search == "?en") {
	htmlLang = 'en'
}

document.getElementById('en').onclick = () => {
	htmlLang = 'en'
	i18next.changeLanguage('en', (err, t) => {
		$('.allcontent').localize();
	});	
	refreshCalendar('en')
}
document.getElementById('de').onclick = () => {
	htmlLang = 'de';
	i18next.changeLanguage('de', (err, t) => {
		$('.allcontent').localize();
	});
	refreshCalendar('de')
}

i18next.init({
	lng: htmlLang,
	// debug: true,
	resources: {
	  en: {
		translation: {
			"main-header": "Gradle Training and Consulting",
			"button-training": "Book Gradle Training",
			"button-consulting": "Book Gradle Project Consulting",
			"button-online": "Learn Gradle Online",
			"button-plugins": "High-quality Gradle Plugins",

			"header-training": "Gradle Training",
			"header-training-sub": "for Teams or Groups - Online or Onsite",
			"header-consulting": "Gradle Project Consulting",
			"header-online": "Learn Gradle Online",
			"header-plugins": "Gradle Plugins",
			"header-me": "Who am I?",
			"header-other-sub": "Projects, Publications, Talks",

			"cv-header-1": "20+ years experience in software development",
			"cv-header-2": "5 years working on Gradle (Gradle 3 to Gradle 7)",
			"cv-header-3": "4+ years consultant and trainer for Gradle",
			"cv-and-more": "and more",
			"cv-phd": "PhD on Component-based Software Development",
			"cv-company": "co-founded a bootstrapped company",
			"cv-app": "shipped successful Android game",
			"cv-talks": "gave talks",
			"cv-articles": "wrote articles",
			"cv-training": "giving Gradle trainings",
			"cv-consulting": "helping teams with their Gradle builds",
			"cv-online": "video series on Gradle",
			"cv-plugins": "developing Gradle plugins",

			"training-title0": "Modern\nGradle Fundamentals (1\u00a0Day)",
			"training-title1": "Fundamentals Testing Dependencies (2\u00a0Days)",
			"training-title2": "Java Development with Gradle (3\u00a0Days)",
			"training-title3": "Java Modules Development with Gradle (3\u00a0Days)",
			"training-title4": "Android Development with Gradle (3\u00a0Days)",
			"training-title5": "Your\nindividual Training\n\n",

			"training-short0": "Modern Gradle Fundamentals",
			"training-short1": "Fundamentals/Testing/Dependencies",
			"training-short2": "Java Development",
			"training-short3": "Java Modules Development",
			"training-short4": "Android Development",
			"training-short5": "Individual Training",

			"training-tailored": "Training tailored to your needs (pick from topics below and more) - let's chat!",
			"training-select": "I am interested in:",
			"training-mail": "Contact via Mail*",
			"training-consent": "* By submitting a request, you consent that the data entered in the form, including the provided contact information, is stored by me to process your request and for follow-up communication. This data will not be forwarded to others without your consent.",
		
			"training-basics-title": "In each of my trainings you will learn",
			"training-basics-1": "💡 The fundamental Gradle concepts",
			"training-basics-2": "📐 How to structure Gradle projects - efficiently to work with and maintainable",

			"interested-1": "Interested? Lets talk!",
			"interested-2": "You can reach out via mail.",
			"interested-3": "Or book a slot to chat directly below.",

			"t-phylosophy": "Philosophy of Gradle",
			"t-modelling": "Modelling Software Projects with Gradle",
			"t-structure": "Gradle project structure",
			"t-efficient": "How Gradle builds efficiently",
			"t-task-configure": "Configure Tasks",
			"t-task-configure-test": "Configure Test Tasks",
			"t-task-implement": "Implement your own Task",
			"t-maitaining": "Maintainable growing Java projects",
			"t-structuring": "Structuring growing Projects",
			"t-build-app": "Building the Application",
			"t-lifecycle-tasks": "Documenting the Build with Lifecycle Tasks",
			"t-help-tasks": "Maintaing the Build with custom Help Tasks",
			"t-dep-analysis": "Dependency Analysis and Consisten Resolution",
			"t-tune": "Tuning Build Properties",
			"t-local": "Running fast Builds locally",
			"t-ci": "Running Builds on CI",
			"t-scans": "Analysing issues with Build Scans",

			"consulting-1": "Individual help with your project",
			"consulting-2": "Modernizing a Gradle project for better maintainability and faster builds",
			"consulting-3": "Starting a new project with a structure that is ready for growth",
			"consulting-4": "Migrating to the Java Module System",
			"consulting-5": "Migrating from Ant/Maven to Gradle",
			"consulting-6": "Regular support for a Gradle project",
			"consulting-7": "Help with your individual Gradle questions and issues",
			"consulting-8": "For any kind of Gradle project",

			"thank-you": "Thank you for your interest. I will be in touch shortly.",

			"about-me": `
				Hi! I am Jendrik and I work on software (20 years and counting).
				For six years, I work on and with Gradle.
				As a former member of the Gradle development team, I know about (almost) all details and quirks of Gradle.<br/>
				Software is everywhere and developing it is both <i>awesomely fascinating</i> but also <i>frustratingly complex</i>.
				I believe a key factor to craft good software is avoiding <i>accidental</i> complexity by structuring products in terms of <i>connected</i> components and systems.
				Designing the connections between these is as important as the components and systems themselves.
				We need to embrace the fact that everything needs to work together in harmony to form the final product.
				However you turn it, in the end, a software product is a <b>onepiece</b> where everything is connected.
			`,

			"onepiece": `
				Software is everywhere and developing it is both <i>awesomely fascinating</i> but also <i>frustratingly complex</i>.
				I believe a key factor to craft good software is avoiding <i>accidental</i> complexity by structuring products in terms of <i>connected</i> components and systems.
				Designing the connections between these is as important as the components and systems themselves.
				We need to embrace the fact that everything needs to work together in harmony to form the final product.
				However you turn it, in the end, a software product is a <b>onepiece</b> where everything is connected.
			`,

			"contact": "Contact",

			"w-and": "and",
			"w-with": "with",
		}
	  },
	  de: {
		translation: {
			"main-header": "Gradle Training und Consulting",
			"button-training": "Gradle Training buchen",
			"button-consulting": "Projektberatung buchen",
			"button-online": "Gradle online lernen",
			"button-plugins": "High-quality Gradle Plugins",

			"header-training": "Gradle Training",
			"header-training-sub": "für Teams oder Gruppen - Online oder Onsite",
			"header-consulting": "Gradle Projektberatung",
			"header-online": "Gradle online lernen",
			"header-plugins": "Gradle Plugins",
			"header-me": "Wer bin ich?",
			"header-other-sub": "Projekte, Publikationen, Vorträge",

			"cv-header-1": "20+ Jahre Erfahrung in der Softwareentwicklung",
			"cv-header-2": "5 Jahre Entwicklung an Gradle (Gradle 3 bis Gradle 7)",
			"cv-header-3": "4+ Jahre Berater und Trainer für Gradle",
			"cv-and-more": "und mehr",
			"cv-phd": "Promotion zu komponentenbasierter Softwareentwicklung",
			"cv-company": "Mitgründer einer Softwarefirma",
			"cv-app": "Entwicklung eines erfolgreichen Android-Games",
			"cv-talks": "Vorträge gehalten",
			"cv-articles": "Artikel geschrieben",
			"cv-training": "Gradle-Trainings durchführen",
			"cv-consulting": "Teams mit Gradle-Projekten unterstützen",
			"cv-online": "Videoserie über Gradle",
			"cv-plugins": "Entwicklung von Gradle-Plugins",

			"training-title0": "Moderne\nGradle Grundlagen (1\u00a0Tag)",
			"training-title1": "Grundlagen Testing Dependencies (2\u00a0Tage)",
			"training-title2": "Java Entwicklung\nmit Gradle (3\u00a0Tage)",
			"training-title3": "Java Modul Entwicklung\nmit Gradle (3\u00a0Tage)",
			"training-title4": "Android Entwicklung\nmit Gradle (3\u00a0Tage)",
			"training-title5": "Individuelles Training\n\n\n",

			"training-short0": "Modern Gradle Grundlagen",
			"training-short1": "Grundlagen/Testing/Dependencies",
			"training-short2": "Java Entwicklung",
			"training-short3": "Java Modul Entwicklung",
			"training-short4": "Android Entwicklung",
			"training-short5": "Individuelles Training",

			"training-tailored": "Individuell zusammengestellt (Auswahl aus folgenden Themen und mehr)",
			"training-select": "Ich interessiere mich für:",
			"training-mail": "Kontakt per Mail*",
			"training-consent": "*Durch Absenden einer Anfrage stimmen Sie damit überein, dass die Angaben aus dem Formular, inklusive der von Ihnen dort angegebenen Kontaktdaten, zwecks Bearbeitung der Anfrage, und für den Fall von Anschlussfragen, bei mir gespeichert werden. Diese Daten gebe ich nicht ohne Ihre Einwilligung weiter.",

			"training-basics-title": "Jedes Training vermittelt",
			"training-basics-1": "💡 Die grundlegenden Gradle-Konzepte",
			"training-basics-2": "📐 Wie man ein Gradle-Projekt effizient und wartbar strukturiert",

			"interested-1": "Interesse?",
			"interested-2": "Kontakt per Mail aufnehmen",
			"interested-3": "oder hier direkt einen Slot für ein Gespräch buchen.",

			"t-phylosophy": "Philosophie von Gradle",
			"t-modelling": "Softwareprojekte mit Gradle modellieren",
			"t-structure": "Gradle Projektstruktur",
			"t-efficient": "Mit Gradle effizient bauen",
			"t-task-configure": "Tasks konfigurieren",
			"t-task-configure-test": "Test-Tasks konfigurieren",
			"t-task-implement": "Eigene Tasks implementieren",
			"t-maitaining": "Wartbare und wachsende Java-Projekte",
			"t-structuring": "Wachsende Projekte gut strukturieren",
			"t-build-app": "Bauen einer Anwendung",
			"t-lifecycle-tasks": "Den Build mit Lifecycle-Tasks dokumentieren",
			"t-help-tasks": "Den Build mit eigenen Help-Tasks warten",
			"t-dep-analysis": "Dependency-Analyse und Consisten-Resolution",
			"t-tune": "Build-Details optimieren",
			"t-local": "Schnelle lokale Builds",
			"t-ci": "Builds auf CI ausführen",
			"t-scans": "Probleme mit Build Scans analysieren",

			"consulting-1": "Individuelle Unterstützung im Projekt",
			"consulting-2": "Modernisierung eines Gradle-Projekts für bessere Wartbarkeit und schnellere Builds",
			"consulting-3": "Ein neues Projekt mit guter Struktur beginnen",
			"consulting-4": "Ein Projekt auf das Java Modul System migrieren",
			"consulting-5": "Ein Ant/Maven-Projekt nach Gradle migrieren",
			"consulting-6": "Regelmäßiger Support für Gradle-Projekte",
			"consulting-7": "Unterstützung bei individuellen Gradle Fragen und Problemen",
			"consulting-8": "Für jede Art von Gradle-Projekt",

			"thank-you": "Vielen Dank für das Interesse. Ich werde mich in Kürze melden.",

			"about-me": `
				Hi! Ich bin Jendrik und arbeite seit über 20 Jahren an und mit Software.
				Seit sechs Jahren arbeite ich an und mit Gradle.
				Als ehemaliges Entwickler im Gradle-Entwicklungsteam, kenne ich (fast) alle Ecken (und Kanten) von Gradle.<br/>
				Software ist überall und Softwareentwicklung ist zugleich <i>sehr faszinierend</i> als auch <i>frustrierend komplex</i>.
				Ich bin überzeugt, dass es essentiell ist, Produkte als <i>verbundene</i> Komponenten und Systeme zu entwerfen um <i>unnötige</i> Komplexität zu vermeiden.
				Das Design der Verbindungen zwischen diesen ist dabei genauso wichtig wie das Design der Komponenten und Systeme selber. 
				Am Ende sollte alles optimal ineinander greifen, um das finale Produkt zu formen.
				Wie auch immer man es betrachtet, ein Softwareprodukt ist ein <b>Onepiece</b>, in dem alles verbunden ist.
			`,

			"contact": "Kontakt",

			"w-and": "und",
			"w-with": "mit",
		}
	  }
	}
}, function(_, _) {
	jqueryI18next.init(i18next, $);
	$('.allcontent').localize();
});

const day1 = document.getElementById('day1')
const day2 = document.getElementById('day2')
const day3 = document.getElementById('day3')
const individual = document.getElementById('individual')

day1.childNodes.forEach(c => individual.appendChild(c.cloneNode(true)))
day2.childNodes.forEach(c => individual.appendChild(c.cloneNode(true)))
day3.childNodes.forEach(c => individual.appendChild(c.cloneNode(true)))

const dJava0 = document.getElementById('d-java0')
const dModules0 = document.getElementById('d-modules0')
const dModules1 = document.getElementById('d-modules1')
const dModules2 = document.getElementById('d-modules2')
const dModules3 = document.getElementById('d-modules3')
const dAndroid0 = document.getElementById('d-android0')
const dAndroid1 = document.getElementById('d-android1')
const dAndroid2 = document.getElementById('d-android2')

const trainingSelect = document.getElementById('input-interest')

for (let i = 0; i < 6; i++) {
	const selectButton = document.getElementById('t' + i);
	selectButton.onclick = () => {
		selectButton.classList.add('selected')
		for (let j = 0; j < 6; j++) {
			const otherButton = document.getElementById('t' + j);
			if (otherButton != selectButton) {
				otherButton.classList.remove('selected')
			}
			const option = document.getElementById('o' + j);
			if (j === i) {
				option.setAttribute('selected', 'selected')
			} else {
				option.removeAttribute('selected')
			}
		}
	
		individual.classList.add('invisible')
		if (i == 0) {
			day1.classList.remove('invisible')
			day2.classList.add('invisible')
			day3.classList.add('invisible')
		} else if (i == 1) {
			day1.classList.remove('invisible')
			day2.classList.remove('invisible')
			day3.classList.add('invisible')
		} else if (i == 5) {
			day1.classList.add('invisible')
			day2.classList.add('invisible')
			day3.classList.add('invisible')
			individual.classList.remove('invisible')
		} else {
			day1.classList.remove('invisible')
			day2.classList.remove('invisible')
			day3.classList.remove('invisible')
			
			if (i == 2) { // Java
				dJava0.classList.remove('invisible')
				dModules0.classList.add('invisible')
				dModules1.classList.add('invisible')
				dModules2.classList.add('invisible')
				dModules3.classList.add('invisible')
				dAndroid0.classList.add('invisible')
				dAndroid1.classList.add('invisible')
				dAndroid2.classList.add('invisible')
			}

			if (i == 3) { // Modules
				dJava0.classList.add('invisible')
				dModules0.classList.remove('invisible')
				dModules1.classList.remove('invisible')
				dModules2.classList.remove('invisible')
				dModules3.classList.remove('invisible')
				dAndroid0.classList.add('invisible')
				dAndroid1.classList.add('invisible')
				dAndroid2.classList.add('invisible')
			} 

			if (i == 4) { // Android
				dJava0.classList.remove('invisible')
				dModules0.classList.add('invisible')
				dModules1.classList.add('invisible')
				dModules2.classList.add('invisible')
				dModules3.classList.add('invisible')
				dAndroid0.classList.remove('invisible')
				dAndroid1.classList.remove('invisible')
				dAndroid2.classList.remove('invisible')
			} 
		}
	}
}

const notYetBooked1 = document.getElementById('not-yet-booked1')
const notYetBooked2 = document.getElementById('not-yet-booked2')
const slotBooked1 = document.getElementById('slot-booked1')
const slotBooked2 = document.getElementById('slot-booked2')

const nameInput = document.getElementById('input-name')
const mailInput = document.getElementById('input-mail')
const companyInput  = document.getElementById('input-company')
const teamInput = document.getElementById('input-team')
const messageInput = document.getElementById('input-message')

const nameInput2 = document.getElementById('input-name2')
const mailInput2 = document.getElementById('input-mail2')
const companyInput2  = document.getElementById('input-company2')
const messageInput2 = document.getElementById('input-message2')

const mailButton = document.getElementById('button-mail')
mailButton.onclick = () => bookSlot(true)
const mailButton2 = document.getElementById('button-mail2')
mailButton2.onclick = () => bookSlot(false)

let dateButtons = [mailButton]
let dateButtons2 = [mailButton2]

function validateInput() {
	dateButtons.forEach(b => b.disabled = nameInput.value.length == 0 || !mailInput.value.toLowerCase().match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
	)
}
function validateInput2() {
	dateButtons2.forEach(b => b.disabled = nameInput2.value.length == 0 || !mailInput2.value.toLowerCase().match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
	)
}

nameInput.oninput = validateInput
mailInput.oninput = validateInput
nameInput2.oninput = validateInput2
mailInput2.oninput = validateInput2

function bookSlot(training) {
	const xhr = new XMLHttpRequest();
	xhr.open("POST", "https://mailer.onepiece.software/onepiece_appointment", true);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.onreadystatechange = function (oEvent) {
		if (xhr.readyState === 4) {
			if (xhr.status != 200) {
			   alert("Something went wrong. Please contact me directly: jendrik@onepiece.software");
			}
		}
	};
	xhr.onload = () => {
		notYetBooked1.classList.add("invisible")
		notYetBooked2.classList.add("invisible")
		slotBooked1.classList.remove("invisible")
		slotBooked2.classList.remove("invisible")
    };
	xhr.send(JSON.stringify({
		date: 0,
		name: training ? nameInput.value : nameInput2.value,
		mail: training ? mailInput.value : mailInput2.value,
		company: training ? companyInput.value : companyInput2.value,
		team: training ? teamInput.value : "",
		message: training ? messageInput.value : messageInput2.value,
		training: training,
		trainingSelected: trainingSelect.value
	}));
}
