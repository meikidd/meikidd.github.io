var subtitle = [
  {
      "startTime": 0,
      "endTime": 11.4,
      "content": [
          "[MUSIC PLAYING]",
          "ADDY OSMANI: All",
          "right, welcome to TTT."
      ]
  },
  {
      "startTime": 11.4,
      "endTime": 18.36,
      "content": [
          "Today, we're going to talk about",
          "Lighthouse and Lighthouse NCI.",
          "With us today is our",
          "special guest Eric Bidelman."
      ]
  },
  {
      "startTime": 18.36,
      "endTime": 31.21,
      "content": [
          "Eric hacks on Lighthouse.",
          "What is Lighthouse?",
          "Why should we care about it?",
          "ERIC BIDELMAN:",
          "Yeah, so Lighthouse",
          "is a tool that we've been",
          "developing on the Chrome team",
          "for about a year and",
          "a half now, and it's",
          "a tool for web developers",
          "to audit their sites."
      ]
  },
  {
      "startTime": 31.21,
      "endTime": 37.44,
      "content": [
          "It tells you things",
          "about best practices.",
          "It gives you performance scores.",
          "It tells you if your site's",
          "a progressive web app or not."
      ]
  },
  {
      "startTime": 37.44,
      "endTime": 43.44,
      "content": [
          "It kind of lists",
          "off the things you",
          "need to do in order",
          "to make it better.",
          "MATT GAUNT: Yeah, and",
          "you've been working",
          "on this for quite awhile now."
      ]
  },
  {
      "startTime": 43.44,
      "endTime": 49.95,
      "content": [
          "I think it start off",
          "as sort of a Node CLI,",
          "and then there was the Chrome",
          "extension, which kind of",
          "has been like super popular."
      ]
  },
  {
      "startTime": 49.95,
      "endTime": 54.618,
      "content": [
          "But you've been moving",
          "it around since then.",
          "Right?",
          "ERIC BIDELMAN: Yeah, it's",
          "kind of grown up over time."
      ]
  },
  {
      "startTime": 54.618,
      "endTime": 59.564,
      "content": [
          "It started off as",
          "the Node module,",
          "so you can programmatically run",
          "this thing against your site",
          "if you're in Node."
      ]
  },
  {
      "startTime": 59.564,
      "endTime": 65.7,
      "content": [
          "And then we develop",
          "the Chrome extension",
          "because people just really want",
          "to press a button against a URL",
          "and get some",
          "numbers and a score."
      ]
  },
  {
      "startTime": 65.7,
      "endTime": 71.77,
      "content": [
          "And over time, as the open",
          "source project has kind of",
          "grown up-- we've released it",
          "in other places like Dev Tools."
      ]
  },
  {
      "startTime": 71.77,
      "endTime": 84.56,
      "content": [
          "So now in Chrome Stable,",
          "if you open the Dev Tools,",
          "you can basically go",
          "to the new Audits panel",
          "and, voila, instead",
          "of the old school",
          "Audits panel that we had",
          "for many, many moons,",
          "you have the new version,",
          "which includes Lighthouse."
      ]
  },
  {
      "startTime": 84.56,
      "endTime": 89.4,
      "content": [
          "So you can go to a site.",
          "You can run.",
          "You can choose which performance",
          "categories, [INAUDIBLE]",
          "categories you want."
      ]
  },
  {
      "startTime": 89.4,
      "endTime": 99.51,
      "content": [
          "You run it against your site.",
          "Will emulate a mobile device,",
          "throttle down the connection",
          "to make sure your",
          "performance numbers are",
          "realistic to the real",
          "world if somebody's viewing",
          "your site on a mobile device."
      ]
  },
  {
      "startTime": 99.51,
      "endTime": 105.39,
      "content": [
          "And we run a bunch",
          "of stuff, so you'll",
          "see the page reload",
          "a couple of times,",
          "and that's just because we",
          "have to test for things like is",
          "your site working offline."
      ]
  },
  {
      "startTime": 105.39,
      "endTime": 112.29,
      "content": [
          "We want to shut the network",
          "connection off, make",
          "sure you're using a",
          "service worker or your PWA,",
          "run performance audits,",
          "accessibility audits."
      ]
  },
  {
      "startTime": 112.29,
      "endTime": 119.68,
      "content": [
          "And eventually, we'll get",
          "this really nice report that",
          "basically shows you what you're",
          "doing great at-- here we go--",
          "and what you could improve upon."
      ]
  },
  {
      "startTime": 119.68,
      "endTime": 123.727,
      "content": [
          "So Chrome Status is a",
          "good example of PWA.",
          "I spent some time making a PWA."
      ]
  },
  {
      "startTime": 123.727,
      "endTime": 127.893,
      "content": [
          "MATT GAUNT: I was going to say,",
          "who built Chrome Status, Eric?",
          "ERIC BIDELMAN: Yeah,",
          "so there is that."
      ]
  },
  {
      "startTime": 127.893,
      "endTime": 134.015,
      "content": [
          "We have hundreds-- out",
          "of 100 for the PWA score,",
          "and you can see in here",
          "all the different kind",
          "of things we test for."
      ]
  },
  {
      "startTime": 134.015,
      "endTime": 138.63,
      "content": [
          "So there's a lot",
          "of stuff in here",
          "I highly recommend",
          "checking out, diving in."
      ]
  },
  {
      "startTime": 138.63,
      "endTime": 147.67,
      "content": [
          "Really good, interesting",
          "performance section,",
          "some newer metrics like",
          "first meaningful [INAUDIBLE],,",
          "time to interactive,",
          "probably things you guys",
          "have covered extensively",
          "on the show here."
      ]
  },
  {
      "startTime": 147.67,
      "endTime": 152.52,
      "content": [
          "ADDY OSMANI: No, first time",
          "we're ever covering this.",
          "ERIC BIDELMAN: Yeah.",
          "ADDY OSMANI: Ever in history.",
          "ERIC BIDELMAN:",
          "But there's just--",
          "there's new stuff",
          "happening all the time."
      ]
  },
  {
      "startTime": 152.52,
      "endTime": 160.244,
      "content": [
          "We're adding new audits, so",
          "as new best practices emerge",
          "or the requirements for being",
          "a progressive web app change,",
          "we're going to add",
          "that stuff and just",
          "make the whole tool better."
      ]
  },
  {
      "startTime": 160.244,
      "endTime": 170.67,
      "content": [
          "MATT GAUNT: And then [INAUDIBLE]",
          "new web standards kind of land,",
          "you can start seeing people",
          "basically add audits,",
          "and then it's instantly going to",
          "start appearing in Lighthouse,",
          "and it's kind of a nice way of",
          "keeping up to date with newer",
          "web standards."
      ]
  },
  {
      "startTime": 170.67,
      "endTime": 176.119,
      "content": [
          "Right?",
          "ERIC BIDELMAN: Yeah, and",
          "that's one of the goals,",
          "is there's all these best",
          "practices you learn over time,",
          "but some are kind of outdated."
      ]
  },
  {
      "startTime": 176.119,
      "endTime": 182.64,
      "content": [
          "You don't know what's",
          "relevant or not in 2017.",
          "And so we just want to add this",
          "to a tool that's open source."
      ]
  },
  {
      "startTime": 182.64,
      "endTime": 188.22,
      "content": [
          "It's on GitHub, and now it's",
          "built into the browser itself,",
          "so you can use it basically",
          "anywhere you want."
      ]
  },
  {
      "startTime": 188.22,
      "endTime": 195.48,
      "content": [
          "ADDY OSMANI: That's awesome.",
          "I love that it's got those",
          "modern loading metrics going",
          "there, and it's",
          "also got the section",
          "for your critical",
          "network request chains."
      ]
  },
  {
      "startTime": 195.48,
      "endTime": 206.54,
      "content": [
          "Really useful to look at.",
          "So Lighthouse is great for",
          "your local dev workflow,",
          "checking your own performance",
          "on your local machine,",
          "but it's important",
          "to be continuously",
          "testing this stuff out."
      ]
  },
  {
      "startTime": 206.54,
      "endTime": 214.288,
      "content": [
          "Does Lighthouse work in",
          "continuous integration",
          "with things like Travis, and if",
          "so, can we have it now please,",
          "Eric, and how?",
          "ERIC BIDELMAN: Well,",
          "I'm glad you asked that."
      ]
  },
  {
      "startTime": 214.288,
      "endTime": 221.88,
      "content": [
          "Indeed, we can.",
          "Something we showed",
          "at Google I/O",
          "is the ability to basically",
          "just hook up headless Chrome",
          "and Lighthouse to GitHub."
      ]
  },
  {
      "startTime": 221.88,
      "endTime": 230.71,
      "content": [
          "So someone submits a",
          "pull request to you.",
          "You want to know if that",
          "pull request is going",
          "to hurt your performance,",
          "accessibility, best practices,",
          "or if it's going to",
          "make it better or not."
      ]
  },
  {
      "startTime": 230.71,
      "endTime": 235.51,
      "content": [
          "So you can totally do that.",
          "I've actually been experimenting",
          "with that over on GitHub.",
          "You can check it out."
      ]
  },
  {
      "startTime": 235.51,
      "endTime": 243.54,
      "content": [
          "It's",
          "github.com/ebidel/lighthouse-ci.",
          "And basically what this is,",
          "it's just a Docker image",
          "that we've put on Google Cloud."
      ]
  },
  {
      "startTime": 243.54,
      "endTime": 251.91,
      "content": [
          "So it's on App Engine.",
          "It runs Docker, runs",
          "headless Chrome,",
          "and it basically sends off",
          "your GitHub pull requests",
          "as they come into",
          "this Rest endpoint."
      ]
  },
  {
      "startTime": 251.91,
      "endTime": 255.982,
      "content": [
          "It stages and tests",
          "and then gives you",
          "your Lighthouse score."
      ]
  },
  {
      "startTime": 255.982,
      "endTime": 263.34,
      "content": [
          "So that's pretty nice",
          "because you can basically",
          "have this little Lighthouse",
          "following you wherever",
          "you go, and this is an example",
          "of what this tool actually",
          "does."
      ]
  },
  {
      "startTime": 263.34,
      "endTime": 268.38,
      "content": [
          "So it'll report on",
          "your pull request.",
          "It'll comment saying,",
          "hey, this pull request is",
          "going to be 100 of 100 now."
      ]
  },
  {
      "startTime": 268.38,
      "endTime": 279.19,
      "content": [
          "No worries.",
          "You're safe to merge.",
          "MATT GAUNT: So do you",
          "have to stay to your site",
          "and then tell the CI,",
          "this is your role,",
          "I want to run this pull request?",
          "ERIC BIDELMAN: You do."
      ]
  },
  {
      "startTime": 279.19,
      "endTime": 285.28,
      "content": [
          "I'll just show you right here.",
          "It's just Travis.",
          "So you drop in a",
          "Travis YAML file,",
          "and you run this little",
          "script that I created."
      ]
  },
  {
      "startTime": 285.28,
      "endTime": 294.275,
      "content": [
          "And that script,",
          "called runlighthouse,",
          "just handles the details",
          "of commenting on your pull",
          "request, and sending the",
          "pull request to this Docker",
          "image in the cloud."
      ]
  },
  {
      "startTime": 294.275,
      "endTime": 302.5,
      "content": [
          "And then all you do",
          "in your Travis file",
          "is have your usual",
          "install handler, your npm",
          "link, or whatever you have",
          "to do to test your site."
      ]
  },
  {
      "startTime": 302.5,
      "endTime": 306.97,
      "content": [
          "And then in",
          "after_success, the stuff",
          "you mentioned, which",
          "is deploy your site."
      ]
  },
  {
      "startTime": 306.97,
      "endTime": 314.95,
      "content": [
          "We want folks to deploy",
          "their pull request changes",
          "to a staging URL,",
          "because we think",
          "it will give more realistic",
          "performance numbers."
      ]
  },
  {
      "startTime": 314.95,
      "endTime": 326.367,
      "content": [
          "If you run locally",
          "on localhost, and you",
          "don't have things like",
          "SSL, for instance, you",
          "don't have an H2PUSH,",
          "so there's going",
          "to be different performance",
          "characteristics if you don't",
          "send it to a staging server."
      ]
  },
  {
      "startTime": 326.367,
      "endTime": 333.799,
      "content": [
          "But it's basically just drop in.",
          "And you call this little",
          "runlighthouse script,",
          "you give it the URL you",
          "want to test against,",
          "your staging server URL."
      ]
  },
  {
      "startTime": 333.799,
      "endTime": 341.2,
      "content": [
          "And then lightousebot",
          "will do the hard work",
          "of reporting back",
          "the new scores,",
          "commenting on your",
          "pull requests,",
          "and letting you know what's up."
      ]
  },
  {
      "startTime": 341.2,
      "endTime": 356.8,
      "content": [
          "MATT GAUNT: So because it's",
          "running in headless Chrome,",
          "does that affect the",
          "performance scores and stuff,",
          "and is there any way of",
          "basically getting around that,",
          "so it's a bit more realistic?",
          "ERIC BIDELMAN: So",
          "right now actually,",
          "and I'm glad you asked",
          "that, because it's",
          "a real important point."
      ]
  },
  {
      "startTime": 356.8,
      "endTime": 367.25,
      "content": [
          "Inside of this",
          "repo, it's a tool we",
          "have online that people",
          "can just drop into Github,",
          "but it's also a reference",
          "server, and a docker image",
          "that people can run their",
          "own setup if they wanted to."
      ]
  },
  {
      "startTime": 367.25,
      "endTime": 376.81,
      "content": [
          "But I have two different",
          "Docker files here.",
          "One is for headless",
          "Chrome, so test my site",
          "using headless Chrome, and",
          "also using full Chrome, so",
          "non-headless version of Chrome."
      ]
  },
  {
      "startTime": 376.81,
      "endTime": 386.56,
      "content": [
          "And so the CI's actually using",
          "the non-headless one right now,",
          "because there's some bugs",
          "with headless Chrome on--",
          "basically you can't do",
          "throttling and network",
          "emulation in headless right now."
      ]
  },
  {
      "startTime": 386.56,
      "endTime": 391.37,
      "content": [
          "So it's not going",
          "to be entirely--",
          "you're basically going to",
          "get better scores than you'd",
          "expect."
      ]
  },
  {
      "startTime": 391.37,
      "endTime": 396.172,
      "content": [
          "And we want the most",
          "realistic ones possible.",
          "Yeah.",
          "A couple of options, though."
      ]
  },
  {
      "startTime": 396.172,
      "endTime": 402.1,
      "content": [
          "MATT GAUNT: Nice.",
          "So you can use it as",
          "a Chrome extension,",
          "but there's no real need",
          "for that, because you got it",
          "in dev tools now."
      ]
  },
  {
      "startTime": 402.1,
      "endTime": 408.69,
      "content": [
          "Is it any other way you can",
          "use it after the CI as well?",
          "Nudge nudge, WebPagetest?",
          "ERIC BIDELMAN: WebPagetest, yes."
      ]
  },
  {
      "startTime": 408.69,
      "endTime": 413.59,
      "content": [
          "And actually we've integrated.",
          "We've worked with the",
          "folks at WebPagetest",
          "to integrate lighthouse."
      ]
  },
  {
      "startTime": 413.59,
      "endTime": 420.594,
      "content": [
          "So if you're on WebPagetest, you",
          "can pop over to Simple Testing.",
          "Inside of here,",
          "you can see there's",
          "a checkbox for Run Lighthouse."
      ]
  },
  {
      "startTime": 420.594,
      "endTime": 428.23,
      "content": [
          "And when you do this, you're",
          "going to get your typical web",
          "page test results, but you'll",
          "also have the lighthouse report",
          "that you saw, that we just",
          "saw in the dev tools, show up."
      ]
  },
  {
      "startTime": 428.23,
      "endTime": 432.4,
      "content": [
          "So you can get all this",
          "information in a single place,",
          "if you're already",
          "using this tool."
      ]
  },
  {
      "startTime": 432.4,
      "endTime": 442.08,
      "content": [
          "ADDY OSMANI: And the benefit",
          "of this versus just running",
          "it locally is you can also",
          "run on a real device, Moto G4,",
          "and get slightly more",
          "realistic performance numbers",
          "off the back of it."
      ]
  },
  {
      "startTime": 442.08,
      "endTime": 452.21,
      "content": [
          "ERIC BIDELMAN: Definitely.",
          "One of the coolest things",
          "about WebPagetest in general",
          "is there's all these",
          "different places",
          "you can test, in a bunch of",
          "different versions of browsers",
          "and devices."
      ]
  },
  {
      "startTime": 452.21,
      "endTime": 457.2,
      "content": [
          "So you get realistic numbers.",
          "ADDY OSMANI: Awesome.",
          "So a plethora of options."
      ]
  },
  {
      "startTime": 457.2,
      "endTime": 464.71,
      "content": [
          "Folks should check it out.",
          "MATT GAUNT: Yep.",
          "I'd just get it in your",
          "CI, so you don't trip up.",
          "That's what I've",
          "done on my site,",
          "but I've been customizing",
          "it like no end."
      ]
  },
  {
      "startTime": 464.71,
      "endTime": 469.13,
      "content": [
          "So I'm glad that--",
          "ERIC BIDELMAN:",
          "It's open sourcing,",
          "you can do whatever you want.",
          "Customize the snot out of it.",
          "ADDY OSMANI: Awesome."
      ]
  },
  {
      "startTime": 469.13,
      "endTime": 473.792,
      "content": [
          "So check out lighthouse,",
          "try it in CI.",
          "Thanks for dropping by, Eric.",
          "ERIC BIDELMAN: Thanks, guys.",
          "Appreciate it.",
          "[MUSIC PLAYING]"
      ]
  }
]