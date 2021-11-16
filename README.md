# Brown Javascript Utilities Library

## Requirements

1. [Node](https://nodejs.org/en/)
1. [TypeScript](https://www.npmjs.com/package/typescript)
1. [Yarn](https://yarnpkg.com/)

## To run this locally

1. clone repo and cd into project
1. run `yarn` to install dependencies

## To use in a node based project

1. add to the root of your project a `.npmrc` file
1. to that new `.npmrc` file add the line `@BrownUniversity:registry=https://npm.pkg.github.com/`
1. install the library with `yarn add @BrownUniversity/js_utilities@0.0.1` (update the version number to the latest in the repo)

## To Contribute to this Library

1. Open a PR with your addition (please one function per PR). Be sure that:
  1. New function is in TypeScript
  1. New function are added to the appropriate file or follow the structure convention of `catagory_name/index.ts` IE `string_formmaters/index.ts`
  1. Exhaustive unit tests are made for the function.
  1. `README.md` is updated with the relevant information for the function

## To Publish a new version of the package

**requirements**: you will need to have a [GitHub PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) set to access `repo`, `write:packages` & `delete: packages` selected (at least). Add a line to your `.bashrc file` as `export GITHUB_TOKEN={the new token}`

1. Test and verify the new utility and/or changes
1. run `yarn build` to compile the code
1. run `yarn publish` - increment the version number
1. Good work, enjoy a nice cup of coffee.

## Available Utility Functions & How to Use Them

### String Formatting Helper Functions

| Function | Param(s) | Result |
| --- | --- | --- |
|`toKebabCase` | string | string in kebab case |
|`toCamelCase` | string | string in camel case |
|`capitalize` | string | capitalized string |

### Date Helper Function

| Function | Param(s) | Result |
| --- | --- | --- |
| `settingsDateFormat` | `date`: string, `type`: "us" or "eu" or  "int" | sets date to specified format |

### Time Helper Functions

| Function | Param(s) | Result |
| --- | --- | --- |
| `formatTime` | `time`: string or RegExpMatchArray, `militaryTime`: boolean | sets time to 24 hour format when  `militaryTime` is true |
| `formatTimesWithinString` | `string`: string, `militaryTime`: boolean | sets time from within a string to 24 hour format when  `militaryTime` is true
