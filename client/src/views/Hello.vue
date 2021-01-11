<template>
  <div class="wrapper pa-6">
    <v-row>
      <v-col cols="12">
        <v-img
          :src="require('../assets/idea.png')"
          class="my-3"
          contain
          height="200"
        />

        
      </v-col>
    </v-row >
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">hallo Leude</h1>
        Ich hab die letzten Monate was gebastelt...<br>
        würde mich freuen wenn du das ganze mal bisschen testen könntest :)<br><br>

        das ganze ist aktuell noch ein Prototyp würde mich aber freuen wenn du mir bisschen Feedback zu allem (Funktionalität, Nutzeroberfläche, Konzept, ...) geben könntest.
        Falls du die Idee gut findest und mitmachen willst -> <a href="https://github.com/florian-baumann/donno">Github</a>. Aber natürlich sind nicht nur alle Programmierer gefragt, sondern einfach jeder der Bock drauf hat. <br>
        Allg. gilt: Du musst nix können, nur Bock drauf haben, wir finden schon ne Baustelle für dich<br><br>
        Feedback gerne mir schreiben oder als Post mit #feedback<br><br>

        Einfach Account erstellen und ausprobieren.<br>
        ** (Nicht wundern, nachdem ein Account erstellt wurde werdet ihr wieder auf die Startseite zurückgleitet, könnt euch aber trotzdem einloggen) <br><br>
        ** (Email/Nutzername etc könnt ihr euch einfach was ausdenken)<br>
        ** (auch einfach irgendwas posten, da es ja nur ein Prototyp ist werd ich das warsch eh alles wieder löschen)<br>
        ** (nachdem ihr was gepostet habt, müsst ihr die Seite neuladen mait es erscheint)<br>
        ** (was so die Idee dahinter ist könnt ihr unter "Values" lesen (->kurz: twitter/reddit für ideen), aber dort keinerlei Anspruch auf Englisch oder Rechtschriebung;) )<br>
        danke :)<br><br><br><br>
        
        <p><a href="/contact">Contact</a></p>
      </v-col>
    </v-row>

    <p>
      server: {{idea}}
    </p>


    
  </div>
</template>

<script>
import axios from "axios";


export default {
  name: "Hello",
  data(){
    return {
      idea: null
    }
  },
  created () {
        //get idea from ideaId
        axios.get(process.env.VUE_APP_API_URL +"/").then(({ data }) => {
            this.idea = data
        });
    }
}
</script>

<style></style>