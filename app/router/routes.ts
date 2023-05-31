export interface AppRoute {
    path: string;
    label: string;
};

export const AppRoutes = [
    {
        path: '/work' as const,
        label: 'work' as const,
    } as AppRoute, 
    {
        path: '/about' as const,
        label: 'about' as const,
    } as AppRoute,
    {
        path: '/contact' as const,
        label: 'contact' as const,
    } as AppRoute,
]