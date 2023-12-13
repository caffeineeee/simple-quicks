type TasksData = {
    title: string;
    daysLeft: number;
    date: string;
    content?: string;
};

export type TasksType = TasksData[];

export const DUMMY_TASKS_DATA: TasksType = [
    {
        title: 'Close off Case #012920- RODRIGUES, Amiguel',
        daysLeft: 2,
        date: '12/06/2021',
        content: 'Closing off this case since this application has been cancelled. No one really understand how this case could possibly be cancelled. The options and the documents within this document were totally a guaranteed for a success!',
    },
    {
        title: 'Set up documentation report for several Cases : Case 145443, Case 192829 and Case 182203',
        daysLeft: 4,
        date: '14/06/2021',
        content: 'All Cases must include all payment transactions, all documents and forms filled. All conversations in comments and messages in channels and emails should be provided as well in.',
    },
    {
        title: 'Set up appointment with Dr Blake',
        daysLeft: 10,
        date: '22/06/2021',
    },
];
