const demoData = {
    users: {
        'user1': {
            id: '5be185207afb8f1507e6c663',
            userName: 'medihebfaiza',
            firstName: 'Mohamed Iheb',
            lastName: 'FAIZA',
            photo: 'https://avatars1.githubusercontent.com/u/22474480?s=460&v=4'
        },
        'user2': {
            id: '5be185217afb8f1507e6c664',
            userName: 'marion-rul',
            firstName: 'Marion',
            lastName: 'RUL',
            photo: 'https://bit.ly/2yHma2e'
        }
    },
    cards: {
        'task1': {
            id: 'task1', 
            index: 0,
            title:'Make the report',
            description: 'You need to make the report in English',
            memberIds: ['user1','user2'],
            labelIds: ['label1','label2'],
            comments: [
                {
                    id: 'comment1',
                    content: 'This should be easy to do !',
                    userId: 'user1'
                },
                {
                    id: 'comment2',
                    content: 'Yes !',
                    userId: 'user2'
                },
            ],
            dueDate: '2018-11-01T18:00:00+01:00',
            creation_date: null,
            done: false
        },
        'task2': {
            id: 'task2',
            index: 1, 
            title:'Make the presentation',
            description: 'You need to make the presentation in English',
            membersIds: [],
            labelIds: ['label1','label2'],
            comments: [],
            dueDate: '2018-11-05T18:00:00+01:00',
            creation_date: null,
            done: false
        },
        'task3': {
            id: 'task3',
            index: 0, 
            title:'Add a list on board',
            description: 'You need to add a list on board with a button. The button stays in the right of the board.',
            members: [],
            labelIds: ['label1','label2'],
            comments: [],
            dueDate: '2018-11-15T18:00:00+01:00',
            creation_date: null,
            done: false
        },
        'task4': {
            id: 'task4',
            index: 1, 
            title:'Add a card on list',
            description: '',
            membersIds: [],
            labelIds: ['label4','label2','label1'],
            comments: [],
            dueDate: '2018-11-01T18:00:00+01:00',
            creation_date: null,
            done: false
        },
        'task5': {
            id: 'task5',
            index: 0, 
            title:'Make the tests',
            description: '',
            membersIds: [],
            labelIds: [],
            comments: [],
            dueDate: '2018-11-01T18:00:00+01:00',
            creation_date: null,
            done: false
        },
        'task6': {
            id: 'task6',
            index: 1, 
            title:'Read the documentation',
            description: '',
            membersIds: [],
            labelIds: ['label1'],
            comments: [],
            dueDate: '2018-11-01T18:00:00+01:00',
            creation_date: null,
            done: false
        },
        'task7': {
            id: 'task7',
            index: 2, 
            title:'Read the courses',
            description: '',
            membersIds: [],
            labelIds: ['label1','label3'],
            comments: [],
            dueDate: '2018-11-01T18:00:00+01:00',
            creation_date: null,
            done: false
        }
    },
    lists: {
        'list1': {
            id: 'list1',
            title:'Todo',
            cardIds: ['task1', 'task2'],
            toggleAddCard: false
        },
        'list2': {
            id: 'list2',
            title:'In progress',
            cardIds: ['task3', 'task4'],
            toggleAddCard: false
        },
        'list3': {
            id: 'list3',
            title:'Done',
            cardIds: ['task5', 'task6', 'task7'],
            toggleAddCard: false
        }
    },
    labels: {
        'label1': {
            id: 'label1',
            title: 'Optional',
            color: 'primary'
        },
        'label2': {
            id: 'label2',
            title: 'Low',
            color: 'success'
        },
        'label3': {
            id: 'label3',
            title: 'Urgent',
            color: 'danger'
        },
        'label4': {
            id: 'label4',
            title: 'Important',
            color: 'warning'
        }
    },

    boards: {
        '5be1bc49f711b032cb13bdc3': {
            id: '5be1bc49f711b032cb13bdc3',
            title: 'First Board',
            lists: ['list1','list2','list3'],
            teams:[]
        },
        '5be1bc49f711b032cb13bdc4': {
            id: '5be1bc49f711b032cb13bdc4',
            title: 'Marion Board',
            lists: ['list1'],
            teams:[]
        }
    },
    teams:{
        'Team1':{
            id:'Team1',
            name:'lala',
            boards:['5be1bc49f711b032cb13bdc3'],
            members:[],
            toggleAddMember:false
        },
        'Team2':{
            id:'Team2',
            name:'Teamzer',
            boards:['5be1bc49f711b032cb13bdc3','5be1bc49f711b032cb13bdc4'],
            members:['user2'],
            toggleAddMember:false
        }

    },
    home: ['5be1bc49f711b032cb13bdc3','5be1bc49f711b032cb13bdc4'],
    teamsManager:['Team1','Team2']
}

/*
    0:
createdAt: "2018-11-06T16:07:37.424Z"
labels: Array(4)
0: "5be1bc49f711b032cb13bdc8"
1: "5be1bc49f711b032cb13bdc9"
2: "5be1bc49f711b032cb13bdca"
3: "5be1bc49f711b032cb13bdcb"
length: 4
__proto__: Array(0)
lists: Array(2)
0: "5be1bc49f711b032cb13bdc5"
1: "5be1bc49f711b032cb13bdc6"
length: 2
__proto__: Array(0)
members: (2) ["5be1bc49f711b032cb13bdc0", "5be1bc49f711b032cb13bdc1"]
owner: "5be1bc49f711b032cb13bdc0"
teams: (2) ["5be1bc49f711b032cb13bdd9", "5be1bc49f711b032cb13bdda"]
title: "First Board"
updatedAt: "2018-11-06T16:07:37.519Z"
__v: 0
_id: "5be1bc49f711b032cb13bdc3"
__proto__: Object
1:
createdAt: "2018-11-06T16:07:37.427Z"
labels: Array(4)
0: "5be1bc49f711b032cb13bdcc"
1: "5be1bc49f711b032cb13bdcd"
2: "5be1bc49f711b032cb13bdce"
3: "5be1bc49f711b032cb13bdcf"
length: 4
__proto__: Array(0)
lists: Array(1)
0: "5be1bc49f711b032cb13bdc7"
length: 1
__proto__: Array(0)
members: (2) ["5be1bc49f711b032cb13bdc0", "5be1bc49f711b032cb13bdc1"]
owner: "5be1bc49f711b032cb13bdc1"
teams: ["5be1bc49f711b032cb13bdda"]
title: "Marion Board"
updatedAt: "2018-11-06T16:07:37.520Z"
__v: 0
_id: "5be1bc49f711b032cb13bdc4"
__proto__: Object
length: 2
__proto__: Array(0)
headers: {content-type: "application/json; charset=utf-8"}
request: XMLHttpRequest {onreadystatechange: ƒ, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}
status: 200
statusText: "OK"


 */

export default demoData;