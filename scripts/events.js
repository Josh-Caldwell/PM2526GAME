import { stats } from "./stats.js";  
import { character_container } from "./globals.js";

/*
    HOW TO USE: import this in main.js and nowhere else.
    Place all event listeners in this file and import their respective things that they will trigger.
*/


/*

Add a event listener for each stat in the stats object and make sure the names are the same.

Stat template event listener is below:

document.addEventListener("event_name", (event) => {
    if (event.detail.value < 0) {
        console.log("Example");
    }
});

*/

for (const stat_name of Object.keys(stats)) {
    document.addEventListener(stat_name, (event) => {
        switch (stat_name) {
            case "money":
                if (event.detail.value <= 0) {
                    console.log("bankrupt ending");
                }
                break;
            case "schizophrenia":
                if (event.detail.value >= 100) {
                    console.log("schizo ending");
                } else if (event.detail.value < 0 ) {
                    stats.schizophrenia.value = 0;
                }
                break;
            case "gambling_anxiety":
                if (event.detail.value >= 100) {
                    console.log("Trigger All in bet sequence");
                } else if (event.detail.value < 0 ) {
                    stats.gambling_anxiety.value = 0;
                }
                break;
        }
    });
}

for (const character_name of character_container.get_all_character_names()) {
    document.addEventListener(`${character_name}_love`, (event) => {
        switch (character_name) {
            case "Benjamin Netanyahu":
                if (event.detail.value <= -100) {
                    console.log("trigger netneyau rage ending");
                } else if (event.detail.value >= 100) {
                    console.log("trigger netneyau love ending");
                }
                break;
        }
    });
} // WIP but this is the general idea of how to trigger character specific events based on their love stat. Just add more cases for each character and their respective endings.