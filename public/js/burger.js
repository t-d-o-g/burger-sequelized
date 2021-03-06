$(document).ready(() => {
  $('.input-form').on('submit', (event) => {
    event.preventDefault();

    const newBurger = {
      burger_name: $('#burgerInput').val().trim(),
      devoured: 0,
    };

    $.ajax('/api/burgers', {
      type: 'POST',
      data: newBurger,
    }).then(() => {
      window.location.reload();
    });
  });

  $('.devour-btn').on('click', function cb() {
    const id = $(this).data('id');

    const devouredTrue = {
      devoured: true,
    };

    $.ajax(`/api/burgers/${id}`, {
      type: 'PUT',
      data: devouredTrue,
    }).then(() => {
      window.location.reload();
    });
  });
});
