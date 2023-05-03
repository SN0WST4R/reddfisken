//this would be the object shape for storing the questions  
 //you can change the questions to your own taste or even add more questions..
const questions = [
    {
        question: "Hva er mikroplast?",
        optionA: "En type fisk",
        optionB: "Små plastbiter",
        optionC: "En type tang",
        optionD: "En type korall",
        correctOption: "optionB"
    },

    {
        question: "Hvorfor er det farlig for dyrene å spise mikroplast?",
        optionA: "Det smaker vondt",
        optionB: "Det kan gjøre dem syke eller drepe dem",
        optionC: "Det gjør at de får bedre pels",
        optionD: " Det gjør at de kan flyte bedre",
        correctOption: "optionB"
    },

    {
        question: "Hva er en annen type forurensning som kan skade havet?",
        optionA: "Bølger",
        optionB: "Havstrømmer",
        optionC: "Kjemikalier fra industrien og landbruket",
        optionD: "Havmonstre",
        correctOption: "optionC"
    },

    {
        question: "Hva kan vi gjøre for å hindre at plast havner i havet?",
        optionA: "Kaste søppel i havet",
        optionB: "Resirkulere plasten vi bruker",
        optionC: "La plasten flyte rundt i havet",
        optionD: "Kjøpe mer plast",
        correctOption: "optionB"
    },

    {
        question: "Hva skjer med plast som havner i havet?",
        optionA: "Det løser seg opp og forsvinner",
        optionB: "Det kan være der i flere hundre år",
        optionC: "Det blir til sunn mat for fiskene",
        optionD: "Det forvandler seg til gull",
        correctOption: "optionB"
    },

    {
        question: "Hva kan vi gjøre for å hjelpe havet og dyrene som bor der?",
        optionA: "Kaste søppel i havet",
        optionB: "Bruke mindre plast",
        optionC: "La biler kjøre på stranden",
        optionD: "Bygge høye bygninger ved havet",
        correctOption: "optionB"
    },

    {
        question: "Hvorfor er det viktig å ta vare på havet?",
        optionA: "Fordi havet er fullt av monstre",
        optionB: "Fordi det gir oss mat og oksygen",
        optionC: "Fordi vi kan bade i det",
        optionD: "Fordi det er kjedelig å se på",
        correctOption: "optionB"
    },

    {
        question: "Hva skjer med dyrene når de blir skadet av forurensning i havet?",
        optionA: "De blir glade og sunne",
        optionB: "De kan fly til en annen planet",
        optionC: "De kan dø",
        optionD: "De kan få superkrefter",
        correctOption: "optionC"
    },

    {
        question: "Hva er en annen type forurensning som kan skade havet?",
        optionA: "Solskinn",
        optionB: "Regn",
        optionC: "Oljesøl fra båter",
        optionD: "Hvitløk",
        correctOption: "optionC"
    },

    {
        question: "Hvorfor er det viktig å plukke opp søppel på stranda?",
        optionA: "Fordi det er gøy å gjøre",
        optionB: "For å hindre at søppelet havner i havet",
        optionC: "Fordi søppel er pent å se på",
        optionD: "Det er ikke viktig",
        correctOption: "optionB"
    },

    {
        question: "Hva kan vi gjøre med plasten vi allerede har brukt?",
        optionA: "Kaste den i havet",
        optionB: "Resirkulere den",
        optionC: "La den ligge i naturen",
        optionD: "Bruke den som leketøy",
        correctOption: "optionB"
    },

    {
        question: "Hva er en annen type forurensning som kan skade havet?",
        optionA: "Søvn",
        optionB: "Fuglesang",
        optionC: "Støy fra båter",
        optionD: "Iskrem",
        correctOption: "optionC"
    },


    {
        question: "Hvorfor er det viktig å ikke bruke engangsplast?",
        optionA: "Fordi det er billigere",
        optionB: "Fordi det ser fint ut",
        optionC: "Fordi det kan være farlig for dyrene",
        optionD: "Fordi det er lettere å kaste bort",
        correctOption: "optionC"
    },

    {
        question: "Hva kan vi gjøre for å redusere forurensning i havet?",
        optionA: "Bruke mindre plast",
        optionB: "Kaste mer søppel i havet",
        optionC: "Bygge flere fabrikker ved havet",
        optionD: "Kjøpe mer plast",
        correctOption: "optionA"
    },

    {
        question: "Hva kan vi gjøre for å hjelpe dyrene som bor i havet?",
        optionA: "Gi dem mat hver dag",
        optionB: "Plukke opp søppel på stranda",
        optionC: "Skremme dem vekk fra havet",
        optionD: "Bygge høye bygninger ved havet",
        correctOption: "optionB"
    },

    {
        question: "Hva kan vi gjøre hvis vi ser søppel flyte rundt i havet?",
        optionA: "La det flyte rundt",
        optionB: "Plukke det opp og kaste det i søpla",
        optionC: "Dykke ned og se nærmere på det",
        optionD: "Gjøre ingenting",
        correctOption: "optionB"
    },

    {
        question: "Hva kan vi gjøre for å hindre at plast havner i havet når vi er på båttur?",
        optionA: "Kaste søppel i havet",
        optionB: "La søpla flyte rundt i havet",
        optionC: "Bruke mer plast",
        optionD: "Bruke søppelspann når man er på land",
        correctOption: "optionD"
    },

    {
        question: "Hvorfor er det viktig å ikke bruke produkter med mikroplast?",
        optionA: "Fordi det gjør huden finere",
        optionB: "Fordi det er billigere",
        optionC: "Fordi det kan skade dyrene i havet",
        optionD: "Fordi det lukter godt",
        correctOption: "optionC"
    },

    {
        question: "Hvorfor er det viktig å ha rene hav?",
        optionA: "Fordi det ser pent ut",
        optionB: "Fordi det kan gi oss mat",
        optionC: "Fordi det kan gi oss medisiner",
        optionD: "Fordi det kan være farlig å bade der",
        correctOption: "optionD"
    },

    {
        question: "Hva er en grunn til at mikroplast er et problem?",
        optionA: "Det kan samle seg opp i kroppen over tid ",
        optionB: "Det kan være morsomt å leke med",
        optionC: "Det kan hjelpe dyr å vokse",
        optionD: "Det er ikke et problem",
        correctOption: "optionA"
    },

    {
        question: "Hvilke produkter kan inneholde mikroplast?",
        optionA: "Kosmetikk og kroppsvask",
        optionB: "Frukt og grønnsaker",
        optionC: "Bøker og tegneserier",
        optionD: "Silke og ull",
        correctOption: "optionA"
    },

    {
        question: "Hva kan bedrifter gjøre for å redusere bruken av mikroplast?",
        optionA: "Fortsette å bruke mikroplast",
        optionB: "Finne alternative materialer",
        optionC: "Ikke gjøre noe",
        optionD: "Øke bruken av mikroplast",
        correctOption: "optionB"
    },

    {
        question: "Hva kan regjeringer gjøre for å redusere utslippene av mikroplast?",
        optionA: "Ikke gjøre noe",
        optionB: "Oppfordre til økt bruk av mikroplast",
        optionC: "Begrense bruk av mikroplast i produkter",
        optionD: "Fjerne restriksjoner på bruk av mikroplast",
        correctOption: "optionC"
    },

    {
        question: "Hva kan forbrukere gjøre for å redusere utslippene av mikroplast?",
        optionA: "Kaste plastavfall i naturen",
        optionB: "Bruke mer plast i hverdagen",
        optionC: "Ikke kjøpe produkter med mikroplast",
        optionD: "Ikke gjøre noe",
        correctOption: "optionC"
    },

    {
        question: "Hva er en grunn til at mikroplast er et problem?",
        optionA: "Det kan hjelpe dyr å vokse",
        optionB: "Det er ikke et problem",
        optionC: "Det kan være morsomt å leke med",
        optionD: "Det kan samle seg opp i kroppen over tid",
        correctOption: "optionD"
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let quizNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(quiz) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[quiz]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[quizNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "lightgreen"
            playerScore++ //adding to player's score
            quizNumber++ //adding 1 to quiz so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "pink"
            document.getElementById(correctOption).style.backgroundColor = "lightgreen"
            wrongAttempt++ //adds 1 to wrong attempts 
            quizNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (quizNumber <= 9) {
//displays next question as long as quiz number isn't greater than 9, remember quiz number starts from 0, so quiz 9 is question 10
            NextQuestion(quizNumber)
        }
        else {
            handleEndGame()//ends game if quiz number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Fortsett å øve."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Du kan en del."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Bra jobbet!"
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    quizNumber = 0
    shuffledQuestions = []
    NextQuestion(quizNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}
