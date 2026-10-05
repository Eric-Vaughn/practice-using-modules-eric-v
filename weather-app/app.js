const yargs = require("yargs");
const chalk = require("chalk");

const input = yargs(process.argv.slice(2)).parse();

/**
 * The purpose of package.json in managin dependencies is to have a blueprint for how
 * the program should be set up and what its dependencies are. It also provides information about
 * the program, like a description, authors, etc..
 *
 * node_modules should not be included in version control because package.json contains all
 * of the needed dependencies for the program to run. The user of the app can use npm install
 * to fetch all dependencies for the app to function.
 *
 * npm install uses the package.json file in the project to find and install the correct
 * packages for the project to run. It's important in collaborative projects because it keeps
 * everyone in a common environment code-wise while working on the project.
 */

if (input.city) {
    switch (input.city.toLowerCase()) {
        case "st. louis":
        case "stl":
            console.log(
                chalk.italic("It is 73 F today in:"),
                chalk.bgRed.blue(input.city),
            );
            break;
        case "kansas city":
        case "kc":
            console.log(
                chalk.italic("It is 68 F today in:"),
                chalk.bgRed.blue(input.city),
            );
            break;
        case "new york":
        case "ny":
            console.log(
                chalk.italic("It is 59 F today in:"),
                chalk.bgRed.blue(input.city),
            );
            break;
        case "philadelphia":
        case "philly":
            console.log(
                chalk.italic("It is 78 F today in:"),
                chalk.bgRed.blue(input.city),
            );
            break;
        case "san francisco":
        case "san fran":
            console.log(
                chalk.italic("It is 81 F today in:"),
                chalk.bgRed.blue(input.city),
            );
            break;
        default:
        // jj
    }
}
