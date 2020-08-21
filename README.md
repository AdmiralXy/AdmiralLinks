## AdmiralLinks

AdmiralLinks is a very small library for hiding your site's links from search robots.

* Fast install and usage
* Current version size: 0.447KB
* Current version size (alternative): 0.372KB

## Usage

```
<span data-uri="https://google.ru">Open link</span>
<span data-uri="https://google.ru" data-target="_blank">Open link in new tab</span>
<span data-uri="https://google.ru" data-target="_window">Open link in new small window</span>
```

## Usage (Alternative Version)

**You don't need to add href="..." attribute to ```<a>``` element.**

**HTML Classes:**\
'*pseudo-link*' - to make your link hidden.\
'*blank*' - force to open in a new window.

**HTML DOM Attribute:**\
*data-href*="https://google.ru" - add a pseudo link to element.

## Example (Alternative Version)

```
<a class="pseudo-link" data-href="https://google.ru">Open link</a>
<a class="pseudo-link blank" data-href="https://google.ru">Open link in new tab</a>
```

After DOM content loaded, will look like:
```
<a class="pseudo-link" data-href="aHR0cHM6Ly9nb29nbGUucnU=" href="javascript:void(0);">Open link</a>
<a class="pseudo-link blank" data-href="aHR0cHM6Ly9nb29nbGUucnU=" href="javascript:void(0);">Open link in new tab</a>
```
