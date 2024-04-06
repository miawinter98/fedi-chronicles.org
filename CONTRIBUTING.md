# Introduction

Thank you for considering contributing to the Fedi Chronciles! The more contribution we get the fewer events are forgotten 

## About these Guidelines

As Fedi Chronicles aims to be a historical archive of notable fediverse events, there are some Guidelines I ask you to 
follow when writing up a new happening or modify the site itself.

### Adding a new Event

This is the easiest and most important one. When something happens or has happened that is not yet part of the Chronicles, 
please add a new json file to src/events. The filename should be short and summarize the event, with dashes instead of spaces, 
like "instancename-shutdown". The json itself needs four keys: type, date, title and description:

- type: one of news, online, offline or none (if your event doesn't fit any of those, please let me know)
- date: the day the event happened in ISO format, like so: 2024-04-06
- title: a short title for the event, like "Instancename was shut down". If the first word isn't a specific term like a 
  domain name, capitalize the first letter please
- description: A longer text describing the event. This shouldn't be too long as it's otherwise cut of on mobile. Please 
  don't forget punctuation at the end.

***Important***: When writing about an event, please leave out individuals as much as possible, ideally completely. Fedi 
Chronicles aims to collect notable events, like advances in technology, things happening to big instances or other events 
like large ddos attacks or the taliban taking down an instances' domain, we do not want to single out individuals or groups, 
or harass, frame or otherwise affect them. 

### Enhancing the site itself 

As for any other contribution, if you are well versed in the JS framework [Astro](https://docs.astro.build/en/getting-started/), 
as well as the CSS framework [TailwindCSS](https://tailwindcss.com/) you are free to add features or fix bugs as you see fit, 
but please keep in mind that this is a small project with focus on the data presented. The site is statically compiled and is 
aimed to be as accessible as possible, please refrain from adding client-side scripts or many animations and low contrasting colors. 

### What I do not want

As noted earlier, the events covered by Fedi Chronicles are large and affect a wide range of the fediverse. Big instances 
being created, shutting down, major events affecting them, news about the different technologies and standards of the fediverse, 
government action, etc. Events centered around individuals, small groups or instances will not be accepted, as well as 
retellings that unnecessarily mention people or groups. If an instance is shut down, it is not relevant who the admin is, 
when an attack is launched on many instances, we do not want the name of the offender. There may be exceptions for notable 
public figures, but please try to exclude people from your submission as much as possible. 

If I reject your contribution I will name my reason for doing so. If I change your contribution I do so with as little 
edit as possible, I try to only keep the writing style in line with the other events, as well as fix grammatical errors, 
typos, confusing sentence structures, etc. (as much as my own speech and writing impediments allow me to, so please feel 
free to support me here).

## I can't code, but I still want to help!

No problem, if you have an event but not the tools to submit the "code" itself, open an issue with the relevant 
information noted in [Adding a new Event](#adding-a-new-event): type, date, title and description.

## I have never contributed to Open Source before, scary!

I have been given a little site that might alleviate some of your anxieties and give you some guidance on how get into it:
https://www.firsttimersonly.com/

## Commit Guidelines 

Generally I follow the convention of using an action word as the first word in the commit, notably "Added", "Changed" or "Removed",
followed by a short description of the change. In case of a new event file, "Added eventname.json" will suffice. 

