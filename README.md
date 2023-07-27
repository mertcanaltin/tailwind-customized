# Tailwind Customized

Tailwind Customized is a custom JavaScript plugin for Tailwind CSS that enhances the default functionality and provides additional features for a more tailored development experience with Tailwind CSS.

## Features

- **Custom Color Palette:** Define a custom color palette to match your project's design requirements and easily access these colors in your stylesheets.

- **Dynamic Class Condition:** Easily add dynamic classes to elements based on specific conditions, making your styles more adaptive and responsive.

- **Highlight Text:** Apply custom styles to text elements to highlight them in various colors and font weights.

- **Utility Function:** Provide a utility function to combine Tailwind CSS classes and create more complex styles effortlessly.

- **Autocomplete and Code Suggestions:** Integrate with popular code editors to offer autocomplete and code suggestions for Tailwind CSS classes, making development faster and more efficient.

## Installation

To use Tailwind Customized in your Tailwind CSS project, you need to install it via npm. Run the following command:

```bash
npm install tailwind-customized --save-dev
```

Usage
-----

Once the plugin is installed, you can start using its features in your Tailwind CSS configuration file (`tailwind.config.js`).

1.  Import the plugin by adding it to your `tailwind.config.js`:

```js
module.exports = {
  // ...other configurations
  ...require("tailwind-customized"),
};
```

1.  Now, you can use the custom features provided by Tailwind Customized in your project's stylesheets:

```html
<!-- Apply custom styles to a div -->
<div class="custom-class">This is a customized div using Tailwind Customized.</div>

<!-- Add dynamic class based on a condition -->
<div :class="dynamicClass">This text's class is dynamic based on a condition.</div>
```

Customization
-------------

Tailwind Customized allows you to customize various aspects of your Tailwind CSS setup. In the plugin's source code (in `index.js`), you can modify and extend the provided functions to meet your specific project requirements.

Autocomplete and Code Suggestions
---------------------------------

For a better development experience, Tailwind Customized provides integration with popular code editors (VS Code, Sublime Text, etc.) to offer autocomplete and code suggestions for Tailwind CSS classes. Simply install the extension for your code editor to enable this feature.

Contribution
------------

Tailwind Customized is open to contributions. If you have any ideas, bug fixes, or new features to suggest, feel free to create an issue or submit a pull request on GitHub.

* * * * *

Thanks for using Tailwind Customized! We hope it enhances your Tailwind CSS development workflow and makes your projects even more efficient and stylish. If you have any questions or feedback, please let us know.

