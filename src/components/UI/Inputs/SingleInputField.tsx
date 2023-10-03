export const SingleInputField = (props: any) => {
    return (
        <input {...props} onChange={(e) => e.target.value}/>
    )
}
