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

<div id="sim-keuze-sectie">
{{< form/fieldset "Type SIM-kaart" >}}

{{< form/select "Gewenste type SIM-kaart" required >}}

{{< form/option "Fysieke SIM-kaart" >}}

{{< form/option "E-sim" >}}

{{</ form/select >}}

{{</ form/fieldset >}}
</div>

<div id="adres-sectie">
{{< form/fieldset "Afleveradres (voor de SIM-kaarten)" >}}

{{< form/input "Straat" >}}

{{< form/input "Huisnummer" >}}

{{< form/input "Postcode" >}}

{{< form/input "Plaats" >}}

{{</ form/fieldset >}}
</div>

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
    // We zoeken de dropdown binnen onze sim-keuze-sectie
    var simSectie = document.getElementById("sim-keuze-sectie");
    var adresSectie = document.getElementById("adres-sectie");

    if (simSectie && adresSectie) {
        var selectEl = simSectie.querySelector("select");

        if (selectEl) {
            function checkSimType() {
                // Check exact wat er geselecteerd is (hoofdletterongevoelig)
                var gekozenWaarde = selectEl.value.toLowerCase();
                
                if (gekozenWaarde.includes("e-sim") || gekozenWaarde.includes("esim")) {
                    adresSectie.style.setProperty('display', 'none', 'important');
                } else {
                    // In alle andere gevallen (Fysieke SIM of standaard) gewoon tonen
                    adresSectie.style.setProperty('display', 'block', 'important');
                }
            }

            // Luister naar veranderingen van de gebruiker
            selectEl.addEventListener("change", checkSimType);
            
            // Voer direct uit bij het laden (zodat het klopt als de pagina herlaadt)
            checkSimType();
        }
    }
});
</script>
