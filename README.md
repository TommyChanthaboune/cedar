# Cedar Take Home

## Developer

### Tommy Chanthaboune

- Senior Software Engineer
- tchanthaboune@gmail.com

## Get Started

### dev

`$ npm run dev`

### test

`$ npm run test`

## Project Notes

### Overall philosophy

- Mobile First
- Rely React composition
- A11y for the homies

### TO DO

1. Set up project

   - vite
   - vitest & RTL
   - prettier eslint
   - tailwind config
   - fonts
   - assets

2. Create Routes and Pages

   - using react router 6 (I opt into the more declarative way to define routes)
   - For pages I would usually rely on cypress e2e tests
   - pages
     - ErrorPage
     - HomePage
     - Layout
     - PayPage
     - ThankYouPage
   - routes
     - /
     - /pay
     - /thank-you

3. Components

   - Vitest & RTL Tests
   - Components
     - Button
     - Header
     - Hero
     - Icon
     - Input
     - Step
     - Typography
     - Layout

4. State management

   - payment state
     - I decided to use a reducer here because there are so much state that depend on each other.
     - Validation will also happen here using a third party library for swiftness
   - local state
     - I try my best to keep my components pretty dumb; you will find local state usually on pages

5. Deploy
