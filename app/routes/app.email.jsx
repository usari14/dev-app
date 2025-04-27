import { getEmail } from "./servers/api.server";
import { authenticate } from "../shopify.server"
import { useLoaderData } from "@remix-run/react";
import { sendWelcomeEmail } from "./sendEmail/sendEmail";

const sentEmails = new Map(); // store { shop: true } in memory

export async function loader({ request }) {
  const { admin, session } = await authenticate.admin(request);
  const dataOfEmail = await getEmail(admin);
  console.log("ssssssssss", dataOfEmail);

  const shopDomain = session.shop; // Or wherever you get the shop domain

  if (dataOfEmail?.email && !sentEmails.get(shopDomain)) {
    // only send if NOT already sent
    await sendWelcomeEmail(dataOfEmail?.email);
    sentEmails.set(shopDomain, true); // mark email sent
    console.log(`Email sent to shop ${shopDomain}`);
  } else {
    console.log(`Email already sent to ${shopDomain}, not sending again.`);
  }

  return { email: dataOfEmail?.email };
}

export default function GetEmail() {
  const { email } = useLoaderData();
  console.log("ddddddddddddddddd", email);

  return (
    <div>
      <h2>Installation Complete!</h2>
      <p>Email Sent To: {email || "Unknown"}</p>
    </div>
  )
}



