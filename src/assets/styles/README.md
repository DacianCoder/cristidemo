# CRA-TEMPLATE PI

### Where do I put my style ?
The file structure for this template is the following:
* **abstracts** - in this folder we only put variables, mixins, mediaQueries, the configuration for the components and the utils (helper) classes, like sizes, spacing, flex, etc.
* **components** - in this folder we put the style for our components,
* **layout** - in this folder we put the style for major element/components, like the style for the grid, lists, tables, forms etc. Anything that is used global on the project should go here.
* **vendors** - in this folder we put the third party css.  

### How do I make the setup ?

First of all we need to go in the ```_variables.scss``` file and config the general style.
In the ```_variables.scss``` file we have following configurations to make:

```scss
$enableHelperClassesForColor: true;
```
This will enable the helper classes for color ex:
```scss 
 .textPrimary, .backgroundPrimary
```

These classes are bing generated based on the following object:
```scss
$themeColors: (
        primary: $primaryColor,
        primaryLight: $primaryColorLight,
        primaryDark: $primaryColorDark,
        secondary: $secondaryColor,
        danger: $dangerColor,
        default: $defaultColor,
);
```
The class name are created as following: `.text` or `.background` + `the capitalized key of the $themeColor`

Also, you can add or remove items based on your needs.

Example of usage:

```html
<p class="textPrimary">some text</p>
```

Lets assume that `$primaryColor` is set to red then the text 
inside the paragraph will have the color red;

```html
<div class="backgroundPrimary">some text</div>
```
Lets assume that `$primaryColor` is set to red then the background 
of the paragraph will have the background color red;



```scss
$enableGridClasses: true;
```
This will be enabled the bootstrap 4 grid.

The only thing that differ from the bootstrap 4 grid is the naming.

Example: 
```scss
.container-fluid -> .containerFluid;
.col-md-5 -> .colMd5
```

Example of usage:

```html
<div class="containerFluid">
  <div class="row">
    <div class="colMd6 colLg4">
      First col 
    </div>
    <div class="colMd6 colLg8">
      Second col
    </div>
   </div>
</div>
```

```scss
$enableSizeHelperClasses: true;
```

This will generate helper classes for **width**, **max width**, **height** and **max height**

These classes are bing generated based on the following object:
```scss
$sizes: (
        "Full": 100%,
        "FullVh": 100vh,
        "Auto": auto
);
```

This object is used in the `abstracts/utils/_sizes.scss` file to generate the classes.
The class name are created as following: 
```scss
.#{$abbrev}#{$key}#{$infix} 
```

Where `$abbrev` is the abbreviation of the property like: 
* width -> w
* height -> h
* max-width: -> mw
* max-height -> mh

`$key` it the take from the `$sizes` object

Example: `Full`

`$infix` is the breakpoint, these classes are responsive. Our available breakpoints 
are:
```scss
$breakpoints-min: (
        xs: 0,
        sm: 576px,
        md: 768px,
        lg: 992px,
        xl: 1200px
) !default;
```

The lowest breakpoint (in our case xs) will be skyped because we used the `min-width` media queries.

The output will be like this:

`wFullSm`, `hFullSm`, `mwFullSm`, `mhFullSm`.

Example of usage:

Let's assume we have a div, and we want to make it full width on mobile and from the tablet resolution,
 and above to be auto:
 
```html
<div class="wFull wAutoMd">the div</div>
``` 

You can add and remove items from the `$sizes` object.

Let's assume we need a helper class for `size` that will put a width and height of `2rem`.

In order to do that, first we need to add our new size in th `$sizes` map, so this will be like this:

```scss
$sizes: (
        "2": 2rem,
        "Full": 100%,
        "FullVh": 100vh,
        "Auto": auto
);
```

And that's all, now you can use the new helper class:

Example:
```html
<div class="w2Md h2Md wAutoLg hAutoLg"></div>
```


```scss
$enableSpacingHelperClasses: true;
```

This will generate helper classes for **margin** and **padding**

These classes are bing generated based on the following object:

```scss
$spacing: (
        "0": 0,
        "05": .5rem,
        "1": 1rem,
        "15": 1.5rem,
        "2": 2rem,
        "25": 2.5rem,
        "3": 3rem,
        "35": 3.5rem,
        "4": 4rem,
        "45": 4.5rem,
        "5": 5rem,
        "Auto": auto
);
```

The naming is format from `property abbrevietion`  + `$key from the $spacing object` + `breakpoint`

`Property abbreviations` are the following:

* mt (margin-top)
* ml (margin-left)
* mb (margin-bottom)
* mr (margin-right)
* mx (margin-left and margin-right)
* my (margin-top and margin-bottom)


 * pt (padding-top)
 * pl (padding-left)
 * pb (padding-bottom)
 * pr (padding-right)
 * px (padding-left and padding-right)
 * py (padding-top and padding-bottom)
  
  
  Example of usage:

```html
    <div class="mt0 mt2md mt5lg">the div</div>
```

In this case the div will have margin-top on mobile, margin-top of 2rem on md breakpoint and above and a
margin-top of 5rem on lg breakpoint and above.


```html
    <div class="px0 py0 px5md py3md"></div>
```

In this case the div will have a padding on top, right, bottom, left of 0rem on mobile, and a
padding left and right of 5rem on md breakpoint and above, and a padding of 3


```scss
$enableStickyFooter: true
```

This will enable in the `_base.scss` file the style that will make the footer sticky:

```scss
#root {
  @if $enableStickyFooter {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
  }
}
```

This will work if we have the following structure:

```html
<div id="root">
  <header>here will go the header</header>
  <main>here will go the main content of the page</main>
  <footer>here will go the footer</footer>
</div>
```

###Colors
```scss
$defaultColor: #fff;
$defaultTextColor: #000;

$primaryColor: #17479e;
$secondaryColor: #5a6268;
$primaryColorDark: #727272;
$primaryColorLight: #d8d8d8;
$dangerColor: #ff0000;
$linkColor: $primaryColor;
```

If you need a new color I recommend to use for naming `$typeOfTheColor` ($primary, secondary) + `Color` + `variation` (dark, light, etc);

Please avoid to use naming like `$blue` or `$fiveColor`.

```scss
$linkColor: $primaryColor;
```

This variable is used in `_hepers.scss` file, and is used in `.link` helper class which is used to style the links.

```html
<a href="#" class="linkDefault">the link</a>
```
