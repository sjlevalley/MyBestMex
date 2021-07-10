// validate required env variables are set. Throw helpful errors regarding missing/invalid env vars.

function checkEnv() {
  const { SESSION_SECRET, MONGODB_URI, google_API_key } = process.env;
  if (!SESSION_SECRET) {
    throw new Error("SESSION_SECRET environment variable not set.");
  }
  // check that the MONGODB_URI exists and starts with mongodb://
  if (typeof MONGODB_URI !== "string" || !/^mongodb/.test(MONGODB_URI)) {
    throw new Error(
      `MONGODB_URI environment variable not set or invalid. MONGODB_URI: '${MONGODB_URI}'`
    );
  }
}

module.exports = checkEnv;
