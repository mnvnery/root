import Button from "./Button"

const TextCard = ({title, info, buttonText}) => {
    return (
        <div>
            <div>{title}</div>
            <div dangerouslySetInnerHTML={{__html: info}} className="underlined"/>
            <Button text={buttonText} mainColour='black' secColour='white'/>
        </div>
    )
}
export default TextCard