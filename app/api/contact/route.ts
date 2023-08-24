import { NextResponse } from "next/server";
let dotenv = require("dotenv").config();
let nodemailer = require("nodemailer");

export async function POST(request: Request) {
  const password = process.env.password;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "myaibbot@gmail.com",
      pass: password,
    },
    secure: true,
  });
  const res = await request.json();
  const mailData = {
    from: "myaibbot@gmail.com",
    to: "aibbusinessmen@gmail.com",
    subject: `Message From ${res.firstName}`,
    text: res.message,
    html: `<div>${res.message}</div>`,
  };
  transporter.sendMail(mailData, function (err: any, info: any) {
    if (err) console.log(err);
    else console.log(info);
  });
//   res.status(200);
  return NextResponse.json({ res });
}
