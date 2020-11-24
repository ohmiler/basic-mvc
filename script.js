const houses = [
    {
      code: "SM",
      name: "Smith"
    },
    {
      code: "JD",
      name: "Jordan"
    },
    {
      code: "BL",
      name: "Billy"
    }
  ];
  
  // Return an array of characters belonging to a house
  const getFamily = houseCode => {
    switch (houseCode) {
      case "SM":
        return ["Mario", "Karen", "Tayler"];
      case "JD":
        return ["Deen", "Jasmin", "Atlanta", "Lilly"];
      case "BL":
        return ["Robert", "Lulu", "Sia"];
      default:
        return []; // Empty array
    }
  };
  
  // Create and return an HTML <option> tag
  const createOptionElement = (text, value) => {
    const element = document.createElement("option");
    element.textContent = text;
    element.value = value;
    return element;
  };
  
  // Create and return and HTML <li> tag
  const createLiElement = text => {
    const element = document.createElement("li");
    element.textContent = text;
    return element;
  };
  
  const houseElement = document.querySelector("select");
  
  // Fill the house list
  houses.forEach(house => {
    houseElement.appendChild(createOptionElement(house.name, house.code));
  });
  
  // Handle house change event
  houseElement.addEventListener("change", e => {
    // The value of the event target is the house code
    const fams = getFamily(e.target.value);
    const famElement = document.getElementById("family");
    // Empty the list
    famElement.innerHTML = "";
    // Add each character to the list
    fams.forEach(fam => {
      famElement.appendChild(createLiElement(fam));
    });
  });