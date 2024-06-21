
function updateProgress(value) {
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.setProperty('--progress', value + '%');
    
    // Remove the animation class to reset the animation
    progressBar.style.animation = 'none';
    
    // Trigger reflow to restart the animation
    progressBar.offsetHeight;
    
    // Apply the animation class with the new progress value
    progressBar.style.width = value + '%';
    progressBar.style.animation = 'fill 1s forwards';
}


