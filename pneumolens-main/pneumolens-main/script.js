document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Simulate a delay for "processing"
    setTimeout(function() {
       
        const randomPrediction = Math.random() > 0.5 ? 'Pneumonia' : 'Normal';
        document.getElementById('prediction').textContent = `Prediction: ${randomPrediction}`;
    }, 1000);
});
