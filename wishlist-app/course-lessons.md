# Annotations

## Quickstart

- Run the shopify cli command to create an app
  `npm init @shopify/app@latest`

- After that, you can start the app running:
  `npm run dev`

## UI

- The design of the app is built with Shopify Polaris
  - Design system simillar to tailwind.css
  - [Documentation](https://polaris.shopify.com/)
- App bridge make the app talk with shopify

## Routes

- The route directory (app/routes) is where the app routes are defined
- ui-nav-menu inside app.jsx -> The navigation menu is defined here (app bridge)

- We can create api routes just creating a file called api.name_api.jsx insider routes file

## Remix

A remix app have 3 main parts:

- Loader: What the app will do when it loads in the backend

  - Example: Get data from database to show in the frontend

- Action: The action that the app will perform
- Example: Form submission

- Component: The component that will be rendered
