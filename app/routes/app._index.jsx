import db from "../db.server"; // your database connection
import { authenticate } from "../shopify.server";
import { sendWelcomeEmail } from "./sendEmail/sendEmail";
import { useLoaderData } from "@remix-run/react";
import { getEmail } from './servers/api.server'

export async function loader({ request }) {
  const { admin, session } = await authenticate.admin(request);
  const shopDomain = session.shop;
  const email = await getEmail(admin);

  console.log("Shop Domain:", shopDomain, "Email:", email?.email);

  const shop = await db.shop.findUnique({
    where: { domain: shopDomain },
  });

  if (!shop) {
    // shop not in database yet: new install
    await sendWelcomeEmail(email?.email);
    await db.shop.create({
      data: {
        domain: shopDomain,
        emailSent: true,
      },
    });
    console.log("New shop, email sent and recorded.");
  } else {
    console.log("Shop already exists, no email sent.");
  }

  return { email: email?.email };
}

const Index = () => {
  return (
    <div>app._index</div>
  )
}

export default Index