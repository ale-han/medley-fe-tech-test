# Medley-FE-Tech-Test

Developed by Alex Haney

Preview [here](https://medley-fe-tech-test.vercel.app/)

*Note: This project was developed originally on Node v18.18.2 and npm v9.8.1.*

### Used Tech Stack
- React (v18.2.0)
- Typescript
- Styled Component
- Axios
- Eslint and prettier

### Run the project using `yarn`
```
yarn install
yarn start
```

### Practices what I focused on

**1. Project structure**

- `assets`: Directory where asset files like images, fonts and icons are placed.
- `components`: Directory of common components used in whole project
- `pages`: Pages of the app
- `styles`: Directory of styles for styled-component configuration
- `types`: Interfaces and types used in the app
- `utils`: Utility funcitons like apis, helpers and data-converters.
 

**2. State management**

In this project, the states are being managed using `useState` React hook. Keep practices of the state relationship between ancestors and descendants. And I reduced the state change as much as possible to keep the performence of the application and to reduce the number of component rendering.
<br />

**3. Scalability**

The project is structured with scalability in mind, adhering to a modular architecture. Components are organized based on features, promoting maintainability as the codebase grows. This modular approach allows for the easy addition of new features without causing excessive coupling or code duplication.
<br />

**4. Component Lifecycle**

Functional components and hooks are extensively used in this project for managing component lifecycle. The use of hooks like `useState` and `useEffect` provides a more concise and readable way to handle state and side effects.
<br />

**5. Linting and Code Formatting**

Linting and code formatting are enforced using ESLint and Prettier, ensuring a consistent and clean codebase. The project follows a set of coding standards defined in the ESLint configuration, and Prettier is used for automatic code formatting. This approach not only improves code readability but also helps catch potential errors and maintain a consistent coding style across the entire project.

