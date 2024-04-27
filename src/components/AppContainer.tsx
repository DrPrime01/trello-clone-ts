export default function AppContainer({ children }: React.PropsWithChildren) {
    return <div className="h-screen w-full p-5 flex gap-5 items-start bg-[#3179ba]">{children}</div>
}