export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),

  allowedHosts: ["localhost:*", "tile-vista.vercel.app", "*.vercel.app"],

  trustedOrigins: ["http://localhost:3000", "https://tile-vista.vercel.app"],

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
});
