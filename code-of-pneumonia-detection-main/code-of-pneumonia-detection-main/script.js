document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const uploadedImage = document.getElementById('uploadedImage');
            uploadedImage.src = e.target.result;
            uploadedImage.style.display = 'block';
        }
        
        reader.readAsDataURL(file);

        // Simulate the prediction process (replace this with your AJAX call to the backend)
        setTimeout(() => {
            const predictionText = document.getElementById('prediction');
            predictionText.textContent = "Prediction: Pneumonia Detected"; // Example prediction
            predictionText.style.color = 'white'; // Change text color based on result
        }, 2000);
    }
});
        


