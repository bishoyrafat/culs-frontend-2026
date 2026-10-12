# Contemporary Frontend Development 2026

From an empty folder to a living application.

Materials for the course: what we do each day, and links to everything we talk about.
The slides are in [Contemporary-Frontend-Development.md](Contemporary-Frontend-Development.md).
During the lectures they are live on [show.pan.earth](https://show.pan.earth/).

## Five days

| Day | Date       | Theme         | Question                     |
| --- | ---------- | ------------- | ---------------------------- |
| 1   | Mon 12 Oct | Tools         | How do I work?               |
| 2   | Tue 13 Oct | Content       | How do I describe something? |
| 3   | Wed 14 Oct | Functionality | How do I make it alive?      |
| 4   | Thu 22 Oct | Project       | Can I build something?       |
| 5   | Fri 23 Oct | Presentation  | Can I explain what I built?  |

## What you need

- a good laptop
- a [GitHub](https://github.com/) account
- an editor you are comfortable with
- a browser, [Firefox](https://www.firefox.com/) recommended
- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/), for `npx serve`

Yes, you can use AI. But you are responsible for every line of code you submit,
even if somebody, or something, else wrote it.

## Day 1: Tools

How a frontend developer works. In the morning the tools: editor, terminal, browser,
Developer Tools, HTTP and URLs, files and paths, Git and GitHub, documentation and AI.
In the afternoon we use them on [a broken website](https://github.com/pepe/culs-frontend-day1):
fork it, clone your fork, find the problems, fix them one commit at a time, and push.

By the end of the day you can fork a repository, clone it, navigate the project, run it,
inspect it, investigate an error, search documentation, make a change, verify it,
commit it and push it.

### Links

- [The broken website](https://github.com/pepe/culs-frontend-day1), the repository to fork
- [Visual Studio Code](https://code.visualstudio.com/)
- [Zed](https://zed.dev/)
- [WebStorm](https://www.jetbrains.com/webstorm/)
- [Vim](https://www.vim.org/)
- [Neovim](https://neovim.io/)
- [Helix](https://helix-editor.com/)
- [Firefox](https://www.firefox.com/)
- [Chrome](https://www.google.com/chrome/)
- [Edge](https://www.microsoft.com/edge)
- [Safari](https://www.apple.com/safari/)
- [Brave](https://brave.com/)
- [Firefox DevTools User Docs](https://firefox-source-docs.mozilla.org/devtools-user/)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools)
- [An overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview)
- [HTTP messages](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Messages)
- [HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status)
- [What is a URL?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
- [Git](https://git-scm.com/)
- [Install Git](https://git-scm.com/downloads)
- [Pro Git](https://git-scm.com/book/en/v2), the Git book, free to read
- [GitHub](https://github.com/)
- [Fork a repository](https://docs.github.com/en/pull-requests/how-tos/work-with-forks/fork-a-repo)
- [Cloning a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)
- [Connecting to GitHub with SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)
- [Node.js](https://nodejs.org/)
- [serve](https://github.com/vercel/serve), the local server behind `npx serve`
- [MDN Web Docs](https://developer.mozilla.org/)
- [HTML Living Standard](https://html.spec.whatwg.org/)
- [CSS specifications](https://www.w3.org/Style/CSS/)
- [ECMAScript specification](https://tc39.es/ecma262/)
- [HTTP Semantics, RFC 9110](https://www.rfc-editor.org/rfc/rfc9110)

## Day 2: Content

How do we describe something? HTML for structure and meaning, semantics and accessibility,
the relatives of HTML (XML, SVG) and data in JSON. Then CSS: rules and selectors,
the cascade, the box model, Flexbox, Grid and responsive design.

The goal of the day is a page with semantic HTML, a clear structure, an SVG, JSON data,
CSS layout, responsive behaviour and basic accessibility. Try to do as much as possible
without JavaScript.

### Links

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements)
- [The button element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button)
- [The Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [Firefox Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/)
- [XML introduction](https://developer.mozilla.org/en-US/docs/Web/XML/Guides/XML_introduction)
- [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG)
- [JSON](https://www.json.org/)
- [Working with JSON](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/JSON)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [The cascade](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascade/Introduction)
- [The box model](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model)
- [Flexbox](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox)
- [Grids](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Grids)
- [Responsive design](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)
- [Firefox Grid Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/)

## Day 3: Functionality

How do we make the page alive? JavaScript values, variables, functions, arrays and objects.
The programmable DOM, events and state. Talking to a server with `fetch()`,
Server-Sent Events and WebSocket, and choosing between them. Modules and the ecosystem.

The goal of the day is to extend your page so it reacts to input, handles events,
maintains state, modifies the DOM, fetches data and communicates with a server.

### Links

- [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [Using server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events)
- [The WebSocket API](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
- [JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [npm](https://www.npmjs.com/)
- [React](https://react.dev/)
- [Vue](https://vuejs.org/)
- [Svelte](https://svelte.dev/)
- [Vite](https://vite.dev/)
- [esbuild](https://esbuild.github.io/)

## Day 4: Project

Today there is no tutorial. Build something another person can actually use.

Your project must have meaningful content, intentional visual design, interaction,
application state, data, network communication, Git history and documentation.
Use technologies where they make sense, not because they are on the syllabus.

It is done when:

- it works
- someone else can use it
- someone else can understand the repository
- you can explain how it works

When you ask for help, say:

```text
I expected:

I observed:

I tried:

The relevant error/code is:
```

### Links

- [About READMEs](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)

## Day 5: Presentation

Can you explain what you built? Finish, do not expand: a working small project is better
than a magnificent unfinished one.

Prepare the story: problem, idea, architecture, demo, an interesting decision,
what went wrong, what next. Show the real application in the browser, use DevTools
when useful, and show the repository.

I evaluate four things:

1. **Product.** Does it work? Can someone actually use it?
2. **Web understanding.** Do you understand how HTML, CSS, JavaScript, the browser,
   the network and the server relate?
3. **Engineering process.** Did you use Git, debugging, documentation and a sensible structure?
4. **Understanding.** Can you explain the system you are presenting?

Expect questions like: Why is this a `button` and not a `div`? Where does this data come from?
What happens after I click here? Where is this state stored? Why did you use `fetch`,
SSE or WebSocket here? What happens when the server disappears?
Show me the request in DevTools. Change this behaviour now.

View source. Then change it.
