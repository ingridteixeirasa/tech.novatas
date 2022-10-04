// Altera o <title> da página:
getTitle('Sobre...');

toggleTabs(location.hash.substr(-1));

$(document).on('click', '.tab-item', toggleTabs);

function toggleTabs() {

    console.log(location.hash.substr(-1));


    // var tabNumber;

    // if (tab == 0)
    //     tabNumber = $(this).attr('data-tab');
    // else
    //     tabNumber = tab;

    //     console.log(tab, tabNumber);

    // $('.tab-content').hide();
    // $('.tab-item').removeClass('border-on');
    // $(`div[data-tab="${tabNumber}"]`).addClass('border-on');
    // location.href = `#tab${tabNumber}`;

    // $(`#tab${tabNumber}`).show('fast');

}