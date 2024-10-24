export interface Post {
    title: string;

    id: string;
    path: string;
    date: string
}


export const logbookPosts: Post[] = [
    { title: 'Inventory and planification', id: '1', path: 'pages/logbook/log1.md', date: "2024-10-20" },
];