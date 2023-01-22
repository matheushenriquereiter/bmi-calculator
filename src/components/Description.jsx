const Description = ({ imc }) => {
  switch (true) {
    case imc < 18.5:
      return <p>Você está abaixo do peso!</p>;
    case imc < 25:
      return <p>Você está no seu peso ideal.</p>;
    case imc < 30:
      return <p>Você está com sobrepeso!</p>;
    case imc <= 40:
      return <p>Você está obeso!</p>;
    default:
      return <p>Você está com obesidade mórbida!</p>;
  }
};

export default Description;
