$(document).ready(function () {
  function handleTags() {
    const tabletBreakpoint = 1024; // установите правильное значение для вашего $tablet
    if ($(window).width() <= tabletBreakpoint) {
      const tags = $(".search__tags span.tag");
      const showMoreButton = $(".show-more");

      if (tags.length > 8) {
        tags.slice(8).hide();
        showMoreButton.show();

        showMoreButton.click(function () {
          tags.show();
          showMoreButton.hide();
        });
      } else {
        showMoreButton.hide();
      }
    } else {
      // Удаляем обработчики событий и показываем все теги, если ширина больше $tablet
      $(".search__tags span.tag").show();
      $(".show-more").hide();
    }
  }

  // Запускаем скрипт при загрузке страницы
  handleTags();

  // Перезапускаем скрипт при изменении размера окна
  $(window).resize(function () {
    handleTags();
  });
});
