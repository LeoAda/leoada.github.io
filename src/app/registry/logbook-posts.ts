export interface Post {
    title: string;
    id: string;
    path: string;
    date: string
}


export const logbookPosts: Post[] = [
    { title: 'Log 1', id: '1', path: 'pages/logbook/log1.md', date: "2024-10-20" },
    { title: 'Log 2', id: '2', path: 'pages/logbook/log2.md', date: "2024-10-21" }
];