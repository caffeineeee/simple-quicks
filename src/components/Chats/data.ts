export type ChatsData = {
    title: string;
    date: string;
    time: string;
    lastMessageFrom?: string;
    lastMessage: string;
};

export type ChatsType = ChatsData[];

export const DUMMY_CHATS_DATA: ChatsType = [
    {
        title: '109220-Naturalization',
        date: 'January 1,2021',
        time: "19:10",
        lastMessageFrom: "Cameron Phillips",
        lastMessage: 'Please check this out!',
    },
    {
        title: 'Jeannette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow Up - Brief Service ]',
        date: '02/06/2021',
        time: "10:45",
        lastMessageFrom: "Ellen",
        lastMessage: 'Hey, please read.',
    },
    {
        title: '8405-Diana SALAZAR MUNGUIA',
        date: '01/06/2021',
        time: "12:19",
        lastMessageFrom: "Cameron Phillips",
        lastMessage: "I understand your initial concerns and thats very valid, Elizabeth. But you ..."
    },
    {
        title: 'FastVisa Support',
        date: '01/06/2021',
        time: "12:19",
        lastMessage: "Hey there! Welcome to your inbox."
    },
];
