// validaton contact

function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  let vemail =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  if (name == "") {
    alert("saisser votre nome");
  }
  if (vemail == "") {
    alert("saisser votre email");
  } else if (!vemail.test(email)) {
    alert("entrer email sous form Exemple@exemple.ex !!!");
  }
  if (subject == "") {
    alert("saisser votre subject");
  }

  if (message == "") {
    alert("saisser votre message");
  }

  alert(
    "votre Massage a ete envoye ;) \n\nname : " +
      name +
      "\n email : " +
      email +
      "\n sujet : " +
      subject +
      "\n message : " +
      message
  );
}








// reservation

var typeVehicule = [
  { type: "moto", prix: 100 },
  { type: "citadin", prix: 120 },
  { type: "compact", prix: 140 },
  { type: "berlin", prix: 200 },
  { type: "utilitaire", prix: 160 },
  { type: "camion", prix: 2500 },
  { type: "engin", prix: 9000 },
  ];

  var carburant = [
    { type: "essence", pourcantage: 0.14 },
    
    { type: "diesel", pourcantage: 0.21 },
    { type: "electrique", pourcantage: 0.05 },
    { type: "hybride", pourcantage: 0.09 },
  ];

  var boite = [
    { type: "manuelle", pourcantage: 0 },
    { type: "automatique", pourcantage: 0.19 },
  ];

  var typeSelectionner ="";
  var prixTypeVehicule;
  var pourcentageCarburant;
  var pourcentageBoite;
  var radioEssence = document.getElementById("essence");
  var radioDiesel = document.getElementById("diesel");
  var radioElectrique = document.getElementById("electrique");
  var radioHybride = document.getElementById("hybride");
  var radioManuelle = document.getElementById("manuelle");
  var radioAutomatique = document.getElementById("automatique");

  //Checked radio ===========================

  function radioChecked(){
    radioEssence.checked = false;
    radioDiesel.checked = false;
    radioElectrique.checked = false;
    radioHybride.checked = false;
    radioManuelle.checked = false;
    radioAutomatique.checked = false;

  }

 
     function calculePrixTypeVehicule(type){
       var i;
       for (i=0 ; i< typeVehicule.length;i++){
         if (typeVehicule[i].type==type){
          prixTypeVehicule = typeVehicule[i].prix;
          console.log(prixTypeVehicule);
         }
       }
     }

      function getPourcentageCarburant(radio) {
        var i;
        for (i = 0; i < carburant.length; i++) {
          if (carburant[i].type == radio) {
            pourcentageCarburant = carburant[i].pourcantage;
            console.log(pourcentageCarburant);
          }
        }
      }
     
      function getPourcentageBoite(radio) {
        var i;
        for (i = 0; i < boite.length; i++) {
          if (boite[i].type == radio) {
            pourcentageBoite = boite[i].pourcantage;
          }
        }
      }

      function activerBorder(type) {
      var i;
      for (i = 0; i <= typeVehicule.length; i++) {
        if (typeVehicule[i].type == type) {
          document.getElementById(typeVehicule[i].type).style.opacity = "1";
        } else {
          document.getElementById(typeVehicule[i].type).style.opacity = "0.6";
        }
      }
    }

    // function pricipale -----------------------------------
    
function validerImages(type) {
  typeSelectionner = type;

  if (type == "moto") {
    radioChecked();
    radioEssence.disabled = false;
    radioElectrique.disabled = false;
    radioDiesel.disabled = true;
    radioHybride.disabled = true;
    radioManuelle.disabled = true;
    radioAutomatique.disabled = true;
    calculePrixTypeVehicule(typeSelectionner);
    activerBorder(typeSelectionner);
  } else if (type == "citadin") {
    radioChecked();
    radioEssence.disabled = false;
    radioElectrique.disabled = false;
    radioDiesel.disabled = false;
    radioHybride.disabled = false;
    radioManuelle.disabled = false;
    radioAutomatique.disabled = true;
    calculePrixTypeVehicule(typeSelectionner);
    activerBorder(typeSelectionner);
  } else if (type == "compact") {
    radioChecked();
    radioEssence.disabled = false;
    radioElectrique.disabled = true;
    radioDiesel.disabled = false;
    radioHybride.disabled = false;
    radioManuelle.disabled = false;
    radioAutomatique.disabled = true;
    calculePrixTypeVehicule(typeSelectionner);
    activerBorder(typeSelectionner);
  } else if (type == "utilitaire") {
    radioChecked();
    radioEssence.disabled = true;
    radioElectrique.disabled = true;
    radioDiesel.disabled = false;
    radioHybride.disabled = true;
    radioManuelle.disabled = false;
    radioAutomatique.disabled = true;
    calculePrixTypeVehicule(typeSelectionner);
    activerBorder(typeSelectionner);
  } else if (type == "berlin") {
    radioChecked(); 
    radioEssence.disabled = false;
    radioElectrique.disabled = true;
    radioDiesel.disabled = false;
    radioHybride.disabled = false;
    radioManuelle.disabled = true;
    radioAutomatique.disabled = false;
    calculePrixTypeVehicule(typeSelectionner);
    activerBorder(typeSelectionner);
  } else if (type == "camion") {
    radioChecked();
    radioEssence.disabled = true;
    radioElectrique.disabled = true;
    radioDiesel.disabled = false;
    radioHybride.disabled = true;
    radioManuelle.disabled = true;
    radioAutomatique.disabled = false;
    calculePrixTypeVehicule(typeSelectionner);
    activerBorder(typeSelectionner);
  } else if (type == "engin") {
    radioChecked();
    radioEssence.disabled = false;
    radioElectrique.disabled = true;
    radioDiesel.disabled = false;
    radioHybride.disabled = true;
    radioManuelle.disabled = false;
    radioAutomatique.disabled = true;
    calculePrixTypeVehicule(typeSelectionner);
    activerBorder(typeSelectionner);
  }
}

function calculer() {
  var nombreJours = document.getElementById("nbJour").value;
  var res;

  if (typeSelectionner != "") {
    if (radioEssence.checked == true) {
      getPourcentageCarburant(radioEssence.value);
    } else if (radioDiesel.checked == true) {
      getPourcentageCarburant(radioDiesel.value);
    } else if (radioElectrique.checked == true) {
      getPourcentageCarburant(radioElectrique.value);
    } else if (radioHybride.checked == true) {
      getPourcentageCarburant(radioHybride.value);
    } else {
      alert("vous devez choisir un type de carburant");
    }

    if (radioManuelle.checked == true) {
      getPourcentageBoite(radioManuelle.value);
    } else if (radioAutomatique.checked == true) {
      getPourcentageBoite(radioAutomatique.value);
    } else if (radioManuelle.checked == false && radioAutomatique.checked == false && typeSelectionner == "moto" ) {
      res = parseFloat(
        (parseFloat(prixTypeVehicule) + parseFloat(prixTypeVehicule) * parseFloat(pourcentageCarburant)) * parseFloat(nombreJours)
      );
      document.getElementById("result").innerHTML = res;
    } else {
      alert("vous devez choisir un type de boite vitesse");
    }

    res = parseFloat(
      (parseFloat(prixTypeVehicule) + parseFloat(prixTypeVehicule) * parseFloat(pourcentageCarburant) + (parseFloat(prixTypeVehicule) *  parseFloat(pourcentageBoite))) * parseFloat(nombreJours)
      );
      
    if(res){
      document.getElementById("result").innerHTML = res;
    }
  } else {
    alert("vous devez selectionner type de vehicule");
  }
}


  


