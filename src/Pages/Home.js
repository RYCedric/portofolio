import React from "react";
import Details from "../Components/Details";
import Navigation from "../Components/Navigation";
import Profile from "../Components/Profile";
import Title from "../Components/Title";

const Home = () => {
  return (
    <div className="main-container">
      <Navigation />
      <Profile />
      <main>
        <section>
          <Title span="A propos" after="de Moi" />

          <p>
            Bonjour, je m’appelle Yves Cédric, développeur Web junior.
            <br /> [ ...à remplir... ] <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nam
            natus aliquid reiciendis facere. Delectus, magnam. Exercitationem
            adipisci odio fuga laborum, autem ea mollitia commodi quasi quaerat
            aliquam provident tempora magni? Quaerat dolores soluta, ut facilis,
            cupiditate eos magni dicta quisquam odio odit, reprehenderit sit
            earum excepturi quas ullam. Quaerat.
            <br /> [ ...à remplir... ] <br />
          </p>
        </section>
        <div className="details">
          <Details param1="Age" value="27" />
          <Details param1="Freelance" value="Disponible" />
          <Details param1="Addresse" value="Antananarivo" />
          <Details param1="Telephone" value="034 28 191 00" />
        </div>
      </main>
    </div>
  );
};

export default Home;
