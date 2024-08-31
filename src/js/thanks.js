$(document).ready(function () {
  // Показ модального окна при отправке формы
  $("form").submit(function (e) {
    e.preventDefault(); // Останавливаем стандартное поведение формы

    // Логика отправки формы через AJAX или другую методику
    // Если форма успешно отправлена, показываем модальное окно
    $("#thankYouModal").fadeIn();

    // Скрываем модальное окно через некоторое время
    setTimeout(function () {
      $("#thankYouModal").fadeOut();
    }, 5000); // Скрыть через 5 секунд (5000 миллисекунд)

    // Очистка формы
    $(this)[0].reset();
  });

  // Закрытие модального окна при нажатии на крестик
  $("#closeThankYouModal").click(function () {
    $("#thankYouModal").fadeOut();
  });
});
