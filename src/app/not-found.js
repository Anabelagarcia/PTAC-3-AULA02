import Link from'next/link'

export default function NotFound(){
    return(
        <div>
            <span class="d-block p-2 bg-dark text-white">Página não encontrada!</span>
            <Link href="/">Retornar para Home</Link>
        </div>
    );
}