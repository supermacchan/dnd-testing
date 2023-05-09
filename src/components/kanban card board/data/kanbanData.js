import { v4 as uuid } from 'uuid';

export const kanbanData = [
    {
        id: 1,
        title: 'To Do',
        items: [
            {
                id: uuid(),
                title: 'Learn how to drag&drop'
            },
            {
                id: uuid(),
                title: 'Finish test task'
            },
            {
                id: uuid(),
                title: 'Check dependencies'
            },
            {
                id: uuid(),
                title: 'Fix console errors'
            },
            {
                id: uuid(),
                title: 'Add TypeScript'
            },
        ]
    },
    {
        id: 2,
        title: 'In Progress',
        items: [
            {
                id: uuid(),
                title: 'Testing'
            },
            {
                id: uuid(),
                title: 'Error handling'
            },
            {
                id: uuid(),
                title: 'Conditional render'
            },
            {
                id: uuid(),
                title: 'Fix styles'
            }
        ]
    },
    {
        id: 3,
        title: 'Done',
        items: [
            {
                id: uuid(),
                title: 'Fetch star count'
            },
            {
                id: uuid(),
                title: 'Add notifications'
            },
            {
                id: uuid(),
                title: 'Console log cleanup'
            },
            {
                id: uuid(),
                title: 'Add Loader'
            },
            {
                id: uuid(),
                title: 'Update Readme.md'
            },
            {
                id: uuid(),
                title: 'Basic markup'
            },
        ]
    }
]