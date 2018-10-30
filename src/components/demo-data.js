const demoData = {
    cards: {
        'task1': {
            id: 1, 
            index: 0,
            title:'Make the report',
            description: 'You need to make the report in English',
            membersIds: [],
            labelIds: ['label1','label2'],
            due_date: null,
            creation_date: null
        },
        'task2': {
            id: 2,
            index: 1, 
            title:'Make the presentation',
            description: 'You need to make the presentation in English',
            membersIds: [],
            labelIds: ['label1','label2'],
            due_date: null,
            creation_date: null
        },
        'task3': {
            id: 3,
            index: 0, 
            title:'Add a list on board',
            description: 'You need to add a list on board with a button. The button stays in the right of the board.',
            members: [],
            labelIds: ['label1','label2'],
            due_date: null,
            creation_date: null
        },
        'task4': {
            id: 4,
            index: 1, 
            title:'Add a card on list',
            description: '',
            membersIds: [],
            labelIds: ['label4','label2','label1'],
            due_date: null,
            creation_date: null
        },
        'task5': {
            id: 5,
            index: 0, 
            title:'Make the tests',
            description: '',
            membersIds: [],
            labelIds: [],
            due_date: null,
            creation_date: null
        },
        'task6': {
            id: 6,
            index: 1, 
            title:'Read the documentation',
            description: '',
            membersIds: [],
            labelIds: ['label1'],
            due_date: null,
            creation_date: null
        },
        'task7': {
            id: 7,
            index: 2, 
            title:'Read the courses',
            description: '',
            membersIds: [],
            labelIds: ['label1','label3'],
            due_date: null,
            creation_date: null
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
    board: {
        id: 'board1',
        title: 'First Board',
        lists: ['list1','list2','list3']
    },
    modal: false
}

export default demoData;