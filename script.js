
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const btn = document.getElementById('btn');
const output = document.getElementById('output');
const textInput = document.getElementById('text');
const delayInput = document.getElementById('delay');
btn.addEventListener('click', async () => {
    const text = textInput.value;
    const delay = parseInt(delayInput.value);

    if (!text || isNaN(delay)) return;

  
    output.innerText = "";

    await sleep(delay);

   
    output.innerText = text;
});