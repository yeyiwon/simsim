const cursor = document.querySelector('.cursor');
const texttt = document.querySelector('.texttt');
const texttt2 = document.querySelector('.texttt2');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
});

// Function to add scale effect
function addScale() {
    cursor.style.transform = 'translate(-50%, -50%) scale(8)';
}

// Function to remove scale effect
function removeScale() {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
}

// Add event listeners for hover over text elements
texttt.addEventListener('mouseover', addScale);
texttt.addEventListener('mouseout', removeScale);
texttt2.addEventListener('mouseover', addScale);
texttt2.addEventListener('mouseout', removeScale);
