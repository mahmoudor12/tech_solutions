
import Image from "next/image";

function front({img,txt,color,heigh,width}){
    function handle(){
        return console.log("gehen sie zu Termin seite");
    }
    return(<>
      <div className="" style={"heigh:{heigh}; widht:{width};backgroundcolor:{`$color`}"}>
        <Image src={img} alt="N"></Image>
        <p>{txt}</p>
        <button type="button" onClick={handle}>buchen Sie Ihren Termin</button>
      </div>
    </>);
}

export default front;
