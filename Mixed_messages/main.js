const messages = {
    beginning_quotes : ["Today is a good day!", "It’s a wonderful life!", "Incoming positivity in 3..2..1",  
                        "Smile and show that you are a lot more stronger than you were yesterday!", "It’s a day brimming with optimism",
                        "Write it on your heart that every day is the best day in the year."],
    inspirational_quotes : ["“Happiness can be found even in the darkest of times, if one only remembers to turn on the light.” — Albus Dumbledore from Harry Potter and the Prisoner of Azkaban",
                            "'Sometimes you climb out of bed in the morning and you think, I’m not going to make it, but you laugh inside' — remembering all the times you’ve felt that way.” — Charles Bukowski",
                            "“Promise me you’ll always remember — you’re braver than you believe, and stronger than you seem, and smarter than you think.” — Christopher Robin from Winnie the Pooh",
                            "“If you have been brutally broken but still have the courage to be gentle to other living beings, then you’re a badass with a heart of an angel.” — Keanu Reeves",
                            "“The best thing you could do is master the chaos in you. You are not thrown into the fire, you are the fire.” — Mama Indigo",
                            "'Your present circumstances don’t determine where you can go, they merely determine where you start' — Nido Qubein",
                            "'It is during our darkest moments that we must focus to see the light' — Aristotle Onassis",
                            "'Out of suffering have emerged the strongest souls; the most massive characters are seared with scars.' — Khalil Gibran"],
    ending_quotes : [" Have a great day!", "Smile and conquer the day!", "Positivity always wins!", "When things go wrong, don't go with them!",
                    "The best is yet to be!", "One small positive thought can change your whole day!",
                    "Dwell on the beauty of life. Watch the stars, and see yourself running with them!"]                     
}

const randomnumgen = arrIn => {
    let random_num = Math.floor(Math.random()*arrIn.length)
    return random_num
}

const messageselector = (random_n, arrin) =>{
     return arrin[random_n]
    
}


const composing_messages = (obj_in) => {
    let message_arr = []
    let idx_arr = []
    while (message_arr.length != Object.keys(obj_in).length){
        let idx = Object.keys(obj_in)[randomnumgen(Object.keys(obj_in))]
        if ((idx_arr.indexOf(idx)<=(idx_arr.length-1)) && idx_arr.indexOf(idx)>=0){
            continue
        }
        idx_arr.push(idx)
        // let element = messageselector(randomnumgen(obj_in[idx]), obj_in[idx])
        // if ((message_arr.indexOf(element)<i) && message_arr.indexOf(element)>=0){
        //     break
        // }
        message_arr.push(messageselector(randomnumgen(obj_in[idx]), obj_in[idx]));
    }
    return message_arr.join("\n\n")

}

const display_messages = strIn => {
    console.log("*".repeat(72))
    console.log("Hey! How are you doing? :) ")
    console.log(strIn)
    console.log("Wishing you a day filled with happiness and joy!")
    console.log("*".repeat(72))
}

display_messages(composing_messages(messages));
