[![My Skills](https://skills.thijs.gg/icons?i=js,html,css,react,nodejs)](https://skills.thijs.gg)

![Getting Started](./src/assets/logo.png)

# Track performance !

app to track your workout performance.

### `Prerequisites`

- NodeJS (version 12.18)
- Yarn
- Axios
- Recharts
- Jsdoc

If you are working with several versions of NodeJS, we recommend you install nvm. This tool will allow you to easily manage your NodeJS versions.

### `Launching the project`

- Fork the repository
- Clone it on your computer.
- The yarn command will allow you to install the dependencies.
- The `yarn dev` command will allow you to run the micro API.(Path `\P12-SportSee-API-Back`)
- `npm start` on the front-end (Path `p12_sportsee`). Default port : 3001

### `Possible back-end endpoints`

- `http://localhost:3000/user/${userId}` retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
- `http://localhost:3000/user/${userId}/activity` retrieves a user's activity day by day with kilograms and calories.
- `http://localhost:3000/user/${userId}/average-sessions` retrieves the average sessions of a user per day. The week starts on Monday.
- `http://localhost:3000/user/${userId}/performance` retrieves a user's performance (energy, endurance, etc.).

Warning, currently only two users have been mocked. They have userId 12 and 18 respectively.

### `Examples of queries`
 
- `http://localhost:3000/user/12/performance` - Retrieves the performance of the user with id 12
- http://localhost:3000/user/18 `http://localhost:3000/user/18` - Retrieves user 18's main information.
