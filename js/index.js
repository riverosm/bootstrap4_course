$(function () {
  $("[data-toggle='popover']").popover();
  $("[data-toggle='popover']").popover();
  $('.carousel').carousel({
    interval: 3000
  });
  $('#contacto').on('show.bs.modal', function (e) {
    console.log('El modal contacto se esta mostrando.')
    $('#contactoBtn').removeClass('btn-outline-info');
    $('#contactoBtn').addClass('btn-outline-primary');
    $('#contactoBtn').prop('disabled', true);
  });
  $('#contacto').on('shown.bs.modal', function (e) {
    console.log('El modal contacto se mostro.')
  });
  $('#contacto').on('hide.bs.modal', function (e) {
    console.log('El modal contacto se esta ocultando.')
  });
  $('#contacto').on('hidden.bs.modal', function (e) {
    console.log('El modal contacto se oculto.')
    $('#contactoBtn').prop('disabled', false);
  });
});