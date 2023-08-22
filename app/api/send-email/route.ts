import type { NextApiRequest, NextApiResponse } from "next";
// import { render } from "@react-email/render";
// import WelcomeTemplate from "../../emails/WelcomeTemplate";
import { sendEmail } from "../../lib/email";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await sendEmail({
    to: "info@aibusinessmen.com",
    subject: "Welcome to AIB",
    html: "<div>Hello</div>",
  });

  return res.status(200).json({ message: "Email sent successfully" });
}