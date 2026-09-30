// Envoi du formulaire d'inscription via Web3Forms (https://web3forms.com)
// Aucune donnée ne transite par un serveur à vous : Web3Forms relaie simplement
// le contenu du formulaire par e-mail à l'adresse associée à votre clé d'accès.

const form = document.getElementById("reg-form");
const statusBox = document.getElementById("form-status");
const submitBtn = document.getElementById("submit-btn");

function showStatus(message, type){
  statusBox.textContent = message;
  statusBox.classList.remove("is-success", "is-error");
  statusBox.classList.add("is-visible", type === "success" ? "is-success" : "is-error");
}

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const accessKey = form.querySelector('input[name="access_key"]').value;
  if (!accessKey || accessKey === "VOTRE_CLE_WEB3FORMS_ICI") {
    showStatus(
      "Le formulaire n'est pas encore configuré : il manque la clé d'accès Web3Forms dans inscription.html. Voir le README pour l'obtenir.",
      "error"
    );
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = "Envoi en cours...";

  const formData = new FormData(form);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      showStatus(
        "Inscription reçue. Une confirmation vous parviendra par e-mail. Bienvenue dans la boucle.",
        "success"
      );
      form.reset();
      submitBtn.textContent = "Inscription envoyée";
    } else {
      throw new Error(result.message || "Erreur inconnue");
    }
  } catch (err) {
    showStatus(
      "L'envoi a échoué. Vérifiez votre connexion et réessayez, ou écrivez directement à contact@monsieurperformance.fr.",
      "error"
    );
    submitBtn.disabled = false;
    submitBtn.textContent = "Valider mon inscription";
  }
});
