var ROUTES_INDEX = {
  name: "<root>",
  kind: "module",
  className: "AppModule",
  children: [
    {
      name: "routes",
      filename: "src/app/app-routing.module.ts",
      module: "AppRoutingModule",
      children: [
        {
          path: "",
          loadChildren: "./public/public.module#PublicModule",
          children: [
            {
              kind: "module",
              children: [
                {
                  name: "routes",
                  filename: "src/app/public/public-routing.module.ts",
                  module: "PublicRoutingModule",
                  children: [
                    { path: "", redirectTo: "home", pathMatch: "full" },
                    { path: "home", component: "HomeComponent" },
                    { path: "user", component: "UserHomeComponent" },
                    { path: "user-order", component: "UserOrderComponent" },
                    { path: "user-profile", component: "UserInfosComponent" },
                  ],
                  kind: "module",
                },
              ],
              module: "PublicModule",
            },
          ],
        },
        {
          path: "auth",
          loadChildren: "./auth/auth.module#AuthModule",
          children: [
            {
              kind: "module",
              children: [
                {
                  name: "routes",
                  filename: "src/app/auth/auth-routing.module.ts",
                  module: "AuthRoutingModule",
                  children: [
                    { path: "", redirectTo: "login", pathMatch: "full" },
                    { path: "login", component: "LoginComponent" },
                    { path: "signin", component: "SigninComponent" },
                  ],
                  kind: "module",
                },
              ],
              module: "AuthModule",
            },
          ],
        },
        { path: "**", component: "ErrorComponent" },
      ],
      kind: "module",
    },
  ],
};
