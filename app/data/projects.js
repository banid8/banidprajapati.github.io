// data/projects.js

export const projects = {
	python: [
		{
			id: "regression",
			title: "Old Cars Price Prediction using Regression",
			description:
				"This project was done in Google colaboratory using Python. The dataset contains details of old cars. The project uses the scikit-learn library to build a linear regression model to predict the price of old cars.",
			main_image: "",
			images: ["/dataimages/regression1.png", "/dataimages/regression2.png"],
			learnings:
				"Learned about Machine Learning and Regression, the algorithms it uses and types of regression models.",
			github: "",
			website:
				"https://colab.research.google.com/drive/1W6Z-4xOcFeSKzpykuNhcOuZvv2bK-zQL?usp=sharing#scrollTo=bmIXzVhf-Qpy",
		},
		{
			id: "classification",
			title: "Drug Dataset Classification",
			description:
				"This project was done in Google colaboratory using Python. The dataset contains details of drugs uses and its effects on patients, especially Blood Pressure, Cholesterol, and Potassium. The project uses the scikit-learn library to build a classification model to predict the type of drug.",
			main_image: "",
			images: [
				"/dataimages/classification1.png",
				"/dataimages/classification2.png",
			],
			learnings: "Key learnings from the Classification project...",
			github: "",
			website:
				"https://colab.research.google.com/drive/18Fy4gEz2ZckzpiSv0fKrYZETOPzym7K2?usp=sharing",
		},
		{
			id: "speechtotext",
			title: "Speech to Text",
			description:
				"The script was developed during my internship in 'Rooster Logic' using Python and the Google Cloud Speech-to-Text API to convert audio data into text. It was applied to transcribe over 500 audio files from Nepali and Bhojpuri to English, demonstrating its ability to handle large-scale multilingual audio data. The project automated the transcription process, significantly improving efficiency and accuracy in converting spoken language into written text. This tool showcases the integration of Google Cloud's machine learning with Python to solve real-world transcription challenges.",
			main_image: "",
			images: [""],
			learnings: "Key learnings from the Text to Speech project...",
			github: "https://github.com/yourusername/textospeech",
			website: "https://textospeech-example.com",
		},
	],
	webDevelopment: [
		{
			id: "hostel-stays",
			title: "Hostel Stays",
			description:
				"Hostel Stays is a fully functioning collaborative project with my friends to create a website to help students or tourists find hostels in their area. The project uses React.js, Express.js, Node.js, and MySQL with other frameworks like TailwindCSS and ChakraUI. It finds the hostels based on the user's location and displays the details of the hostels as well as book the hostel. It also looks at other aspects of the website such as Admin Dashboard and User Profile.",
			main_image: "/images/hostelstays_main.png",
			images: ["/images/hostelstays1.png", "/images/hostelstays2.png"],
			learnings: "Key learnings from the Hostel Stays project...",
			github: "https://github.com/yourusername/hostel-stays",
			website: "https://hostel-stays-example.com",
		},
		{
			id: "weather-application",
			title: "Weather Application",
			description:
				"Weather Weather is a weather application built on the foundation of HTML, CSS, JS, PHP, and MySQL. This project was my first experience with PHP and MySQL. The project uses OpenWeatherMap API to fetch weather data and stores it in the database.",
			main_image: "",
			images: ["/dataimages/weather_main.png", "/dataimages/weather_main2.png"],
			learnings: "Key learnings from the Weather Application project...",
			github: "https://github.com/banidprajapati/WeatherWeather",
			website: "http://weatherweather.infinityfreeapp.com/",
		},
	],
	ui: [
		{
			id: "flora-scan",
			title: "Flora Scan",
			description:
				"A plant scanning application prototype was designed in Figma, offering various features to enhance the user experience. The app allows users to scan plants and instantly identify their species, along with other relevant details such as care instructions and environmental needs. In addition to plant identification, users can explore blogs and articles about plant care and botany. The app also fosters a social community, enabling users to interact, share tips, and discuss plant-related topics with other enthusiasts within the platform.",
			main_image: "",
			images: [""],
			learnings: "Key learnings from the Flora Scan project...",
			website:
				"https://www.figma.com/proto/uOwnJBIgVUhyls4UWLqyQI/Flora-Scan?node-id=2-3&t=aA2JV9DYLCtLkQ1M-1",
		},
	],
	java: [
		{
			id: "course-management-system",
			title: "Course Management System",
			description: "A course management system ",
			main_image: "/images/coursemanagement_main.png",
			images: [
				"/images/coursemanagement1.png",
				"/images/coursemanagement2.png",
			],
			learnings: "Key learnings from the Course Management System project...",
			github: "https://github.com/yourusername/course-management-system",
			website: "https://course-management-system-example.com",
		},
	],
	others: [
		{
			id: "word-script",
			title: "Word Script",
			description:
				"A script created in Google Apps Script to manage the formatting such as paragraph break, font size, spacing of a document in Google Docs.",
			main_image: "/images/wordscript_main.png",
			images: ["/images/wordscript1.png", "/images/wordscript2.png"],
			learnings: "Key learnings from the Word Script project...",
			github: "https://github.com/yourusername/word-script",
			website: "https://word-script-example.com",
		},
	],
};
