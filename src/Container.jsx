const Container =(props)=>{
    return <>
    <div>{props.children}</div>
    </>
}
export default Container;
// Here we used childern property
/** Directly using children property
const Container =({children})=>{
    return <>
    <div>{children}</div>
    </>
}
 */