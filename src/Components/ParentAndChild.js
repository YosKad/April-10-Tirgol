
const Child = ({clickEvent, ...props}) =>{
    return (
        <>
        <button onClick= {clickEvent}> Click ME! </button>
        </>
    )
}


export const Parent = (props) => {
    const clickEventHandeler = () => {
        console.log("Clicked");
    }
    return (
<>

<Child clickEvent={clickEventHandeler} /> 


</>
    )
}


export default Parent;