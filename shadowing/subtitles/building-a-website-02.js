var subtitle = [
    {
        "startTime": 0,
        "endTime": 6.78,
        "content": [
            "PAUL LEWIS: So it's an",
            "interesting one, this,",
            "because I've had a",
            "good day and a bad day."
        ]
    },
    {
        "startTime": 6.78,
        "endTime": 14.48,
        "content": [
            "I think that's normal, isn't it?",
            "You have some little",
            "victories, and then you",
            "spend a lot of your time",
            "wrestling with something."
        ]
    },
    {
        "startTime": 14.48,
        "endTime": 27.86,
        "content": [
            "But yeah, one of the things",
            "I've been trying to do",
            "is get-- I mentioned",
            "it in the last entry",
            "that I wanted to get Lighthouse",
            "running because I want",
            "to be able to check that",
            "I've got a progressive web",
            "app and everything's in place."
        ]
    },
    {
        "startTime": 27.86,
        "endTime": 33.87,
        "content": [
            "And I know that it works.",
            "But the problem was I",
            "wanted to push to Travis."
        ]
    },
    {
        "startTime": 33.87,
        "endTime": 45.235,
        "content": [
            "And every time I pushed",
            "to Travis to do the thing.",
            "But it turns out",
            "debugging Travis locally,",
            "because you want to test it",
            "locally, it's pretty tricky."
        ]
    },
    {
        "startTime": 45.235,
        "endTime": 49.39,
        "content": [
            "And there is a thing you can",
            "get, like a Docker image.",
            "But I just couldn't",
            "get it to work."
        ]
    },
    {
        "startTime": 49.39,
        "endTime": 56.21,
        "content": [
            "It kept timing out.",
            "I did a bit of research.",
            "And it seems that there's",
            "some built-in thing, some kind",
            "of timeout, within Docker."
        ]
    },
    {
        "startTime": 56.21,
        "endTime": 60.33,
        "content": [
            "And it couldn't get",
            "the image fast enough.",
            "And so it was just failing."
        ]
    },
    {
        "startTime": 60.33,
        "endTime": 68.95,
        "content": [
            "And so I ended up having to",
            "kind of step-by-step on my mark",
            "repeat the steps."
        ]
    },
    {
        "startTime": 68.95,
        "endTime": 75.057,
        "content": [
            "And eventually, I",
            "kind of got there."
        ]
    },
    {
        "startTime": 75.057,
        "endTime": 81.1,
        "content": [
            "Let me just switch across.",
            "And you can actually see.",
            "Basically, most of it was",
            "actually OK, as it turns out."
        ]
    },
    {
        "startTime": 81.1,
        "endTime": 85.64,
        "content": [
            "Most of this actually came",
            "from the Lighthouse Travis",
            "YAML, which I just updated."
        ]
    },
    {
        "startTime": 85.64,
        "endTime": 98.85,
        "content": [
            "The thing is, it's",
            "this little bit here",
            "where it actually downloads",
            "a version of Chrome",
            "because what you",
            "want to do is you",
            "run Chrome against a",
            "virtual display, which",
            "is what these two lines do."
        ]
    },
    {
        "startTime": 98.85,
        "endTime": 107.77,
        "content": [
            "But the download Chrome",
            "script, in order to get at it,",
            "you have to NPM explore",
            "with the Global Switch",
            "and go to the Lighthouse module."
        ]
    },
    {
        "startTime": 107.77,
        "endTime": 119.494,
        "content": [
            "And then within there,",
            "you can basically",
            "tell that to download Chrome.",
            "And the thing is, it looks for",
            "this Lighthouse Chromium path",
            "variable, which it",
            "then seems to ignore."
        ]
    },
    {
        "startTime": 119.494,
        "endTime": 123.87,
        "content": [
            "It's strange because",
            "the download Chrome",
            "script will fail if",
            "the Lighthouse Chromium",
            "path isn't set."
        ]
    },
    {
        "startTime": 123.87,
        "endTime": 129.02,
        "content": [
            "But the Lighthouse",
            "Chromium path is",
            "set to our path prior to here."
        ]
    },
    {
        "startTime": 129.02,
        "endTime": 137.92,
        "content": [
            "So I enter this line where",
            "I move from slash Lighthouse",
            "[? Chrome ?] Linux, which",
            "is where it puts it,",
            "to the current folder."
        ]
    },
    {
        "startTime": 137.92,
        "endTime": 142.88,
        "content": [
            "And then I can actually",
            "run it and just check",
            "its version or something.",
            "And then after that,",
            "it started working."
        ]
    },
    {
        "startTime": 142.88,
        "endTime": 152.49,
        "content": [
            "So that was a bit of a fight",
            "that I didn't expect to have.",
            "And it wasn't-- I found that",
            "there's just no easy way",
            "to debug my Travis",
            "scripts because as I said,",
            "I couldn't get this Docker",
            "image stuff to work."
        ]
    },
    {
        "startTime": 152.49,
        "endTime": 159.93,
        "content": [
            "So it was a bit messy.",
            "And I spent a bit",
            "of time doing that.",
            "But on the upside, I",
            "wanted to quickly show you",
            "around the design."
        ]
    },
    {
        "startTime": 159.93,
        "endTime": 166.45,
        "content": [
            "So good news is,",
            "because I'm designing",
            "this, the designer and the",
            "developer get on famously."
        ]
    },
    {
        "startTime": 166.45,
        "endTime": 175.73,
        "content": [
            "The designer is, I guess,",
            "quite understanding",
            "of the developer's need to",
            "change things on the way",
            "through the process."
        ]
    },
    {
        "startTime": 175.73,
        "endTime": 181.36,
        "content": [
            "And the developer,",
            "well, it's almost",
            "like they've fully understand",
            "what the designer was",
            "trying to achieve."
        ]
    },
    {
        "startTime": 181.36,
        "endTime": 189.77,
        "content": [
            "It is kind of nice",
            "when you do both parts",
            "of a project like this,",
            "because as I say, get the push",
            "and pull."
        ]
    },
    {
        "startTime": 189.77,
        "endTime": 194.37,
        "content": [
            "And it doesn't matter",
            "if I think, ah, actually",
            "I won't do it that way.",
            "I'll do it this other way."
        ]
    },
    {
        "startTime": 194.37,
        "endTime": 199.426,
        "content": [
            "It's fine.",
            "Right?",
            "Anyway, so the mocks.",
            "I've got some mocks.",
            "So I did this in wireframes."
        ]
    },
    {
        "startTime": 199.426,
        "endTime": 206.35,
        "content": [
            "And I did some mocks and all",
            "sorts of stuff like that.",
            "Let me show you the home page."
        ]
    },
    {
        "startTime": 206.35,
        "endTime": 213.68,
        "content": [
            "I'll pop that onto Chrome there.",
            "So this is what it looks like.",
            "Now, actually, if we",
            "do chrome dev summit."
        ]
    },
    {
        "startTime": 213.68,
        "endTime": 218.68,
        "content": [
            "I built this."
        ]
    },
    {
        "startTime": 218.68,
        "endTime": 226.87,
        "content": [
            "And I wanted to",
            "take this idea on.",
            "I liked this slightly angular",
            "looking patterns and shapes."
        ]
    },
    {
        "startTime": 226.87,
        "endTime": 238.74,
        "content": [
            "But I felt unbalanced when I",
            "looked back at this that it",
            "was-- the colors, I took the",
            "colors from the Chrome logo",
            "a little bit too literally."
        ]
    },
    {
        "startTime": 238.74,
        "endTime": 249.4,
        "content": [
            "And so I felt like,",
            "you know what?",
            "Actually, I'm going to",
            "subdue it a little bit,",
            "make it a little",
            "bit more contrasty."
        ]
    },
    {
        "startTime": 249.4,
        "endTime": 257.05,
        "content": [
            "And I've done this.",
            "I'm told by one of my",
            "colleagues that this",
            "is called a hypergradient."
        ]
    },
    {
        "startTime": 257.05,
        "endTime": 266.48,
        "content": [
            "I don't know.",
            "Basically, all it",
            "is is I desaturate",
            "the image, boom,",
            "put the contrast,",
            "and then pop a gradient over the",
            "top with a hard light transfer",
            "mode."
        ]
    },
    {
        "startTime": 266.48,
        "endTime": 270.98,
        "content": [
            "And you get this kind of look.",
            "Now, I could probably build",
            "this with CSS blend modes."
        ]
    },
    {
        "startTime": 270.98,
        "endTime": 278.21,
        "content": [
            "But they're not well",
            "enough supported.",
            "So I am almost certainly going",
            "to do these as actual images",
            "like this."
        ]
    },
    {
        "startTime": 278.21,
        "endTime": 289.04,
        "content": [
            "Anyway, so that's the home page.",
            "It's fairly simple with",
            "a link to the code LOBs,",
            "a link to the",
            "schedule, and a link",
            "to the location, which is the",
            "SFJAZZ Center in San Francisco."
        ]
    },
    {
        "startTime": 289.04,
        "endTime": 294.7,
        "content": [
            "Bottom, privacy terms and",
            "the code of conduct as well.",
            "So that's fine."
        ]
    },
    {
        "startTime": 294.7,
        "endTime": 301.4,
        "content": [
            "It gets a little bit more",
            "interesting over, I think,",
            "in the schedule."
        ]
    },
    {
        "startTime": 301.4,
        "endTime": 308.2,
        "content": [
            "Similar kind of header,",
            "masthead header.",
            "And then down here, I've",
            "got the session information."
        ]
    },
    {
        "startTime": 308.2,
        "endTime": 315.04,
        "content": [
            "And to be super clear,",
            "the session information",
            "is placeholder, hence, the",
            "lorem ipsum text there."
        ]
    },
    {
        "startTime": 315.04,
        "endTime": 322.37,
        "content": [
            "This is actually the",
            "content from two years ago.",
            "I just copy-pasted the content",
            "and the times and everything",
            "else."
        ]
    },
    {
        "startTime": 322.37,
        "endTime": 327.329,
        "content": [
            "So this isn't me",
            "telling you what's",
            "going to be at the Chrome Dev",
            "Summit because I have no idea."
        ]
    },
    {
        "startTime": 327.329,
        "endTime": 332.864,
        "content": [
            "But I wanted something",
            "that was a little bit more",
            "realistic rather than total",
            "lorem ipsum everywhere."
        ]
    },
    {
        "startTime": 332.864,
        "endTime": 338.679,
        "content": [
            "Same kind of masthead.",
            "And what I'm doing",
            "is I'm going to do",
            "a static build from section",
            "to section to section."
        ]
    },
    {
        "startTime": 338.679,
        "endTime": 343.5,
        "content": [
            "And then I'm going to",
            "progressively enhance",
            "to something that uses",
            "JavaScript to swap out",
            "these sections."
        ]
    },
    {
        "startTime": 343.5,
        "endTime": 347.7,
        "content": [
            "And I'm still debating in my own",
            "mind how I'm going to do that."
        ]
    },
    {
        "startTime": 347.7,
        "endTime": 360.05,
        "content": [
            "I feel like maybe I'm",
            "going to do something",
            "where things shift up and down,",
            "as in the image fades out."
        ]
    },
    {
        "startTime": 360.05,
        "endTime": 372.24,
        "content": [
            "And there's this yellow",
            "strip at the back here.",
            "I'm thinking that",
            "might move up and down",
            "because when you look at,",
            "for example, the live page,",
            "you can see."
        ]
    },
    {
        "startTime": 372.24,
        "endTime": 378.61,
        "content": [
            "There's the video player here",
            "with the session going on.",
            "And then this is that",
            "little yellow strip."
        ]
    },
    {
        "startTime": 378.61,
        "endTime": 386.98,
        "content": [
            "But it's slid down and made",
            "way for what's live now,",
            "which is apparently Jake",
            "arguing over minutia."
        ]
    },
    {
        "startTime": 386.98,
        "endTime": 392.3,
        "content": [
            "He does that so well.",
            "And up next is Alex Russell.",
            "And you can see them.",
            "We've got them coming up later."
        ]
    },
    {
        "startTime": 392.3,
        "endTime": 407.02,
        "content": [
            "This is what I'm hoping",
            "for that live section",
            "when the conference",
            "is actually live",
            "that we give you what you",
            "need, which is give me",
            "the actual content, and",
            "give me what's live,",
            "what's coming up next,",
            "and then what's in line",
            "for the rest of the day."
        ]
    },
    {
        "startTime": 407.02,
        "endTime": 413.58,
        "content": [
            "I don't know if I'm going to",
            "get to doing notifications.",
            "I've put it there in",
            "case I want to do them",
            "and I get a chance to do them."
        ]
    },
    {
        "startTime": 413.58,
        "endTime": 423.417,
        "content": [
            "But time may be against me.",
            "Right, that's probably",
            "enough for right now."
        ]
    },
    {
        "startTime": 423.417,
        "endTime": 431.934,
        "content": [
            "It's exciting.",
            "It's good.",
            "I have done a little",
            "bit of coding today.",
            "But I'm going to",
            "save that probably",
            "for the next entry",
            "where I can talk",
            "about it in a bit more detail."
        ]
    },
    {
        "startTime": 431.934,
        "endTime": 437.68,
        "content": [
            "So don't forget.",
            "You can subscribe.",
            "And thanks for coming",
            "along on the journey."
        ]
    },
    {
        "startTime": 437.68,
        "endTime": 0,
        "content": [
            "[MUSIC PLAYING]"
        ]
    }
];