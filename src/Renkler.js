import Shape from "./Shape";
//appjs de tanımladığımız verilerden bu copınente ait olanları çekiyoruz
function Renkler(props){
    console.log("!!!!!!!!!!!!!!!!!",props)
    return(
       
        <div>
            <Shape
            title ={props.title}//title yazsam olur mu?
            renkler ={props.renkler}//shapesiz dene
            />
        </div>
    )

}

export default Renkler;