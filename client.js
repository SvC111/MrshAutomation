TrelloPowerUp.initialize({
    'card-buttons': function (t, options) {
        return [{
            icon: 'https://www.flaticon.com/free-icons/correct',
            text: '<span style="color: #5aac44; font-weight: bold;">DONE</span>',
            callback: function (t) {
                return t.card('id', 'name')
                    .then(function (card) {
                        return t.board('lists')
                            .then(function (board) {
                                var doneList = board.lists.find(function (list) {
                                    return list.name.toUpperCase() === 'DONE';
                                });

                                if (!doneList) {
                                    return t.popup({
                                        title: 'B³¹d',
                                        content: 'Nie znaleziono listy "DONE" na tej tablicy.',
                                        actions: [
                                            {
                                                text: 'OK',
                                                callback: function () { return t.closePopup(); }
                                            }
                                        ]
                                    });
                                }

                                return t.set('card', 'idList', doneList.id)
                                    .then(function () {
                                        return t.closePopup();
                                    });
                            });
                    });
            }
        }];
    }
});