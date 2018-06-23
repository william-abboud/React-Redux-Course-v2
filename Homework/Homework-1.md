## Create a React article component

The ```<Article></Article>``` Component is a very simple React component.

It takes the following props:

 - title
 - language
 - text (as children)

Inside the component render the title, the text and depending on the language a little flag icon in the top right corner.

The languages you support are Bulgarian, German and English.

If the component does not support the language specified don't render a flag icon.

You can use emojis to display the flags:
https://emojipedia.org/flags/

The title needs to be capitalized and no matter the input.
A title can be passed in as 'TITLE' or 'TiTLE' or 'title' regardless it should come out as 'Title' so figure out how to manipulate that.

The text can be anything you want as long as you have the same text in English, German and Bulgarian. Use Google-Translator if you need to.

Happy coding !
