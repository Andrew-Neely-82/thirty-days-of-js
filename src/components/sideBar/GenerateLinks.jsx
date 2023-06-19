const GenerateLinks = () => {
  const links = [];

  for (let i = 1; i <= 30; i++) {
    let img;

    if (i >= 1 && i <= 10) {
      img = "📔";
    } else if (i >= 11 && i <= 20) {
      img = "📘";
    } else {
      img = "📙";
    }

    links.push(
      <a href={`/Day${i}`} key={i}>
        {img}&nbsp;Day {i}
      </a>,
    );
  }
  return links;
};

export default GenerateLinks;
