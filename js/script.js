document.addEventListener('DOMContentLoaded', () => {
  const yesButton = document.querySelector('.yes');

  const submitData = (e) => {
    fetch('https://dating-63e93-default-rtdb.europe-west1.firebasedatabase.app/agreements.json', {
      method: 'POST',
      body: JSON.stringify({
        agreement: 'yes',
      }),
    })
  };

  yesButton.addEventListener('click', submitData);
});
