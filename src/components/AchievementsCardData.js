import pro4 from "../assets/camera.jpg";
import pro5 from "../assets/meter.jpg";
import pro6 from "../assets/titanic.jpg";


const AchievementCardData = [
    {
        imgsrc: pro4,
        title: "ESP32-CAM",
        text: "This Project uses an ESP32 with an OV2640 camera to capture photos,saving them to SPIFFS. It periodically uploads these photos to Firebase Storage.The code handles WiFi connection, camera initialization, and Firebase authentication.It employs a timer to trigger photo capture and upload at regular intervals,relying on the Firebase_ESP_Client library for Firebase interactions.",
        source: "https://github.com/MehtabAzamkhan/Esp32-Cam"
    },
    {
        imgsrc: pro5,
        title: "Iot Based Smart Meter",
        text: "The IoT-based Smart Meter project introduces an intelligent and connected solution for energy consumption monitoring and management. Leveraging the Internet of Things (IoT) technology, this smart meter transforms traditional energy meters into sophisticated devices capable of providing real-time data and insights.",
        source: "https://github.com/MehtabAzamkhan/Electric-Meter-App_MicroController"
    },
    {
        imgsrc: pro6,
        title: "Titanic_Survival_Prediction",
        text: "The Titanic Survival Prediction project is a example of applying machine learning algorithms to analyze and predict the survival of passengers aboard the Titanic. This project leverages Python programming language and the Jupyter Notebook environment for interactive data analysis and model development.",
        source: "https://github.com/MehtabAzamkhan/Titanic_Survival_Prediction"
    }
]

export default AchievementCardData;