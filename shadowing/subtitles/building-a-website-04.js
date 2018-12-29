var subtitle = [
    {
        "startTime": 0,
        "endTime": 7.11,
        "content": [
            "PAUL LEWIS: Today",
            "I've had a little bit",
            "of a play with the images",
            "for the Chrome Dev Summit",
            "site-- the mastered images."
        ]
    },
    {
        "startTime": 7.11,
        "endTime": 15.35,
        "content": [
            "If you look at what",
            "I've got on screen,",
            "these masthead",
            "images have the kind",
            "of angular cutoff at the bottom."
        ]
    },
    {
        "startTime": 15.35,
        "endTime": 25.61,
        "content": [
            "And I was thinking about this.",
            "There's kind of a couple",
            "of ways you could do it.",
            "One would be, you actually just",
            "have the image as a rectangle,",
            "and then you kind of overlay",
            "something on the top,",
            "like a triangle."
        ]
    },
    {
        "startTime": 25.61,
        "endTime": 35.762,
        "content": [
            "Like, say, using",
            "SVG or something.",
            "And that's actually what I",
            "did in the holding page--",
            "the announcement page here."
        ]
    },
    {
        "startTime": 35.762,
        "endTime": 40.21,
        "content": [
            "This has a slight angle on",
            "it, which you can probably",
            "see if I make it a bit smaller."
        ]
    },
    {
        "startTime": 40.21,
        "endTime": 53.71,
        "content": [
            "It has a slight",
            "angle on it upwards.",
            "But the thing is, when",
            "you've got that triangle,",
            "when it butts up to the",
            "white rectangle above it",
            "in this case, sometimes",
            "there's a hairline crack."
        ]
    },
    {
        "startTime": 53.71,
        "endTime": 63.66,
        "content": [
            "And I filed a bug",
            "against Chrome saying,",
            "there's a hairline crack on",
            "phones because, I assume,",
            "it's some kind of",
            "rounding issue to do",
            "with not exactly lining up."
        ]
    },
    {
        "startTime": 63.66,
        "endTime": 69.46,
        "content": [
            "Anyway, so I was like, OK, I",
            "need to find a different way.",
            "And I've been messing",
            "around with SVG."
        ]
    },
    {
        "startTime": 69.46,
        "endTime": 73.932,
        "content": [
            "And it's one of these things",
            "that I could not get it right."
        ]
    },
    {
        "startTime": 73.932,
        "endTime": 80.919,
        "content": [
            "Here's what I",
            "actually have, right?",
            "So, I've got the image.",
            "And, see, that kind",
            "of roughly works."
        ]
    },
    {
        "startTime": 80.919,
        "endTime": 88.67,
        "content": [
            "If you look at it--",
            "actually, let me switch",
            "across to VS code, right."
        ]
    },
    {
        "startTime": 88.67,
        "endTime": 98.25,
        "content": [
            "What we've got is there's",
            "an image which is a pattern.",
            "So, there's a",
            "rectangle here which",
            "uses the image as a pattern."
        ]
    },
    {
        "startTime": 98.25,
        "endTime": 104.99,
        "content": [
            "And it could have been-- I could",
            "have used an image element,",
            "actually, a square",
            "image element."
        ]
    },
    {
        "startTime": 104.99,
        "endTime": 111.78,
        "content": [
            "Because this was kind",
            "of where I got to.",
            "And then there's a",
            "clip-path of this clip."
        ]
    },
    {
        "startTime": 111.78,
        "endTime": 119.75,
        "content": [
            "And the clip is-- it's a",
            "rectangle with a triangular",
            "bit at the bottom because",
            "of the view box that's set."
        ]
    },
    {
        "startTime": 119.75,
        "endTime": 125.82,
        "content": [
            "It's all kind of kept",
            "broadly in proportion.",
            "I don't mind the",
            "angle of the triangle",
            "kind of squishing in and out."
        ]
    },
    {
        "startTime": 125.82,
        "endTime": 138.14,
        "content": [
            "It just has to look OK-ish",
            "for the screen size it's on.",
            "The problem is the",
            "effect isn't what I want,",
            "because the image is kind of",
            "getting smaller and shrinking",
            "to the bottom."
        ]
    },
    {
        "startTime": 138.14,
        "endTime": 146.44,
        "content": [
            "And that's because",
            "it's xMid yMax",
            "on the preserve aspect ratio."
        ]
    },
    {
        "startTime": 146.44,
        "endTime": 150.85,
        "content": [
            "So I was like, OK.",
            "Why don't we do preserve",
            "aspect ratio none."
        ]
    },
    {
        "startTime": 150.85,
        "endTime": 155.07,
        "content": [
            "But then you get that,",
            "which is like, yeah."
        ]
    },
    {
        "startTime": 155.07,
        "endTime": 160.56,
        "content": [
            "Now the clip is kind of",
            "doing what I want, right?",
            "It's always clipping there,",
            "but obviously, the photo",
            "is getting squashed."
        ]
    },
    {
        "startTime": 160.56,
        "endTime": 170.747,
        "content": [
            "And it's also the",
            "case that if I do",
            "xMid yMid, which is kind of",
            "what I want from the photo."
        ]
    },
    {
        "startTime": 170.747,
        "endTime": 178.81,
        "content": [
            "As in, I want the photo to--",
            "when the screen is really wide,",
            "and you can't",
            "really see it here."
        ]
    },
    {
        "startTime": 178.81,
        "endTime": 184.55,
        "content": [
            "If I zoom out, it",
            "doesn't spread."
        ]
    },
    {
        "startTime": 184.55,
        "endTime": 209.41,
        "content": [
            "Whereas with the-- anyway.",
            "This isn't working",
            "for me, right?",
            "But Chris Coyier--",
            "thanks, Chris,",
            "yes-- has a post on",
            "CSS tricks, which--",
            "I guess we'll make sure it goes",
            "into the description-- which",
            "talks about using SVG as a clip",
            "for non-SVG content, which is",
            "pretty much what I've got here."
        ]
    },
    {
        "startTime": 209.41,
        "endTime": 218.17,
        "content": [
            "And, in fact, that's what I've",
            "gone ahead and done over here",
            "in index page."
        ]
    },
    {
        "startTime": 218.17,
        "endTime": 222.92,
        "content": [
            "Now, you can see",
            "I've got the image",
            "doing what the image does."
        ]
    },
    {
        "startTime": 222.92,
        "endTime": 227.99,
        "content": [
            "And that's just basically-- it's",
            "just a div with the background",
            "and it's set to",
            "background size cover."
        ]
    },
    {
        "startTime": 227.99,
        "endTime": 236.87,
        "content": [
            "And if I don't have",
            "the clip on it--",
            "if you don't have",
            "the clip on it,",
            "you can see it just--",
            "that pretty much",
            "does what I want it to do."
        ]
    },
    {
        "startTime": 236.87,
        "endTime": 241.71,
        "content": [
            "And then, I can use media",
            "queries to make sure that if I",
            "need a smaller image, whatever."
        ]
    },
    {
        "startTime": 241.71,
        "endTime": 252.56,
        "content": [
            "But, I switch on the clip-path.",
            "And the clip-path is",
            "just basically this SVG",
            "with a clip-path that's defined",
            "by the object's bounding box."
        ]
    },
    {
        "startTime": 252.56,
        "endTime": 264.83,
        "content": [
            "So it just basically maps",
            "to a normalized version",
            "of those previous",
            "view box values",
            "where one is the height--",
            "maximum height-- and 1100."
        ]
    },
    {
        "startTime": 264.83,
        "endTime": 274.66,
        "content": [
            "Anyway, that all now",
            "works brilliantly.",
            "So, it's just more",
            "that I've kind of",
            "cracked that particular",
            "problem for now,",
            "which is kind of a weight off."
        ]
    },
    {
        "startTime": 274.66,
        "endTime": 279.43,
        "content": [
            "The only thing that",
            "really caught me",
            "out when I was looking around,",
            "was I couldn't get clip-path",
            "to work."
        ]
    },
    {
        "startTime": 279.43,
        "endTime": 285.09,
        "content": [
            "It doesn't throw any kind of",
            "warning or error in Chrome.",
            "It just doesn't do anything."
        ]
    },
    {
        "startTime": 285.09,
        "endTime": 293.42,
        "content": [
            "It's still WebKit prefixed.",
            "But yet, it's got a",
            "line through it saying",
            "it's being overridden by this."
        ]
    },
    {
        "startTime": 293.42,
        "endTime": 297.49,
        "content": [
            "So I think I'm going",
            "to file a bug that says",
            "it should be one or the other."
        ]
    },
    {
        "startTime": 297.49,
        "endTime": 302.03,
        "content": [
            "We should kind of put something",
            "against click-path that says,",
            "actually, I don't",
            "support click-path."
        ]
    },
    {
        "startTime": 302.03,
        "endTime": 307.97,
        "content": [
            "Or if we do, we should actually",
            "support click-path rather than",
            "WebKit click-path."
        ]
    },
    {
        "startTime": 307.97,
        "endTime": 312.96,
        "content": [
            "Wow, I didn't realize",
            "that was going",
            "to be a hard word to say today.",
            "So there you go."
        ]
    },
    {
        "startTime": 312.96,
        "endTime": 324.12,
        "content": [
            "Clipping with SVG on",
            "SVG Elements, that",
            "should mean that I can",
            "do this kind of effect",
            "and then have other stuff",
            "behind it peeking through",
            "and all the rest of it."
        ]
    },
    {
        "startTime": 324.12,
        "endTime": 329.65,
        "content": [
            "Which is exactly the",
            "effect that I want,",
            "and I didn't know exactly how",
            "I was going to achieve it."
        ]
    },
    {
        "startTime": 329.65,
        "endTime": 335.03,
        "content": [
            "Phew, weight off.",
            "Don't forget to",
            "subscribe if you want",
            "to catch more of these videos."
        ]
    },
    {
        "startTime": 335.03,
        "endTime": 339.16,
        "content": [
            "And you can check out",
            "the code on GitHub.",
            "I've been pushing stuff there."
        ]
    },
    {
        "startTime": 339.16,
        "endTime": 0,
        "content": [
            "Toodle-oo.",
            "[MUSIC PLAYING]"
        ]
    }
];