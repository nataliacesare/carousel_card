const motosObj = [
    {
      title: "Scooter Elétrica Voltz EV1",
      paragraph:
        "O câmbio de 5 marchas da Scooter Elétrica Voltz EV1 oferece maior confiança e performance na pilotagem, tornando as subidas de marcha mais leves e as reduções mais suaves!",
      price: "800R$",
    },
    {
      title: "Honda CB 500X",
      paragraph:
        "O câmbio de 6 marchas da CB 500X oferece maior confiança e performance na pilotagem, tornando as subidas de marcha mais leves e as reduções mais suaves!",
      price: "500R$",
    },
  ];
  
  const motos = document.getElementsByClassName("moto");
  let counter = 0;
  
  const change = (value) => {
    counter += value;
  
    if (counter > motosObj.length - 1) {
      counter = 0;
    }
    if (counter < 0) {
      counter = 1;
    }
  
    motos[counter].children[0].innerHTML = motosObj[counter].title;
    motos[counter].children[2].innerHTML = motosObj[counter].paragraph;
    motos[counter].children[3].children[1].innerHTML = motosObj[counter].price;
    console.log(motos[counter].children[3].children[1]);
  
    motos[counter].scrollIntoView({ behavior: "smooth" });
  };