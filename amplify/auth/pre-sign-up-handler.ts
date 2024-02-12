// amplify/auth/pre-sign-up-handler.ts
import type {PreSignUpTriggerHandler} from "aws-lambda";

export const handler: PreSignUpTriggerHandler = async (
  event,
  context,
  callback
) => {
  console.log({handler: "pre-sign-up-handler", event, context});
  event.response.autoConfirmUser = true;
  context.callbackWaitsForEmptyEventLoop = false;
  return callback(null, event);
};
