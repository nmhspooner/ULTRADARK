document.addEventListener('DOMContentLoaded', function () {
  const brightnessRange = document.getElementById('brightnessRange');

  brightnessRange.addEventListener('input', function () {
    const brightnessValue = parseInt(brightnessRange.value);
    chrome.scripting.executeScript({
      code: `
        const newStyle = document.createElement('style');
        newStyle.textContent = 'html { filter: brightness(${brightnessValue}%); }';
        document.documentElement.appendChild(newStyle);
      `,
    });
    chrome.storage.sync.set({ brightnessValue });
  });

  chrome.storage.sync.get(['brightnessValue'], function (result) {
    const storedValue = result.brightnessValue || 100;
    brightnessRange.value = storedValue.toString();
    brightnessRange.dispatchEvent(new Event('input'));
  });
});
