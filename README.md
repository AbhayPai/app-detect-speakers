# Detect Speakers

## [Detect Speakers](https://abhaypai.github.io/app-detect-speakers/)

# Rules followed in this Project.
#   1. SCSS Rules
## 1.1 Folder architecture of scss is based on [SMACSS]() viz.
- [Base](http://smacss.com/book/type-base).
- [Layout](http://smacss.com/book/type-layout).
- [Module](http://smacss.com/book/type-module).
- [State](http://smacss.com/book/type-state).
- Page (Root file viz. custom made ) (which may or may not contains above all scss file) (inspiration from [ITCSS](https://www.hongkiat.com/blog/inverted-triangle-css-web-development/)).

## 1.2 All SCSS files from above architecture directory must follow:
- One class must do one thing properly.
- [BEM](http://getbem.com/introduction/) seperator for class defining. eg(.navbar--logo__link)
- Object oriented CSS selector. [OOCSS](https://www.keycdn.com/blog/oocss)
- Avoid styling using id.
- Avoid using element selector directly.
- Avoid deep selector (not greater than 3).


# Concept Explanation.
* Used (Web_Audio_API)[https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API] which is inbuilt in most (modern browsers)[https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API#Browser_compatibility].
* (BaseAudioContext)[https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext] is the interface being used which is defined under (Web_Audio_API)[https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API].
* Now for creating panning effect, (createStereoPanner)[https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createStereoPanner] which is defined in (BaseAudioContext)[https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext].
* (Audio)[https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio] constructor is used to play audio file.

