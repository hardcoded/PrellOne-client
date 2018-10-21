const demoData = {
    cards: {
        'task1': {
            id: 'task1', 
            title:'Make the report',
            description: 'You need to make the report in English',
            members: [],
            labels: ['label1','label2'],
            due_date: null,
            creation_date: null
        },
        'task2': {
            id: 'task2', 
            title:'Make the presentation',
            description: 'You need to make the presentation in English',
            members: [],
            labels: ['label1','label2'],
            due_date: null,
            creation_date: null
        },
        'task3': {
            id: 'task3', 
            title:'Add a list on board',
            description: 'You need to add a list on board with a button. The button stays in the right of the board.',
            members: [],
            labels: ['label1','label2'],
            due_date: null,
            creation_date: null
        },
        'task4': {
            id: 'task4', 
            title:'Add a card on list',
            description: '',
            members: [],
            labels: ['label4','label2','label1'],
            due_date: null,
            creation_date: null
        },
        'task5': {
            id: 'task5', 
            title:'Make the tests',
            description: '',
            members: [],
            labels: [],
            due_date: null,
            creation_date: null
        },
        'task6': {
            id: 'task6', 
            title:'Read the documentation',
            description: '',
            members: [],
            labels: ['label1'],
            due_date: null,
            creation_date: null
        },
        'task7': {
            id: 'task7', 
            title:'Read the courses',
            description: '',
            members: [],
            labels: ['label1','label3'],
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
    listOrder: ['list1','list2','list3']
}

export default demoData;