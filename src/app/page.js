const url = "https://back-end-ifms-ochre.vercel.app/campi";

export default async function Home() {

  // fetch faz as requisições
  const resposta = await fetch(url,{
    next: {
      revalidate: 1
    }
  });
  const campi = await resposta.json();
 
  return (
    <main>
      <span class="d-block p-2 bg-dark text-white">Home</span>  
      {campi.map((campus) =>
        <div>
            <span class="d-block p-2 bg-dark text-white">{campus.nome_campus}</span>  
        </div>
      )}
    </main>
  )
}
