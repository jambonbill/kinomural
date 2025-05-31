
const files=[
"2016-01-15-elvis-legs.gif",
"2016-01-20-trash-rain.gif",
"2016-01-24-hot-spring-festival-320.gif",
"2016-01-25-cliche-320.gif",
"2016-01-27-longan-320.gif",
"2016-01-28-good-morning-320.gif",
"2016-01-29-long-working-night-320.gif",
"2016-02-16-piroscafo-mafalda-320.gif",
"2016-02-20-i-do-adore-snowboarding-320.gif",
"2016-02-21-too-fat-to-fit-320.gif",
"2016-02-24-super-mamma-320.gif",
"2016-02-66-birds.gif",
"2016-03-03-music-saves-me-from-boring-tasks-320.gif",
"2016-03-06-maywa-denki-320.gif",
"2016-03-08-stormy-day--320.gif",
"2016-03-14-waiting-room-320.gif",
"2016-03-20-potatura-320.gif",
"2016-04-09-stare-at-computer-320.gif",
"2016-04-18-drawing-idalia-320.gif",
"2016-06-24-brexit-320.gif",
"2016-06-25-shine-movie-320.gif",
"2016-07-24-finally--320.gif",
"2016-11-15-scaring-good-mood-320.gif",
"2017-01-16_maria_kalman-320.gif",
"ailadi_Fireplace.gif",
"ailadi_GareStLazare.gif",
"ailadi_friendsKids.gif",
"ailadi_homeBrewing.gif",
"petscii_1143.gif",
"petscii_161.gif",
"petscii_271.gif",
"petscii_312.gif",
"petscii_490.gif"
]


class Kino{

    constructor(files) {
        this.files = files;

        this.audio= new Audio("./mp3/ranzoom (2beta).mp3");
        this.audio.loop = true;
        console.log("Audio is playing:", this.audio);

        this.container = document.getElementById("kino-container");

        console.log("constructor",this.container);

        //this.imageElement = document.createElement("img");
        //this.container.appendChild(this.imageElement);
        //this.shuffle();
        //this.render();

        this.container.onclick = () => this.play();
    }

    /*
    -- Modes --
    2x2 Random
    2x2 Repeat
    3x3 Random
    3x3 Repeat
    */
    play(){
        console.log("Playing audio:", this.audio);
        this.audio.play();
        this.shuffle();
        this.render();
    }

    shuffle() {
        for (let i = this.files.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.files[i], this.files[j]] = [this.files[j], this.files[i]];
        }
    }

    render(){
        console.log("Rendering image:", this.files[0]);

        this.container.innerHTML = ''; // Clear previous content

        let htm= "<table>";

        let size=3; // Default to 3x3 grid

        for(let i=0; i<size; i++){
            htm+= "<tr>";
            for(let j=0; j<size; j++){
                if(i===1 && j===1){
                    htm+= `<td><img src='img/${this.files[0]}'></td>`;
                }else{
                    htm+= `<td><img src='img/${this.files[1]}'></td>`;
                }
            }
            htm+= "</tr>";
        }

        htm+= "</table>";
        this.container.innerHTML = htm; // Clear previous content
    }
}


new Kino(files);