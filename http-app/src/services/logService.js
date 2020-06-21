import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn:
      "https://05fd3c49a5584b6f9b7c26cbbc5b808c@o407199.ingest.sentry.io/5275846",
  });
}

function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
  log,
};
