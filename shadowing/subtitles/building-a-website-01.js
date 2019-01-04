var subtitle = [
  {
      "startTime": 0,
      "endTime": 5.46,
      "content": [
          "PAUL LEWIS: Hello, and welcome",
          "to the very first diary entry",
          "thing-- I think."
      ]
  },
  {
      "startTime": 5.46,
      "endTime": 12.39,
      "content": [
          "So today was actually",
          "the first day",
          "I actually started coding",
          "on the Dev Summit website."
      ]
  },
  {
      "startTime": 12.39,
      "endTime": 27.48,
      "content": [
          "And actually, it's",
          "been a pretty good day.",
          "I took the stuff",
          "that we did last week",
          "in the supercharged live",
          "stream-- which was servers,",
          "doing the server-side",
          "rendering, because I",
          "know I'm going to do a bunch",
          "of server-side rendering",
          "for the Chrome Dev",
          "Summit website."
      ]
  },
  {
      "startTime": 27.48,
      "endTime": 34.18,
      "content": [
          "What I need to do is I need",
          "to-- in the next time I",
          "record one of these,",
          "I'll show you the designs",
          "as well so you know",
          "where I'm headed."
      ]
  },
  {
      "startTime": 34.18,
      "endTime": 48.21,
      "content": [
          "For now, I just know I've got",
          "infrastructure setup.",
          "So I'll show you",
          "a little bit around what",
          "I've got going on,",
          "which will involve looking at",
          "me having written the word",
          "\"index,\" apparently."
      ]
  },
  {
      "startTime": 48.21,
      "endTime": 52.44,
      "content": [
          "That's as far as I got today.",
          "OK.",
          "I've done more than that."
      ]
  },
  {
      "startTime": 52.44,
      "endTime": 59.79,
      "content": [
          "Let me jump across to the code.",
          "So mostly, mostly,",
          "mostly, mostly, we",
          "have a travis.yml file set up."
      ]
  },
  {
      "startTime": 59.79,
      "endTime": 64.935,
      "content": [
          "What I've got is, this",
          "is a bunch of stuff",
          "to download and actually",
          "host the App Engine thing."
      ]
  },
  {
      "startTime": 64.935,
      "endTime": 71.79,
      "content": [
          "I'm also installing Lighthouse",
          "because it's a progressive web",
          "app, or it's going to be one.",
          "I want to make sure that I'm",
          "doing the progressive wep",
          "appy things."
      ]
  },
  {
      "startTime": 71.79,
      "endTime": 77.06,
      "content": [
          "And that's exactly what",
          "Lighthouse can do for me.",
          "So I have Lighthouse.",
          "It then gets a copy of Chrome."
      ]
  },
  {
      "startTime": 77.06,
      "endTime": 85.55,
      "content": [
          "It starts that up.",
          "And then I basically",
          "ask it to run Lighthouse",
          "against the Dev Summit site."
      ]
  },
  {
      "startTime": 85.55,
      "endTime": 91.71,
      "content": [
          "And then I basically do a bit",
          "of a quick validation, which",
          "I will show you is in here."
      ]
  },
  {
      "startTime": 91.71,
      "endTime": 96.06,
      "content": [
          "And all I'm really doing",
          "is I open up the JSON file",
          "that Lighthouse is spitting out."
      ]
  },
  {
      "startTime": 96.06,
      "endTime": 101.54,
      "content": [
          "And then I have",
          "a look through it",
          "and basically look at the",
          "progressive web app bits."
      ]
  },
  {
      "startTime": 101.54,
      "endTime": 107,
      "content": [
          "And I just add it",
          "up and divide it.",
          "And if I'm below 0.8,",
          "I just fail the build."
      ]
  },
  {
      "startTime": 107,
      "endTime": 117.34,
      "content": [
          "And because I've got a manifest",
          "in there, which I'll show you,",
          "and because I've",
          "got a service worker",
          "in there, which I'll show",
          "you, I should be mostly OK."
      ]
  },
  {
      "startTime": 117.34,
      "endTime": 128.35,
      "content": [
          "It will only be if I",
          "break something like that",
          "or if I have a performance",
          "regression maybe-- actually,",
          "no, that won't be",
          "caught-- I should add",
          "that in-- that it will throw."
      ]
  },
  {
      "startTime": 128.35,
      "endTime": 135.66,
      "content": [
          "So that was basically that.",
          "And then most of",
          "the day has actually",
          "gone into the Python stuff."
      ]
  },
  {
      "startTime": 135.66,
      "endTime": 141.96,
      "content": [
          "And it apparently",
          "wants me to install.",
          "Go away.",
          "Right, which mostly is this."
      ]
  },
  {
      "startTime": 141.96,
      "endTime": 160.2,
      "content": [
          "Anything that's Dev Summit",
          "slash whatever, I pick up",
          "and in the GET-- here",
          "we are-- I basically",
          "look at the URL and grab",
          "whatever I think it is,",
          "which is like if",
          "it's a static file,",
          "I basically grab",
          "that file directly."
      ]
  },
  {
      "startTime": 160.2,
      "endTime": 164.96,
      "content": [
          "Which you can see is--",
          "oh, actually it just",
          "assumes that it's a",
          "straight one to one match."
      ]
  },
  {
      "startTime": 164.96,
      "endTime": 184.44,
      "content": [
          "And I set those to",
          "cache for a year.",
          "And then if it's",
          "not a static file,",
          "so it doesn't begin with",
          "/static, then I basically,",
          "the moment I serve up",
          "the single index HTML--",
          "which is almost certainly going",
          "to change to be per section,",
          "but it's fine right now-- and",
          "I set the HTML to not cache."
      ]
  },
  {
      "startTime": 184.44,
      "endTime": 192.01,
      "content": [
          "So while static files",
          "are caching for a year,",
          "public no cache on the HTML",
          "means that the HTML will always",
          "be revalidated."
      ]
  },
  {
      "startTime": 192.01,
      "endTime": 203.96,
      "content": [
          "And I'll come back to",
          "the hashing in a moment.",
          "And then, if it's",
          "the service worker,",
          "even though I serve it up",
          "from static scripts-- sw.js--",
          "I want it to appear at",
          "/devsummit so that it can scope",
          "and control that whole thing."
      ]
  },
  {
      "startTime": 203.96,
      "endTime": 209.5,
      "content": [
          "So that all is working.",
          "Actually, let me show you it",
          "over here on the Network tab,",
          "run that."
      ]
  },
  {
      "startTime": 209.5,
      "endTime": 215.26,
      "content": [
          "Da da-- Dev Summit is--",
          "there's the thing, headers."
      ]
  },
  {
      "startTime": 215.26,
      "endTime": 220.67,
      "content": [
          "It's got an ETag, which I also",
          "set further down in the script.",
          "Public, no cache, which",
          "is exactly what I wanted."
      ]
  },
  {
      "startTime": 220.67,
      "endTime": 224.73,
      "content": [
          "And then there's a",
          "javascript file which",
          "has the max age of a year."
      ]
  },
  {
      "startTime": 224.73,
      "endTime": 231.16,
      "content": [
          "That is pretty",
          "much what I wanted.",
          "And you'll notice, by the way,",
          "that there's this big long hash",
          "in the file name."
      ]
  },
  {
      "startTime": 231.16,
      "endTime": 236.68,
      "content": [
          "And that is because if it's",
          "going to cache it for a year,",
          "I need a way to invalidate it."
      ]
  },
  {
      "startTime": 236.68,
      "endTime": 243.62,
      "content": [
          "And if it's always",
          "called, like, cds.js, then",
          "that's not going to",
          "work out because even",
          "if I update the file, it will",
          "still use the old cached one."
      ]
  },
  {
      "startTime": 243.62,
      "endTime": 249.21,
      "content": [
          "So I use hashing to make",
          "sure that, if the file",
          "contents change, the HTML will",
          "get a different path in it."
      ]
  },
  {
      "startTime": 249.21,
      "endTime": 257.11,
      "content": [
          "And then it will basically cause",
          "the file to be redownloaded,",
          "which I do in here."
      ]
  },
  {
      "startTime": 257.11,
      "endTime": 267.74,
      "content": [
          "The footer, you can see",
          "me actually doing it.",
          "I basically take the path",
          "that I'm actually interested",
          "and I pass it through a",
          "filter called \"add hash,\"",
          "which is in the Python."
      ]
  },
  {
      "startTime": 267.74,
      "endTime": 276.28,
      "content": [
          "There we are.",
          "And that basically reads",
          "through the file, updates",
          "the hash with a SHA 256,",
          "and then substitutes it",
          "into the file."
      ]
  },
  {
      "startTime": 276.28,
      "endTime": 284.29,
      "content": [
          "So you get cds.blah",
          "blah blah .js.",
          "Not blah blah",
          "blah, what is that?",
          "And then on the other side,",
          "we basically remove it."
      ]
  },
  {
      "startTime": 284.29,
      "endTime": 290.61,
      "content": [
          "So that goes back down",
          "to cds.js or whatever",
          "the file is that I'm",
          "actually interested in."
      ]
  },
  {
      "startTime": 290.61,
      "endTime": 298.1,
      "content": [
          "So that means that I've got",
          "kind of built in hashing,",
          "which is working just great."
      ]
  },
  {
      "startTime": 298.1,
      "endTime": 304.81,
      "content": [
          "So if I change",
          "files, they update.",
          "The last thing I was",
          "going to show you,",
          "I do have a couple",
          "of started things."
      ]
  },
  {
      "startTime": 304.81,
      "endTime": 310.94,
      "content": [
          "One is the manifest.json,",
          "which is already",
          "filled out with all the",
          "Chrome Dev Summit stuff,",
          "which is good."
      ]
  },
  {
      "startTime": 310.94,
      "endTime": 322.94,
      "content": [
          "And also the service worker,",
          "which is the lightest weight",
          "service worker that",
          "you can pretty much do,",
          "which skips waiting."
      ]
  },
  {
      "startTime": 322.94,
      "endTime": 329.15,
      "content": [
          "When it gets activated,",
          "it claims all clients",
          "and on fetch, it",
          "responds with a fetch",
          "of whatever you asked for."
      ]
  },
  {
      "startTime": 329.15,
      "endTime": 340.64,
      "content": [
          "So it's kind of",
          "like a pass-through.",
          "And I've done this",
          "mostly because I",
          "wanted to get the",
          "Lighthouse score high enough",
          "that it would fail the build",
          "if there was a regression."
      ]
  },
  {
      "startTime": 340.64,
      "endTime": 348.54,
      "content": [
          "So it's kind of",
          "like a pass-through.",
          "And I discovered a Chrome",
          "bug in the process."
      ]
  },
  {
      "startTime": 348.54,
      "endTime": 353.08,
      "content": [
          "I should show you the",
          "Chrome bug, right?",
          "Do you want to see",
          "the Chrome bug?",
          "All right."
      ]
  },
  {
      "startTime": 353.08,
      "endTime": 358.33,
      "content": [
          "Let me show you the Chrome bug.",
          "I think it's crbug.com 648208."
      ]
  },
  {
      "startTime": 358.33,
      "endTime": 368.825,
      "content": [
          "That's a guess.",
          "I got the ID right!",
          "I only did that-- ah!",
          "Basically-- there's a siren."
      ]
  },
  {
      "startTime": 368.825,
      "endTime": 375.48,
      "content": [
          "There's a siren outside.",
          "That's London."
      ]
  },
  {
      "startTime": 375.48,
      "endTime": 393.44,
      "content": [
          "Right.",
          "I basically discovered",
          "that, if you set a page",
          "to be offline in Dev",
          "Tools, and then you",
          "make a request that goes",
          "via a service worker,",
          "the service worker will still",
          "be treated as online, even",
          "if Dev Tools is set to offline."
      ]
  },
  {
      "startTime": 393.44,
      "endTime": 409.54,
      "content": [
          "I think that's a bit weird.",
          "I think either Chrome should say",
          "that network throttling affects",
          "only the page and not",
          "anything like a service worker",
          "or-- and this would",
          "be my preference,",
          "I think-- we extend",
          "the network throttling",
          "to include service workers."
      ]
  },
  {
      "startTime": 409.54,
      "endTime": 413.71,
      "content": [
          "So even if a service",
          "worker makes a request,",
          "it would be requested with 3G."
      ]
  },
  {
      "startTime": 413.71,
      "endTime": 418.2,
      "content": [
          "Problem is a service worker",
          "can service multiple tabs."
      ]
  },
  {
      "startTime": 418.2,
      "endTime": 423.16,
      "content": [
          "And so which one does it take?",
          "I don't know."
      ]
  },
  {
      "startTime": 423.16,
      "endTime": 430.16,
      "content": [
          "It caught me out.",
          "I filed a bug.",
          "We'll see how that one pans out.",
          "So that's pretty",
          "much my day today."
      ]
  },
  {
      "startTime": 430.16,
      "endTime": 436.014,
      "content": [
          "That has been pretty much all",
          "I got done, still pretty good."
      ]
  },
  {
      "startTime": 436.014,
      "endTime": 441.099,
      "content": [
          "I mean, I could show you",
          "in Lighthouse-- we'll",
          "save that for another time.",
          "I've already taken up",
          "enough of your time."
      ]
  },
  {
      "startTime": 441.099,
      "endTime": 446.11,
      "content": [
          "I'm going to-- eh?",
          "Now, you can subscribe and",
          "you'll get more of these."
      ]
  },
  {
      "startTime": 446.11,
      "endTime": 450.83,
      "content": [
          "And obviously, it's going",
          "to get more exciting",
          "as we get into the zone."
      ]
  },
  {
      "startTime": 450.83,
      "endTime": 456.2,
      "content": [
          "But I've got good",
          "start, got good caching,",
          "have a service worker,",
          "got a manifest."
      ]
  },
  {
      "startTime": 456.2,
      "endTime": 462.44,
      "content": [
          "And I've got a",
          "Travis file in there",
          "to do all the buildy type",
          "stuff with Lighthouse."
      ]
  },
  {
      "startTime": 462.44,
      "endTime": 469.54,
      "content": [
          "So we're off to a good start.",
          "Day one, winning."
      ]
  },
  {
      "startTime": 469.54,
      "endTime": 0,
      "content": []
  }
];