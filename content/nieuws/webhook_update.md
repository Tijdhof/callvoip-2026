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
- "/v1775055170/7090544_ig4ykj.jpg"
---
<h1><h1>Webhook update: vermelding van de user</h1><br>
<br>
Goed nieuws! Gebruik je de Webhook om jouw AI Notulist samenvattingen op te halen?<br> 
Dan geeft de webhook vanaf nu ook door welke user het gesprek heeft gevoerd. <br>
Nu wordt het nog gemakkelijker om de AI samenvatting opde juiste plek in jouw CRM op te slaan.<br> 
Als je de webhook output bekijkt dan zie je de gegevens erbij staan. <br>
<br><br>
De AI notulist Webhook geeft nu de volgende variable mee:<br>
<b>Hoofdvariabelen:</b><br>
title: De door AI gegenereerde titel of het hoofdonderwerp van het gesprek.<br>
overview: Een beknopte, leesbare samenvatting van de besproken onderwerpen.<br>
notes: De uitgebreide gespreksnotities, vaak gestructureerd met timestamps.<br>
outcomes: De concrete actiepunten, vervolgstappen of conclusies.<br>
<br><br>
<b>Metadata van het gesprek (binnen het 'call' object):</b><br>
from: Het telefoonnummer van de beller.<br>
to: De bestemming of het interne nummer van de medewerker die heeft opgenomen.<br>
via: Het nummer dat de beller daadwerkelijk heeft gedraaid (handig als je meerdere inkomende nummers hebt).<br>
date: De exacte datum en tijd van het gesprek<br>

Nu kun je gemakkelijk in je eigen CRM de notulen van het gesprek koppelen aan een medewerker omdat het interne nummer wordt meegegeven met "call to". Je kunt dit bijvoorbeeld verwerken in je output als "aangenomen door".
<br>
Heb je vragen, neem dan gerust contact met ons op. <br>
<br>
