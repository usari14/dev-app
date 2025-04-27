// import React from 'react';
// import { authenticate } from "../shopify.server";
// import { useLoaderData } from '@remix-run/react';

// export async function loader({ request }) {
//   const { admin } = await authenticate.admin(request);

//   const response = await admin.graphql(`
//     mutation {
//       metaobjectDefinitionCreate(definition: {
//         type: "$app:Feature111",
//         access: {
//           admin: MERCHANT_READ,
//         },
//         capabilities: {
//           translatable: { enabled: true }
//         },
//         displayNameKey: "paymentId",
//         fieldDefinitions: [
//           { key: "orderID", name: "Order ID", type: "json", required: true },
//           { key: "paymentId", name: "Payment ID", type: "single_line_text_field", required: true },
//           { key: "paymentStatus", name: "Payment Status", type: "single_line_text_field" }
//         ]
//       }) {
//         metaobjectDefinition {
//           id
//           type
//           fieldDefinitions {
//             key
//             name
//             type {
//               name
//             }
//           }
//         }
//         userErrors {
//           field
//           message
//         }
//       }
//     }
//   `);

//   const json = await response.json();
//   console.log("FULL RESPONSE:", JSON.stringify(json, null, 2));
//   return { data: json };
// }


// const Testing = () => {
//   const loaderData = useLoaderData();
//   console.log(loaderData);

//   return (
//     <div>
//       test
//     </div>
//   );
// };

// export default Testing;
