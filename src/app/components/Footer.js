import Link from "next/link";
import Image from "next/image";

export default function Footer () {
    return(
        <footer style={{backgroundColor:"#F98012"}}>
            

        <div class="container text-center">
            <div class="row align-items-center">
            <div class="col">
            <Link href= "https://ead.ifms.edu.br/">
            <Image
                width={500}
                height={300}
                src={"https://raleduc.com.br/wp-content/uploads/2018/11/Moodle_july27-1.png"} /></Link> 
            </div>
            </div>
            </div>
            </footer>
       
       
    );

    
}
