interface BarGraphsContainerProps {
    children: React.ReactNode
}


export function BarGraphsContainer({children}: BarGraphsContainerProps) {
    return (
        <div style={{width: '100%', height: '70%', border: '1px solid red'}}>
            {children}
        </div>
    )
}