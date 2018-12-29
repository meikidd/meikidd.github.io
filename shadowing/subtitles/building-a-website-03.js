var subtitle = [
  {
      "startTime": 0,
      "endTime": 7.23,
      "content": [
          "﻿1",
          "PAUL LEWIS: OK,",
          "good stuff-- I've",
          "managed to do a bit of",
          "coding as well today,",
          "which is always handy."
      ]
  },
  {
      "startTime": 7.23,
      "endTime": 10.9,
      "content": [
          "Because towards the",
          "back end of this week,",
          "I'm actually speaking",
          "at a conference."
      ]
  },
  {
      "startTime": 10.9,
      "endTime": 15.1,
      "content": [
          "So I kind of got to get a move",
          "on and get some stuff done."
      ]
  },
  {
      "startTime": 15.1,
      "endTime": 27.97,
      "content": [
          "So mostly what",
          "I've been doing is",
          "kind of setting up a little",
          "bit more infrastructure,",
          "just making sure that kind",
          "of everything's all set",
          "and I've got, hopefully,",
          "a really solid foundation",
          "that I don't need to change",
          "too much on the way through."
      ]
  },
  {
      "startTime": 27.97,
      "endTime": 34.68,
      "content": [
          "Mainly what I did is, I don't",
          "know if I mentioned it before,",
          "but basically, what I",
          "had was I was serving up",
          "the static files."
      ]
  },
  {
      "startTime": 34.68,
      "endTime": 37.28,
      "content": [
          "And I did all the hashing",
          "stuff, which was cool."
      ]
  },
  {
      "startTime": 37.28,
      "endTime": 42.607,
      "content": [
          "But everything else,",
          "the kind of non-static,",
          "was always going to",
          "the same index.html."
      ]
  },
  {
      "startTime": 42.607,
      "endTime": 49.59,
      "content": [
          "So what I've done is I've just",
          "updated that little bit of code",
          "now where I match against",
          "everything that kind of came",
          "after devsummit."
      ]
  },
  {
      "startTime": 49.59,
      "endTime": 53.42,
      "content": [
          "And then I'm looking for",
          "that particular thing",
          "in the sections."
      ]
  },
  {
      "startTime": 53.42,
      "endTime": 76.2,
      "content": [
          "So like, for example,",
          "location.html-- so",
          "if you go to",
          "devsummit/location, you're",
          "going to get location.html,",
          "which extends the base",
          "HTML in the template",
          "here, which basically",
          "has the header of a block for",
          "the content, which is actually",
          "then filled out by that, by",
          "the actual section, and then",
          "the footer."
      ]
  },
  {
      "startTime": 76.2,
      "endTime": 79.24,
      "content": [
          "All fine-- that's working",
          "just as I'd hoped."
      ]
  },
  {
      "startTime": 79.24,
      "endTime": 84.09,
      "content": [
          "So that's one thing that's",
          "definitely changed in here."
      ]
  },
  {
      "startTime": 84.09,
      "endTime": 91.81,
      "content": [
          "Other than that-- oh",
          "yeah, a lot of changes",
          "in the-- in the buildfile,",
          "we've got a lot of scripts."
      ]
  },
  {
      "startTime": 91.81,
      "endTime": 99.69,
      "content": [
          "I wanted to avoid this time",
          "doing a full-on, gulp grunt,",
          "whatever build system."
      ]
  },
  {
      "startTime": 99.69,
      "endTime": 106.185,
      "content": [
          "I thought, most of",
          "the time, I'm actually",
          "not doing anything",
          "overly exciting."
      ]
  },
  {
      "startTime": 106.185,
      "endTime": 110.55,
      "content": [
          "I want to use SAS,",
          "because I know",
          "I'll want to probably make all",
          "my sizes based off a baseline."
      ]
  },
  {
      "startTime": 110.55,
      "endTime": 113.97,
      "content": [
          "So it's an eight-pixel",
          "baseline grid."
      ]
  },
  {
      "startTime": 113.97,
      "endTime": 120.46,
      "content": [
          "And then off the top of",
          "that, I figure, well,",
          "if I've got a few variables",
          "or whatever, SAS is probably",
          "going to the right thing."
      ]
  },
  {
      "startTime": 120.46,
      "endTime": 122.72,
      "content": [
          "But I'm still going to",
          "keep it fairly minimal."
      ]
  },
  {
      "startTime": 122.72,
      "endTime": 126.07,
      "content": [
          "Here, though, I've got an",
          "inline CSS and a linked CSS."
      ]
  },
  {
      "startTime": 126.07,
      "endTime": 127.92,
      "content": [
          "And this is something",
          "I'm trying out."
      ]
  },
  {
      "startTime": 127.92,
      "endTime": 129.229,
      "content": [
          "This may not work."
      ]
  },
  {
      "startTime": 129.229,
      "endTime": 130.15,
      "content": [
          "And it may work."
      ]
  },
  {
      "startTime": 130.15,
      "endTime": 135,
      "content": [
          "And I really don't know, so",
          "blah, bear with me, I suppose."
      ]
  },
  {
      "startTime": 135,
      "endTime": 135.5,
      "content": [
          "Right."
      ]
  },
  {
      "startTime": 135.5,
      "endTime": 139.57,
      "content": [
          "What I'm doing-- I'll see if",
          "I can explain this quickly."
      ]
  },
  {
      "startTime": 139.57,
      "endTime": 143.92,
      "content": [
          "Let's see-- so I have notionally",
          "inline CSS and linked CSS."
      ]
  },
  {
      "startTime": 143.92,
      "endTime": 153.33,
      "content": [
          "So in the page, for",
          "example, there's",
          "going to be-- it",
          "is in the header."
      ]
  },
  {
      "startTime": 153.33,
      "endTime": 157.93,
      "content": [
          "There is the inline",
          "styles, right?",
          "So this is the kind of-- I want",
          "to get a fast first render."
      ]
  },
  {
      "startTime": 157.93,
      "endTime": 159.27,
      "content": [
          "And I want some inline styles."
      ]
  },
  {
      "startTime": 159.27,
      "endTime": 166.24,
      "content": [
          "So what goes into",
          "the inline styles?",
          "Basically, it's-- you know,",
          "I have a couple of standard",
          "import-y, include-y things."
      ]
  },
  {
      "startTime": 166.24,
      "endTime": 170.09,
      "content": [
          "And then I've got",
          "specific styles",
          "at the moment just",
          "for the header."
      ]
  },
  {
      "startTime": 170.09,
      "endTime": 179.49,
      "content": [
          "And my theory on",
          "the inlining styles",
          "is that I want basically things",
          "like dimensions and color,",
          "and that's it."
      ]
  },
  {
      "startTime": 179.49,
      "endTime": 184.55,
      "content": [
          "As in if it's like a white",
          "block or a green block,",
          "that's the thing",
          "I want to reserve."
      ]
  },
  {
      "startTime": 184.55,
      "endTime": 185.77,
      "content": [
          "That's all I care about."
      ]
  },
  {
      "startTime": 185.77,
      "endTime": 194.072,
      "content": [
          "And pretty much everything",
          "else will probably",
          "be, like, sort of font",
          "colors or whatever,",
          "but no kind of background",
          "images or any of that."
      ]
  },
  {
      "startTime": 194.072,
      "endTime": 195.03,
      "content": [
          "That can come in later."
      ]
  },
  {
      "startTime": 195.03,
      "endTime": 197.2,
      "content": [
          "This is like reserving",
          "the space for content."
      ]
  },
  {
      "startTime": 197.2,
      "endTime": 198.7,
      "content": [
          "And I know the",
          "height of the header."
      ]
  },
  {
      "startTime": 198.7,
      "endTime": 200.45,
      "content": [
          "I know the height",
          "of the masthead."
      ]
  },
  {
      "startTime": 200.45,
      "endTime": 204.52,
      "content": [
          "I should be able to",
          "do all of that stuff",
          "without actually",
          "doing anything else."
      ]
  },
  {
      "startTime": 204.52,
      "endTime": 208.89,
      "content": [
          "In the background, once--",
          "so all the inlining stuff",
          "is in one place."
      ]
  },
  {
      "startTime": 208.89,
      "endTime": 215.61,
      "content": [
          "And I'm separating out my header",
          "into a full and an inline."
      ]
  },
  {
      "startTime": 215.61,
      "endTime": 220,
      "content": [
          "And the inline is just basically",
          "like-- you see the baseline,",
          "with a background, a box shadow."
      ]
  },
  {
      "startTime": 220,
      "endTime": 222.97,
      "content": [
          "These are just",
          "sort of placeholder",
          "while I was just",
          "testing the theory."
      ]
  },
  {
      "startTime": 222.97,
      "endTime": 228.25,
      "content": [
          "And then the full one is",
          "like-- it takes the inline,",
          "but then it adds the stuff on."
      ]
  },
  {
      "startTime": 228.25,
      "endTime": 233.8,
      "content": [
          "And I've been in two minds",
          "as to whether I duplicate",
          "the inline stuff here."
      ]
  },
  {
      "startTime": 233.8,
      "endTime": 237.85,
      "content": [
          "Because that CSS",
          "is going to exist."
      ]
  },
  {
      "startTime": 237.85,
      "endTime": 243.43,
      "content": [
          "But I have a feeling",
          "that later on, it's",
          "going to be useful",
          "to have something",
          "with the full styles in it."
      ]
  },
  {
      "startTime": 243.43,
      "endTime": 246.08,
      "content": [
          "And I can't quite put my",
          "finger on why just yet."
      ]
  },
  {
      "startTime": 246.08,
      "endTime": 249.45,
      "content": [
          "I think it might be to do with",
          "the hot swapping of sections."
      ]
  },
  {
      "startTime": 249.45,
      "endTime": 252.28,
      "content": [
          "So anyway, so I've",
          "got the inline styles."
      ]
  },
  {
      "startTime": 252.28,
      "endTime": 261.3,
      "content": [
          "And then in the-- let's",
          "see- in the scripts-- yeah."
      ]
  },
  {
      "startTime": 261.3,
      "endTime": 264.82,
      "content": [
          "I've got this,",
          "where I load styles."
      ]
  },
  {
      "startTime": 264.82,
      "endTime": 266.32,
      "content": [
          "And basically, I",
          "load the styles."
      ]
  },
  {
      "startTime": 266.32,
      "endTime": 271.775,
      "content": [
          "And you can see it's the",
          "same kind of hashing system",
          "that I used previously",
          "for this JavaScript."
      ]
  },
  {
      "startTime": 271.775,
      "endTime": 272.9,
      "content": [
          "That's still going to work."
      ]
  },
  {
      "startTime": 272.9,
      "endTime": 275.025,
      "content": [
          "This is going through the",
          "templates in your system."
      ]
  },
  {
      "startTime": 275.025,
      "endTime": 278.5,
      "content": [
          "It will convert this to a",
          "[? CDS ?] dot whatever dot CSS."
      ]
  },
  {
      "startTime": 278.5,
      "endTime": 282.33,
      "content": [
          "And in the load styles, I",
          "basically do an [? XHR ?]."
      ]
  },
  {
      "startTime": 282.33,
      "endTime": 284.83,
      "content": [
          "And then when I load it, I",
          "know it's in the HTTP cache."
      ]
  },
  {
      "startTime": 284.83,
      "endTime": 290.72,
      "content": [
          "And it should have",
          "the-- whatever",
          "I gave it-- like a one-year",
          "caching time on it."
      ]
  },
  {
      "startTime": 290.72,
      "endTime": 294.529,
      "content": [
          "Then I can inject an actual",
          "style sheet into the head",
          "with that URL."
      ]
  },
  {
      "startTime": 294.529,
      "endTime": 297.77,
      "content": [
          "It'll make the request, which",
          "will be satisfied from the HTTP",
          "cache."
      ]
  },
  {
      "startTime": 297.77,
      "endTime": 300.4,
      "content": [
          "And we should be good to go."
      ]
  },
  {
      "startTime": 300.4,
      "endTime": 303.54,
      "content": [
          "So that is what happens."
      ]
  },
  {
      "startTime": 303.54,
      "endTime": 312.09,
      "content": [
          "So just to show you, the",
          "inline stuff for the header",
          "doesn't have, say, a color."
      ]
  },
  {
      "startTime": 312.09,
      "endTime": 316.47,
      "content": [
          "But the full one has",
          "rebeccapurple as the thing."
      ]
  },
  {
      "startTime": 316.47,
      "endTime": 317.85,
      "content": [
          "Actually, I'll tell you what."
      ]
  },
  {
      "startTime": 317.85,
      "endTime": 327.3,
      "content": [
          "I'll change it to",
          "red, which won't work,",
          "because I don't have it",
          "built. So I can actually",
          "do npn run build."
      ]
  },
  {
      "startTime": 327.3,
      "endTime": 328.69,
      "content": [
          "I could do a watch."
      ]
  },
  {
      "startTime": 328.69,
      "endTime": 330.64,
      "content": [
          "That would actually--",
          "oh, it failed."
      ]
  },
  {
      "startTime": 330.64,
      "endTime": 331.51,
      "content": [
          "Of course it failed."
      ]
  },
  {
      "startTime": 331.51,
      "endTime": 333.06,
      "content": [
          "Well done, me."
      ]
  },
  {
      "startTime": 333.06,
      "endTime": 335.95,
      "content": [
          "Terrific."
      ]
  },
  {
      "startTime": 335.95,
      "endTime": 338.35,
      "content": [
          "Yeah, it's because",
          "I didn't-- OK."
      ]
  },
  {
      "startTime": 338.35,
      "endTime": 347.68,
      "content": [
          "Oh, git commit-- \"Changes.\"",
          "Just as well, this isn't",
          "the-- oh yeah, that's fine."
      ]
  },
  {
      "startTime": 347.68,
      "endTime": 349.29,
      "content": [
          "OK."
      ]
  },
  {
      "startTime": 349.29,
      "endTime": 354.18,
      "content": [
          "Just as well, I",
          "didn't actually-- see,",
          "I might change that."
      ]
  },
  {
      "startTime": 354.18,
      "endTime": 355.56,
      "content": [
          "Because that was annoying."
      ]
  },
  {
      "startTime": 355.56,
      "endTime": 356.16,
      "content": [
          "Right."
      ]
  },
  {
      "startTime": 356.16,
      "endTime": 356.701,
      "content": [
          "There you go."
      ]
  },
  {
      "startTime": 356.701,
      "endTime": 359.01,
      "content": [
          "You see, it goes red now anyway."
      ]
  },
  {
      "startTime": 359.01,
      "endTime": 361.81,
      "content": [
          "And then the",
          "version's been bumped."
      ]
  },
  {
      "startTime": 361.81,
      "endTime": 369.345,
      "content": [
          "And so by default, we",
          "have the-- la la la--",
          "no, I don't want that."
      ]
  },
  {
      "startTime": 369.345,
      "endTime": 376.8,
      "content": [
          "I have the inline styles like",
          "so, which has been squished,",
          "and compressed, and",
          "everything else."
      ]
  },
  {
      "startTime": 376.8,
      "endTime": 381.22,
      "content": [
          "And then there's the",
          "link rel=\"stylesheet,\"",
          "which actually has",
          "all the other stuff."
      ]
  },
  {
      "startTime": 381.22,
      "endTime": 388.68,
      "content": [
          "And so that you can see",
          "that the actual color is",
          "set to red that you inherited",
          "from, but it's still there."
      ]
  },
  {
      "startTime": 388.68,
      "endTime": 391.48,
      "content": [
          "So there you go."
      ]
  },
  {
      "startTime": 391.48,
      "endTime": 397.93,
      "content": [
          "That's kind of what I'm",
          "currently doing, giving that",
          "a whirl, seeing how that goes."
      ]
  },
  {
      "startTime": 397.93,
      "endTime": 411.56,
      "content": [
          "The next step is to actually",
          "start for real styling",
          "based on the mocks and",
          "actually start fleshing it out,",
          "which I will be building--",
          "while I design desktop first,",
          "I actually build mobile first."
      ]
  },
  {
      "startTime": 411.56,
      "endTime": 423.04,
      "content": [
          "And I have in my head",
          "the mocks or roughly",
          "what's going to happen,",
          "but I am definitely",
          "going to be winging some",
          "of it as I figure out",
          "exactly how this should all go."
      ]
  },
  {
      "startTime": 423.04,
      "endTime": 424.87,
      "content": [
          "So there you go."
      ]
  },
  {
      "startTime": 424.87,
      "endTime": 431.69,
      "content": [
          "Good days, bad",
          "days-- every day's",
          "interesting when",
          "you're building in it."
      ]
  },
  {
      "startTime": 431.69,
      "endTime": 433.19,
      "content": [
          "So there you go."
      ]
  },
  {
      "startTime": 433.19,
      "endTime": 435.42,
      "content": [
          "Thanks for coming along",
          "on the journey as always."
      ]
  },
  {
      "startTime": 435.42,
      "endTime": 436.76,
      "content": [
          "And don't forget your subscribe."
      ]
  },
  {
      "startTime": 436.76,
      "endTime": 437.907,
      "content": [
          "They make me say it."
      ]
  },
  {
      "startTime": 437.907,
      "endTime": 438.99,
      "content": [
          "They don't make me say it."
      ]
  },
  {
      "startTime": 438.99,
      "endTime": 442.494,
      "content": [
          "I want you to",
          "subscribe, because I",
          "know there's loads of",
          "really interesting stuff",
          "on the channel."
      ]
  },
  {
      "startTime": 442.494,
      "endTime": 444.039,
      "content": [
          "So yeah."
      ]
  },
  {
      "startTime": 444.039,
      "endTime": 447.53,
      "content": [
          "You can find me on",
          "the Twitter if you",
          "want to chat, @aerotwist."
      ]
  },
  {
      "startTime": 447.53,
      "endTime": 450.44,
      "content": [
          "And of course, you can leave",
          "comments below as well."
      ]
  },
  {
      "startTime": 450.44,
      "endTime": 454.05,
      "content": [
          "Catch you probably",
          "in the next entry."
      ]
  },
  {
      "startTime": 454.05,
      "endTime": 0,
      "content": [
          "[MUSIC PLAYING]"
      ]
  }
];