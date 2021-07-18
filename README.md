# A Simple Synonym Server

This is just a very simple express script that uses the Merriam-Webster thesaurus API.

You just make a request to 

```javascript

http://yourserverdomain.com/api?word=<word to look up>

```

The response will be a JSON document that contains an array of words.
The words will be synonyms for the word that you passed in.

## Setup

You need to set the **API_KEY** environment variable. You have to
sign up at https://dictionaryapi.com/sign-in to receive a key.