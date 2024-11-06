   //  récupérer les propriétés CSS et autres informations
   function getElementInfo(element) {
    // Récupérer les styles 
    const computedStyle = window.getComputedStyle(element);
    
    // Informations à afficher
    const className = element.className; 
    const backgroundColor = computedStyle.backgroundColor; 
    const color = computedStyle.color; 
    const width = computedStyle.width; 
    const height = computedStyle.height; 
    const fontFamily = computedStyle.fontFamily;
    const fontSize = computedStyle.fontSize; 

    // Construire le message à afficher dans l'alerte
    const message = `
      Classe CSS : ${className}
      Couleur du texte : ${color}
      Couleur de fond : ${backgroundColor}
      Hauteur : ${height}
      Largeur : ${width}
      Police : ${fontFamily}
      Taille de la police : ${fontSize}
    `;

    return message;
  }

  //  afficher les informations au clic
  document.querySelector('.carre').addEventListener('click', function() {
    const info = getElementInfo(this); // Récupérer les informations de l'élément cliqué
    alert(info); // Afficher les informations dans une alerte
  });