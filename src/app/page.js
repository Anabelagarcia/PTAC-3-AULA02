const url = "http://localhost:3000/api";

export default async function Home() {

  // fetch faz as requisições
  const resposta = await fetch(url,{
    
  });
  const campus = await resposta.json();
 
  return (
    <main>
      <h1>Home</h1>
      {campus.map((campi) =>
        <div>
             <p>{campi.nome_campi}</p>
        </div>
      )}
    </main>
  )
}
