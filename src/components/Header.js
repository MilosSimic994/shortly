import Illustratio from "../illustration-working.svg";

const Header = () => {
  return (
    <section className="header">
      <article>
        <h1>More then just shorter links</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, illo
          harum. Beatae cupiditate architecto similique fugit tempora adipisci
          reprehenderit id ut ab! Excepturi libero cupiditate suscipit a
          doloremque voluptas nihil amet nemo velit.
        </p>
        <button>Gete Started</button>
      </article>
      <img src={Illustratio} alt="" />
    </section>
  );
};

export default Header;
