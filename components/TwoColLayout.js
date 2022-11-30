
export default function TwoColLayout({ children, cols, border }) {
    return (
        <>
        <div className={`grid ${cols} border-black ${border} mx-7 xxl:mx-16`}>
            {children}
        </div>
        </>
    )
}