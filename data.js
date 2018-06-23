'use strict';

const users = [
    {
        id: 1,
        first_name: 'Luke',
        last_name: 'Skywalker',
        nickname: 'luke',
        email: 'luke@email.de',
        friends: [
            '/users/2',
            '/users/3',
        ]
    },
    {
        id: 2,
        first_name: 'Max',
        last_name: 'Muster',
        nickname: 'madmax',
        email: 'max.muster@email.de',
        friends: [],
    },
    {
        id: 3,
        first_name: 'Foo',
        last_name: 'Bar',
        nickname: 'foobar',
        email: 'foo.bar@email.de',
        friends: [],
    }
]

const data = {
    getUsers: () => users,
    getUser: id => users.find(u => u.id === +id),
}

module.exports = data;