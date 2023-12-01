import './app.css';

function init(): void {
  const button = document.querySelector('#testButton');
  button?.addEventListener('click', testSubmitHandler);

  const buttonFetch = document.querySelector('#testButtonFetch');
  buttonFetch?.addEventListener('click', testApi);
}

function testSubmitHandler(e: Event): void {
  e.preventDefault();
  const outputElement = document.querySelector('#output');
  outputElement.textContent = 'Scripts work!';
}

async function testApi(e: Event) {
  e.preventDefault();
  const outputElement = document.querySelector('#outputFetch');
  const dataFromApi = await (await fetch('/api/ExampleJavaScript')).text()
  outputElement.textContent = dataFromApi;
}

init();