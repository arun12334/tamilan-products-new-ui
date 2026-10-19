# Tamilan Products

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.24.

## Storefront pages

The HTML storefront is now rendered by Angular routes. The home page is `/`, with
additional pages at `/collections`, `/collection`, `/product`, `/cart`,
`/checkout`, `/payment`, `/order-success`, `/wishlist`, `/account`, `/contact`,
`/privacy`, `/refund`, `/shipping`, and `/terms`. The shared header and footer
are in the root application; each routed page owns its page content and local
image/catalog data.

Bootstrap utilities and global theme tokens are in `src/styles.css`; shared
header, footer, and cart-drawer styles are in `src/app/app.css`; each routed
page has its own stylesheet alongside its component. The source SVG
illustrations are in `public/assets/images/`. Cart, wishlist, sample
account/contact forms, and demo orders are stored in browser `localStorage`.
Checkout and payment are front-end demos only; connect a payment provider and a
server before accepting real orders or payments.

## Deploy to GitHub Pages

Pushing to `main` automatically builds and deploys the Angular app with GitHub
Actions. After the first deployment completes, the site is available at
<https://arun12334.github.io/tamilan-products-ui/>.

The workflow builds with the repository's project-site base path and publishes
an SPA fallback so routed pages continue to load when opened directly. GitHub
Pages only hosts static files; backend-dependent account and payment features
need a separately deployed API before they can work on the public site.

## Razorpay checkout

The `/razorpay` page uses the signed-in user from `login.php` and the PHP API at
`http://localhost/Razorpay-backend/api`. The PHP endpoints are in
`C:\xampp\htdocs\Razorpay-backend\api`: `create-razorpay-order.php` creates an INR
order and `verify-razorpay-payment.php` validates the checkout signature on the
server. The order table is created automatically in the existing `login_api`
database.

Before testing payments:

1. Enable PHP's cURL extension and ensure the MySQL `login_api` database and
   `users` table used by `login.php` are available.
2. Set `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET` in the Apache environment
   (for example, with `SetEnv` in the Apache configuration). The backend reads
   these values from `C:\xampp\htdocs\Razorpay-backend\config\razorpay.php`.
   Use Razorpay **test-mode** API keys and restart Apache after changing its
   environment. The secret is read only by PHP and is never returned to Angular.
3. Start the Angular app with `ng serve`, sign in, and open `/razorpay`. Enter
   an amount of at least ₹1; the value is sent as paise to the PHP order API.

Use Razorpay test credentials and test payment details during development.
Switch to live keys only after configuring the production site and server.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
