"use client"
import {withAuthenticator, useAuthenticator} from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import config from "../../amplifyconfiguration.json";
Amplify.configure(config);
function Home() {
  const {user, signOut} = useAuthenticator((context) => [context.user]);
  return (
    <main>
      <p>
        Success! If you are seeing this, you are logged in.{" "}
        <small>
          <a onClick={signOut}>(Sign out)</a>
        </small>
      </p>
    </main>
  );
}

export default withAuthenticator(Home);
