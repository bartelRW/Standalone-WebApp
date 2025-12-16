// JavaScript function to assist with rendering charts using Chart.js
window.renderChart = (canvasId, chartConfig) => {
    const ctx = document.getElementById(canvasId).getContext('2d');
    new Chart(ctx, chartConfig);
};