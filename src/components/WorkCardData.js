import pro1 from "../assets/camera.jpg";
import pro2 from "../assets/meter.jpg";
import pro3 from "../assets/titanic.jpg";


const ProjectCardData = [
    {
        imgsrc: pro1,
        title: "ESP32-CAM",
        text: "This Project uses an ESP32 with an OV2640 camera to capture photos,saving them to SPIFFS. It periodically uploads these photos to Firebase Storage.The code handles WiFi connection, camera initialization, and Firebase authentication.It employs a timer to trigger photo capture and upload at regular intervals,relying on the Firebase_ESP_Client library for Firebase interactions.",
        source: "https://github.com/MehtabAzamkhan/Esp32-Cam"
    },
    {
        imgsrc: pro2,
        title: "Iot Based Smart Meter",
        text: "The IoT-based Smart Meter project introduces an intelligent and connected solution for energy consumption monitoring and management. Leveraging the Internet of Things (IoT) technology, this smart meter transforms traditional energy meters into sophisticated devices capable of providing real-time data and insights.",
        source: "https://github.com/MehtabAzamkhan/Electric-Meter-App_MicroController"
    },
    {
        imgsrc: pro3,
        title: "PCF8574",
        text: "Integrated the PCF8574 I/O expander using C. Simplify GPIO pin expansion for enhanced connectivity with sensors and devices in embedded systems.",
        source: "https://github.com/MehtabAzamkhan/PCF8574-I-o-Extension"
    },
    {
        imgsrc: pro3,
        title: "Titanic_Survival_Prediction",
        text: "The Titanic Survival Prediction project is a example of applying machine learning algorithms to analyze and predict the survival of passengers aboard the Titanic. This project leverages Python programming language and the Jupyter Notebook environment for interactive data analysis and model development.",
        source: "https://github.com/MehtabAzamkhan/Titanic_Survival_Prediction"
    },
    {
        imgsrc: pro3,
        title: "Andriod Studio Application",
        text: "Android app created in Java with Android Studio, syncs seamlessly with IoT-based Smart Meter. With real-time monitoring, remote control features, and cost tracking, it's a user-friendly tool for efficient energy management on the go.",
        source: "https://github.com/MehtabAzamkhan/smartmeterappjava1"
    },
    {
        imgsrc: pro3,
        title: "Iris-Flower Prediction",
        text: "Iris-Flower Prediction is a machine learning model that classifies iris flowers into setosa, versicolor, or virginica species based on features like sepal and petal dimensions. It's a simple yet illustrative example of classification algorithms in machine learning.",
        source: "https://github.com/MehtabAzamkhan/Iris-Flower"
    },
    {
        imgsrc: pro3,
        title: "Credit card Fraud Detection",
        text: "A Python-based credit card fraud detection system, implemented in Jupyter Notebook. Using machine learning, it analyzes transaction data to swiftly identify and prevent fraudulent activities, ensuring robust security for financial transactions.",
        source: "https://github.com/MehtabAzamkhan/Credit-card-Fraud-Detection"
    }
]

export default ProjectCardData;