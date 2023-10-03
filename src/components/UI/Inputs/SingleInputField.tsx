export const SingleInputField = (props: any) => {
    return (
        <input {...props} onChange={(e) => props.onChange(e.target.value)}/>
    )
}
