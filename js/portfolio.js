var Portfolio = {
    sort: function(items) {
        items.show();
        $('.ul_portfolio').find('a.a_portfolio').not(items).fadeOut(500);
    },
    showAll: function(items) {
        items.fadeIn(500);
    },
    doSort: function() {
        $('a', 'list-portfolio').on('click', function() {

            var $a = $(this);
            if (!$a.is('#all')) {

                var items = $('div[data-cat=' + $a.data('cat') + ']', '.ul_portfolio');

                Portfolio.sort(items);

            } else {

                Portfolio.showAll($('a.a_portfolio', '.ul_portfolio'));


            }

        });
    }
};

Portfolio.doSort();