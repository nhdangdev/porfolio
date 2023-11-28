// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from "next/server";
import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

const apiKey = 're_RxYuSyDy_CbL4ndxAyBaq4qhqV3gs9zju';
const resend = new Resend(apiKey);

export async function POST(req, res) {
  console.log(res)
  try {
    const { body } = await req.json();

    // Check if 'body' contains the necessary attributes
    if (!body || !body.email || !body.subject || !body.message) {
      throw new Error('Missing required fields in the request body.');
    }

    const { email, subject, message } = body;

    const data = await resend.emails.send({
      from: fromEmail,
      to: ["ttnhutdang305@gmail.com", email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting me!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
