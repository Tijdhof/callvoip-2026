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

{{< form/fieldset "AI Notulist en gesprekssamenvattingen wegschrijven in jouw CRM" >}}

Beschik je over:
1) de Bubble CRM-koppeling
2) de AI Notulist
... en biedt jouw CRM-systeem de mogelijkheid om gegevens in te loggen? (dit kunnen wij checken).
   
Dan kun je met dit formulier aanvragen dat Bubble de gesprekssamenvatting ophaalt en in jouw CRM noteert bij het call log. 

{{< form/select "Ik wil de samenvattingen van de AI Notulist via Bubble in je CRM wegschrijven: " required >}}
{{< form/option "AI Notulist" >}}
{{< form/option "Koppeling van AI Notulist met Bubble" >}}
{{< form/option "Beide (AI Notulist & Koppeling met Bubble)" >}}
{{</ form/select >}}

AI Notulist, dient Call Recording ingeschakeld te zijn (standaard zetten we de bewaartermijn op 7 dagen).

{{< form/input "Voor welke gebruikers kunnen we gespreksopname inschakelen" required >}}

{{< form/textarea "Opmerkingen" >}}

{{</ form/fieldset >}}

{{< form/button "Verstuur formulier" >}}

{{</ form >}}
Let op: AI Notulist wordt automatisch geactiveerd voor alle gebruikers met Call Recording.
