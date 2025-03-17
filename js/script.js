document.addEventListener('DOMContentLoaded', () => {
  const yesButton = document.querySelector('.yes');
  const noButton = document.querySelector('.no');

  const submitData = (e) => {
    noButton.classList.add('hidden');

    fetch('https://dating-63e93-default-rtdb.europe-west1.firebasedatabase.app/agreements.json', {
      method: 'POST',
      body: JSON.stringify({
        agreement: 'yes',
      }),
    });
  };

  yesButton.addEventListener('click', submitData);

  const form = document.querySelector('.form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Получаем значение из поля ввода
    const dateValue = document.getElementById('date').value;

    // Создаем объект с данными для отправки
    const data = {
      date: dateValue,
    };

    // Отправляем данные на сервер с помощью fetch
    fetch('https://dating-63e93-default-rtdb.europe-west1.firebasedatabase.app/date.json', {
      method: 'POST', // Используем метод POST для отправки данных
      headers: {
        'Content-Type': 'application/json', // Указываем, что данные в формате JSON
      },
      body: JSON.stringify(data), // Преобразуем объект в JSON строку
    })
      .then((response) => response.json()) // Парсим ответ от сервера в формате JSON
      .then((data) => {
        console.log('Success:', data); // Логируем успех
        // Здесь можно обработать успешный ответ от сервера, например, показать сообщение
      })
      .catch((error) => {
        console.error('Error:', error); // Логируем ошибку в случае неудачи
      });
  });
});
