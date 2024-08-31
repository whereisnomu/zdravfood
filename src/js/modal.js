$(document).ready(function () {
  let modal = $("#modal");
  let modalBusiness = $("#modal-business");
  let thankYouModal = $("#thankYouModal");

  let button = $(".open-modal");
  let buttonBusiness = $(".open-modal-business");
  let closeButton = $(".close"); // Обновлено: используем общий класс для кнопок закрытия

  // Открытие модального окна для основной формы
  button.on("click", function (e) {
    e.preventDefault();
    modal.removeClass("fadeOut").fadeIn();
  });

  // Открытие модального окна для бизнес формы
  buttonBusiness.on("click", function (e) {
    e.preventDefault();
    modalBusiness.removeClass("fadeOut").fadeIn();
  });

  // Закрытие модальных окон
  closeButton.on("click", function () {
    $(this).closest(".modal").addClass("fadeOut").fadeOut();
  });

  // Закрытие модального окна при клике вне его
  $(window).on("click", function (event) {
    if ($(event.target).is(modal)) {
      modal.addClass("fadeOut").fadeOut();
    }
    if ($(event.target).is(modalBusiness)) {
      modalBusiness.addClass("fadeOut").fadeOut();
    }
    if ($(event.target).is(thankYouModal)) {
      thankYouModal.addClass("fadeOut").fadeOut();
    }
  });

  // Обработка отправки формы через AJAX
  $("form").submit(function (e) {
    e.preventDefault(); // Предотвращаем стандартное действие

    let form = $(this);
    let actionUrl = form.attr("action");
    let formData = form.serialize();

    $.ajax({
      type: "POST",
      url: actionUrl,
      data: formData,
      success: function (response) {
        if (response.trim() === "success") {
          modal.fadeOut();
          modalBusiness.fadeOut();
          thankYouModal.removeClass("fadeOut").fadeIn();
          setTimeout(function () {
            thankYouModal.fadeOut();
          }, 10000);
        } else {
          alert(
            "Произошла ошибка. Попробуйте еще раз. Ответ сервера: " + response
          );
        }
      },
      error: function (xhr, status, error) {
        alert("Произошла ошибка: " + status + " " + error);
      },
    });

    // Очистка формы
    form[0].reset();
  });
});
