
const quotes = [
    {
        quote: "My mother always used to say: The older you get, the better you get, unless you’re a banana.",
        author: "Rose Betty White",
    },
    { 
        quote: "I am sick of following my dreams man. I’m just going to ask where they’re going and hook up wit h ’em later.",
        author: "Mitch Hedberg",
    },
    { 
        quote: "Clothes make the man. Naked people have little or no influence in society.",
        author: "Mark Twain",
    },
    { 
        quote: "Before you marry a person, you should first make them use a computer with slow Internet to see who they really are.",
        author: "Will Ferrell",
    },
    { 
        quote: "I love being married. It’s so great to find that one special person you want to annoy for the rest of your life.",
        author: "Rita Rudner",
    },
    { 
        quote: "I want my children to have all the things I couldn’t afford. Then I want to move in with them.",
        author: "Phyllis Diller",
    },
    { 
        quote: "Insomnia sharpens your math skills because you spend all night calculating how much sleep you’ll get if you’re able to ‘fall asleep right now.",
        author: "Anonymous",
    },
    { 
        quote: "I’m not superstitious, but I am a little stitious",
        author: "Michael Scott",
    },
    { 
        quote: "I haven’t spoken to my wife in years. I didn’t want to interrupt her.",
        author: "Rodney Dangerfield",
    },  { 
        quote: "I used to sell furniture for a living. The trouble was, it was my own.",
        author: "Les Dawson",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;