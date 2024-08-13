import Form from "./components/Form";

function App() {
  return (
    <div>
      <h1 className="text-red-600">Inscreva-se</h1>
      <p>Assine nossa Newsletter e mantenha-se informado!</p>
      <div>
        <Form />
      </div>
      <p>
        Ao se inscrever, você passará a receber os nossos e-mails com as
        melhores dicas e novidades.{" "}
      </p>
    </div>
  );
}

export default App;
