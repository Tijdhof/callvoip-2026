---
title: Callvoip Bubble AI Notulist aanvragen
url: "/aanvragen/ai-notulist/"
hideinsearch: false
hideingoogle: false
hidesocialshare: false
---
Vul het formulier in, controleer de bevestigingsmail en stuur een reply, met akkoord per mail, naar ons ter bevestiging van jouw opdracht.

{{< form "aanvragen-ai-notulist" "/aanvragen/verzonden" >}}  
{{< form/template "d-bb5785f73c154508a7d4125575855140">}}  
{{< form/to "aanvragen">}}

{{< form/fieldset "Bedrijfsgegevens" >}}

{{< form/input "Bedrijfsnaam" required >}}

{{< form/input "Klantnummer" >}}

{{< form/select "Aanhef" >}}
{{< form/option "Heer" >}}
{{< form/option "Mevrouw" >}}
{{</ form/select >}}

{{< form/input "Contactpersoon" required >}}

{{< form/input "Telefoonnummer" required >}}

{{< form/email "Email" required >}}

{{</ form/fieldset >}}

{{< form/fieldset "AI Notulist & Opties" >}}

{{< form/select "Maak jouw keuze" required >}}
{{< form/option "AI Notulist" >}}
{{< form/option "Koppeling van AI Notulist met Bubble" >}}
{{< form/option "Beide (AI Notulist & Koppeling met Bubble)" >}}
{{</ form/select >}}

Om gebruik te kunnen maken van AI Notulist, dient Call Recording ingeschakeld te zijn (standaard zetten we de bewaartermijn op 7 dagen).

{{< form/input "Voor welke gebruikers kunnen we gespreksopname inschakelen" required >}}

{{< form/textarea "Opmerkingen" >}}

{{</ form/fieldset >}}

{{< form/button "Verstuur formulier" >}}

{{</ form >}}
Let op: AI Notulist wordt automatisch geactiveerd voor alle gebruikers met Call Recording.
