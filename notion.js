const progressBar = document.querySelector('.progress-bar');
const progressText = document.querySelector('.progress-text');
const smallBar = document.getElementById("smallBar");


const startDate = new Date('2024-10-01'); 
const endDate = new Date('2025-06-01'); 

const totalDuration = endDate.getTime() - startDate.getTime();

const today = new Date();

const elapsedTime = today.getTime() - startDate.getTime();

const progress = Math.min(elapsedTime / totalDuration, 1) * 100; 

progressBar.style.width = `${progress}%`;
progressText.textContent = `${progress.toFixed(2)}%`;


const daysRemainingSpan = document.getElementById("days-remaining");
const monthsRemainingSpan = document.getElementById("months-remaining");
const yearsRemainingSpan = document.getElementById("years-remaining");

function updateCountdown() {
  const today = new Date();
  const diffInMs = endDate.getTime() - today.getTime();

  const inDays = (diffInMs / (1000 * 60 * 60 * 24))
  const years = Math.floor(inDays / 365);
  const months = Math.floor((inDays % 365) / 30); 
  const days = Math.floor((inDays % 365) % 30 );

  daysRemainingSpan.textContent = days;
  monthsRemainingSpan.textContent = months;
  yearsRemainingSpan.textContent = years;
}

updateCountdown(); 
setInterval(updateCountdown, 1000);

//------------------------------------------------------------------------------------------------------------ https://www.notion.so/Done-progress-ced96d9767d94d07a42599c5f6c72319?pvs=4
const { Client } = require('@notionhq/client');

const notion = new Client({ auth: "secret_loXza0WvvrPh8vgHlciXaydRbajsaf54JPqS8e75mTC" });

(async () => {
  const pageId = "ced96d9767d94d07a42599c5f6c72319";
  const response = await notion.pages.retrieve({ page_id: pageId });
  smallBar.style.width = `${(Math.round(response.properties['Percentage done'].rollup.number *1000)/10)}%`;
})();
