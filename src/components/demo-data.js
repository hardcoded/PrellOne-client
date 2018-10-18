const demoData = {
    cards: {
        'task1': {
            id: 'task1', 
            title:'Have a pillowfight',
            description: '',
            members: [],
            labels: ['label1','label2'],
            due_date: null,
            creation_date: null
        },
        'task2': {
            id: 'task2', 
            title:'“Meow” on each received mail.',
            description: '',
            members: [],
            labels: ['label1','label2'],
            due_date: null,
            creation_date: null
        },
        'task3': {
            id: 'task3', 
            title:'Prank a stranger',
            description: '',
            members: [],
            labels: ['label1','label2'],
            due_date: null,
            creation_date: null
        },
        'task4': {
            id: 'task4', 
            title:'Hide from professor',
            description: '',
            members: [],
            labels: ['label4','label2','label1'],
            due_date: null,
            creation_date: null
        },
        'task5': {
            id: 'task5', 
            title:'Throw water balloons on strangers',
            description: '',
            members: [],
            labels: [],
            due_date: null,
            creation_date: null
        },
        'task6': {
            id: 'task6', 
            title:'Dress up like a Bruce Lee',
            description: '',
            members: [],
            labels: ['label1'],
            due_date: null,
            creation_date: null
        },
        'task7': {
            id: 'task7', 
            title:'Act like a dead person',
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
            cardIds: ['task1', 'task2']
        },
        'list2': {
            id: 'list2',
            title:'In progress',
            cardIds: ['task3', 'task4']
        },
        'list3': {
            id: 'list3',
            title:'Done',
            cardIds: ['task5', 'task6', 'task7']
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