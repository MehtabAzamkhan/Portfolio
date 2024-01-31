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
        title: "ESP32-CAM",
        text: "This Project uses an ESP32 with an OV2640 camera to capture photos,saving them to SPIFFS. It periodically uploads these photos to Firebase Storage.The code handles WiFi connection, camera initialization, and Firebase authentication.It employs a timer to trigger photo capture and upload at regular intervals,relying on the Firebase_ESP_Client library for Firebase interactions.",
        source: "https://github.com/MehtabAzamkhan/Esp32-Cam"
    },
    {
        imgsrc: pro3,
        title: "ESP32-CAM",
        text: "This Project uses an ESP32 with an OV2640 camera to capture photos,saving them to SPIFFS. It periodically uploads these photos to Firebase Storage.The code handles WiFi connection, camera initialization, and Firebase authentication.It employs a timer to trigger photo capture and upload at regular intervals,relying on the Firebase_ESP_Client library for Firebase interactions.",
        source: "https://github.com/MehtabAzamkhan/Esp32-Cam"
    }
]

export default ProjectCardData;