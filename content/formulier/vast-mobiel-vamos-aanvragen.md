---
title: Vast Mobiel (Vamos) aanvragen
url: "/aanvragen/vamos/"
hideinsearch: false
hideingoogle: false
hidesocialshare: false
---

Vul het formulier in, controleer de bevestigingsmail en stuur een reply, met akkoord per mail, naar ons ter bevestiging van uw opdracht.

{{< form "aanvragen-vamos" "/aanvragen/verzonden" >}}  
{{< form/template "d-bb5785f73c154508a7d4125575855140">}}  
{{< form/to "aanvragen">}}

{{< form/fieldset "Bedrijfsgegevens" >}}

{{< form/input "Bedrijfsnaam" >}}

{{< form/input "Klantnummer" required >}}

{{< form/select "Aanhef" >}}

{{< form/option "Heer" >}}

{{< form/option "Mevrouw" >}}

{{</ form/select >}}

{{< form/input "Contactpersoon" >}}

{{< form/input "Telefoonnummer" >}}

{{< form/email "Email" required >}}

{{</ form/fieldset >}}

{{< form/fieldset "Type SIM-kaart" >}}

{{< form/select "Gewenste type SIM-kaart" required >}}

{{< form/option "Fysieke SIM-kaart" >}}

{{< form/option "E-sim" >}}

{{</ form/select >}}

{{</ form/fieldset >}}

{{< form/fieldset "Afleveradres (voor de SIM-kaarten)" >}}

{{< form/input "Straat" >}}

{{< form/input "Huisnummer" >}}

{{< form/input "Postcode" >}}

{{< form/input "Plaats" >}}

{{</ form/fieldset >}}

{{< form/fieldset "Welke mogelijkheden moet uw VAMOS SIM bieden?" >}}

{{< form/select "Aantal SIM-kaarten met: onbeperkt bellen en SMS in EU + 0GB" >}}

{{< form/option "0" >}}

{{< form/option "1" >}}

{{< form/option "2" >}}

{{< form/option "3" >}}

{{< form/option "4" >}}

{{< form/option "5" >}}

{{< form/option "6" >}}

{{< form/option "7" >}}

{{< form/option "8" >}}

{{< form/option "9" >}}

{{< form/option "10+" >}}

{{</ form/select >}}

{{< form/select "Aantal SIM-kaarten met: onbeperkt bellen en SMS in EU + 2GB data" >}}

{{< form/option "0" >}}

{{< form/option "1" >}}

{{< form/option "2" >}}

{{< form/option "3" >}}

{{< form/option "4" >}}

{{< form/option "5" >}}

{{< form/option "6" >}}

{{< form/option "7" >}}

{{< form/option "8" >}}

{{< form/option "9" >}}

{{< form/option "10+" >}}

{{</ form/select >}}

{{< form/select "Aantal SIM-kaarten met: onbeperkt bellen en SMS in EU + 5GB data" >}}

{{< form/option "0" >}}

{{< form/option "1" >}}

{{< form/option "2" >}}

{{< form/option "3" >}}

{{< form/option "4" >}}

{{< form/option "5" >}}

{{< form/option "6" >}}

{{< form/option "7" >}}

{{< form/option "8" >}}

{{< form/option "9" >}}

{{< form/option "10+" >}}

{{</ form/select >}}

{{< form/select "Aantal SIM-kaarten met: onbeperkt bellen en SMS in EU + 10GB data" >}}

{{< form/option "0" >}}

{{< form/option "1" >}}

{{< form/option "2" >}}

{{< form/option "3" >}}

{{< form/option "4" >}}

{{< form/option "5" >}}

{{< form/option "6" >}}

{{< form/option "7" >}}

{{< form/option "8" >}}

{{< form/option "9" >}}

{{< form/option "10+" >}}

{{</ form/select >}}

{{< form/textarea "Moet een bestaand mobiel nummer worden overgenomen? Zo ja, noteer hier de nummer(s)" >}}

{{< form/input "Gewenste datum dat het nummer wordt verhuisd" >}}

{{< form/fileupload "Upload hier een factuur van het mobiele abonnement dat u wilt verhuizen" >}}

{{< form/textarea "Opmerkingen" >}}

{{</ form/fieldset >}}

{{< form/button "Verstuur formulier" >}}

<br><br>

{{< layout/columns >}}

{{< layout/column3 >}}

**Tariefoverzicht**

{{</ layout/column3 >}}

{{< layout/column3 >}}

Maandelijks

{{</ layout/column3 >}}

{{< layout/column3 >}}

Eenmalig

{{</ layout/column3 >}}

{{</ layout/columns >}}

{{< layout/columns >}}

{{< layout/column3 >}}

Onbeperkt bellen EU + 0GB data
{{</ layout/column3 >}}

{{< layout/column3 >}}

€ 29,00 ex BTW (per SIM)

{{</ layout/column3 >}}

{{< layout/column3 >}}

€ 25,00 ex BTW (per SIM)

{{</ layout/column3 >}}

{{</ layout/columns >}}

{{< layout/columns >}}

{{< layout/column3 >}}

Onbeperkt bellen EU + 2GB data
{{</ layout/column3 >}}

{{< layout/column3 >}}

€ 39,00 ex BTW (per SIM)

{{</ layout/column3 >}}

{{< layout/column3 >}}

€ 25,00 ex BTW (per SIM)

{{</ layout/column3 >}}

{{</ layout/columns >}}

{{< layout/columns >}}

{{< layout/column3 >}}

Onbeperkt bellen EU + 5GB data
{{</ layout/column3 >}}

{{< layout/column3 >}}

€ 45,00 ex BTW (per SIM)

{{</ layout/column3 >}}

{{< layout/column3 >}}

€ 25,00 ex BTW (per SIM)
{{</ layout/column3 >}}

{{</ layout/columns >}}

{{< layout/columns >}}

{{< layout/column3 >}}

Onbeperkt bellen EU + 10GB data
{{</ layout/column3 >}}

{{< layout/column3 >}}

€ 49,00 ex BTW (per SIM)

{{</ layout/column3 >}}

{{< layout/column3 >}}

€ 25,00 ex BTW (per SIM)
{{</ layout/column3 >}}

{{</ layout/columns >}}

<br><br>  
**Let op:**

* Vamos heeft een opzegtermijn van een kalendermaand (dus: per einde van een hele maand).

{{</ form >}}

<script>
document.addEventListener("DOMContentLoaded", function() {
    // Zoek naar alle fieldsets op de pagina
    var fieldsets = document.querySelectorAll("fieldset");
    var adresFieldset = null;
    var simSelect = null;

    // Identificeer de juiste elementen op basis van de tekstinhoud (veiligste methode voor Hugo shortcodes)
    fieldsets.forEach(function(fs) {
        var legend = fs.querySelector("legend");
        if (legend) {
            if (legend.textContent.includes("Afleveradres")) {
                adresFieldset = fs;
            }
            if (legend.textContent.includes("Type SIM-kaart")) {
                simSelect = fs.querySelector("select");
            }
        }
    });

    // Als beide elementen zijn gevonden, passen we de logica toe
    if (adresFieldset && simSelect) {
        function updateAdresZichtbaarheid() {
            var geselecteerdeWaarde = simSelect.value.toLowerCase();
            
            // Als er E-sim is gekozen, verberg het adres direct.
            if (geselecteerdeWaarde.includes("e-sim") || geselecteerdeWaarde.includes("esim")) {
                adresFieldset.style.setProperty('display', 'none', 'important');
            } else {
                // Standaard gedrag (Fysieke SIM-kaart): Altijd tonen
                adresFieldset.style.setProperty('display', 'block', 'important');
            }
        }

        // Luister naar de dropdown wijziging
        simSelect.addEventListener("change", updateAdresZichtbaarheid);
        
        // Direct uitvoeren bij laden (Fysieke sim staat bovenaan, dus adres is direct zichtbaar)
        updateAdresZichtbaarheid();
    }
});
</script>
