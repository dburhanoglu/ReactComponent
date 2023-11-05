import Shape from "./Shape";

function Mevsimler(props){
    console.log(props)
    return(
        <div>
            <Shape
            title = {props.title}
            mevsimler ={props.mevsimler}
            />
  
        </div>
    )
}

export default Mevsimler;