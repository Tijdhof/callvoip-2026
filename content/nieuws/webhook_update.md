---
title: "Webhook update"
featured: false
hideinsearch: false
hideingoogle: false
hidesocialshare: false
date: 2026-09-04T08:35:15.000+00:00
hero:
  disable_image_on_mobile: false
url: /nieuws/webhook-update-2026/
images:
- "/v1775055170/clicktdial_handleiding_middba.png"
---
<h1><h1>Webhook update: vermelding van de user</h1><br>
<br>
Goed nieuws! Gebruik je de Webhook om jouw AI Notulist samenvattingen op te halen?<br> 
Dan geeft de webhook vanaf nu ook door welke user het gesprek heeft gevoerd. <br>
Nu wordt het nog gemakkelijker om de AI samenvatting opde juiste plek in jouw CRM op te slaan.<br> 
Als je de webhook output bekijkt dan zie je de gegevens erbij staan. <br>

De AI notulist Webhook geeft nu de volgende variable mee:
<b>Hoofdvariabelen:</b>
title: De door AI gegenereerde titel of het hoofdonderwerp van het gesprek.
overview: Een beknopte, leesbare samenvatting van de besproken onderwerpen.
notes: De uitgebreide gespreksnotities, vaak gestructureerd met timestamps.
outcomes: De concrete actiepunten, vervolgstappen of conclusies.

<b>Metadata van het gesprek (binnen het 'call' object):</b>
from: Het telefoonnummer van de beller.
to: De bestemming of het interne nummer van de medewerker die heeft opgenomen.
via: Het nummer dat de beller daadwerkelijk heeft gedraaid (handig als je meerdere inkomende nummers hebt).
date: De exacte datum en tijd van het gesprek

Nu kun je gemakkelijk in je eigen CRM de notulen van het gesprek koppelen aan een medewerker omdat het interne nummer wordt meegegeven met "call to". Je kunt dit bijvoorbeeld verwerken in je output als "aangenomen door"..
<br>
Heb je vragen, neem dan gerust contact met ons op. <br>
<br>
