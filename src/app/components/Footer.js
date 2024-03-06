import Link from "next/link";
import Image from "next/image";

export default function Footer () {
    return(
        <footer>
            <Link href= "https://ead.ifms.edu.br/">
            <Image
                width={100}
                height={100}
                src={"https://www.ifms.edu.br/acesso-a-sistemas/imagens/moodle/@@images/image/preview"} /></Link> 

            <span class="d-block p-2 bg-primary text-white">Footer</span>
            </footer>
       
       
    );

    
}
