---
title: Ziggo Verbinding aanvragen
url: "/aanvragen/ziggo-internet/"
hideinsearch: false
hideingoogle: false
hidesocialshare: false
---
Vul het formulier in, controleer de bevestigingsmail en stuur een reply, met akkoord per mail, naar ons ter bevestiging van jouw opdracht.

{{< form "aanvragen-ziggo" "/aanvragen/verzonden" >}}  
{{< form/template "d-bb5785f73c154508a7d4125575855140">}}  
{{< form/to "aanvragen">}}

{{< form/fieldset "Bedrijfsgegevens" >}}

{{< form/input "Bedrijfsnaam" >}}

{{< form/input "Klantnummer (indien van toepassing)" >}}

{{< form/select "Aanhef" >}}
{{< form/option "Heer" >}}
{{< form/option "Mevrouw" >}}
{{</ form/select >}}

{{< form/input "Contactpersoon" required >}}

{{< form/input "Telefoonnummer" required >}}

{{< form/email "Email" required >}}

{{</ form/fieldset >}}

{{< form/fieldset "Aansluitadres" >}}

{{< form/input "Aansluitadres (Straat en huisnummer)" required >}}

{{< form/input "Postcode" required >}}

{{< form/input "Woonplaats" required >}}

{{</ form/fieldset >}}

{{< form/fieldset "Facturatiegegevens" >}}

{{< form/email "E-mailadres factuur" required >}}

{{< form/input "IBAN nummer" required >}}

{{< form/radiogroup "Automatische incasso" "inline" required >}} 
{{< form/radio "Ik ga akkoord met automatische incasso" "Ik ga akkoord met automatische incasso" >}} 
{{</ form/radiogroup >}}

{{</ form/fieldset >}}

{{< form/fieldset "Product & Contract" >}}

{{< form/select "Looptijd contract" >}}
{{< form/option "1 jaar" >}}
{{< form/option "2 jaar" >}}
{{</ form/select >}}

{{< form/select "Welke snelheid heb je nodig?" >}}
{{< form/option "200-om-40 MB/s (€ 53 ex. btw)" >}}
{{< form/option "600-om-60 Mb/s (€ 58 ex. btw)" >}}
{{< form/option "1 GB om 100 MB/s (€ 65 ex. btw)" >}}
{{</ form/select >}}

{{< form/radiogroup "De eenmalige aan- en afsluitkosten voor een Ziggo verbinding bedragen € 50,-" "inline" required >}} 
{{< form/radio "Ik ga akkoord met de eenmalige kosten (50,- ex BTW)" "De eenmalige kosten van een Ziggo verbinding bedragen 50,- ex BTW" >}} 
{{</ form/radiogroup >}}

{{< form/radiogroup "Wil je ook een modem of meer informatie hierover?" "inline" >}} 
{{< form/radio "Ja" "Ja, ik wil een modem of meer informatie hierover" >}} 
{{< form/radio "Nee" "Nee, ik hoef geen modem of extra informatie" >}} 
{{</ form/radiogroup >}}

{{</ form/fieldset >}}

{{< form/button "Verstuur formulier" >}}

{{</ form >}}
