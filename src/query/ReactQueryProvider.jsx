import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

export const queryClient = new QueryClient()

export default function ReactQueryProvider({ children })
{
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}