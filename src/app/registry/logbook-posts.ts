export interface Post {
    title: string;
    subtitle: string;
    id: string;
    path: string;
    date: string
}


export const logbookPosts: Post[] = [
    { title: 'Inventory and planification', subtitle: "First step", id: '1', path: 'pages/logbook/log1.md', date: "2024-10-20" },
];