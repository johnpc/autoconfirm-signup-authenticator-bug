// amplify/auth/pre-sign-up-handler.ts
import type {PreSignUpTriggerHandler} from "aws-lambda";

const sleep = (milliseconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

export const handler: PreSignUpTriggerHandler = async (
  event,
  context,
  callback
) => {
  console.log({handler: "pre-sign-up-handler", event, context});
  event.response.autoConfirmUser = true;
  context.callbackWaitsForEmptyEventLoop = false;
  await sleep(4000);
  return callback(null, event);
};
