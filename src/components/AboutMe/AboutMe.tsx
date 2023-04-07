import "./about.css";

const AboutMe: React.FC = () => {
  return (
    <>
      <div className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-l from-blue-300 to-green-400">
            Você vê uma nota fixada na parede
          </h2>

          <div className="flex flex-col gap-12 md:flex-row">
            <div className="flex-1 text-white">
              <p>
                Você lê: Algumas ações parecem não ter reação, mas as dimensões
                mudam e os mundos se alinham tão certo quanto ondas de água se
                espalhando depois de jogar pedras no mar.
              </p>
              <p className="my-4">Manipulados de cima, dançando em cordas.</p>

              <p className="my-4">A agulha dentro da bussola gira.</p>

              <p className="my-4">
                Eu te pergunto `sete` se voce souber a resposta.
              </p>
            </div>
            <div className="flex-1">
              <div className="img-bg">
                <img
                  className="rounded-lg shadow-lg"
                  src="/assets/images/profile.webp"
                  alt="Rafael Angonese"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
