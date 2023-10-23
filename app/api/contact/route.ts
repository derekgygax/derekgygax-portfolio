import sendgrid from '@sendgrid/mail';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: Request) {

  const formData: FormData = await request.json()


  const sendGridApiKey: string = process.env.SENDGRID_API_KEY ? process.env.SENDGRID_API_KEY : '';
  const emailAddress: string = process.env.EMAIL_ADDRESS ? process.env.EMAIL_ADDRESS : '';

  sendgrid.setApiKey(sendGridApiKey);

  await sendgrid.send({
    to: emailAddress,
    from: emailAddress,
    subject: `Portfolio Website: ${formData.subject}`,
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>The HTML5 Herald</title>
      <meta name="description" content="The HTML5 Herald">
      <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
    </head>
    <body>
      <div class="container" style="margin-left: 20px;margin-right: 20px;">
        <h3>You've got a new mail from ${formData.name}, their email is: ${formData.email} </h3>
        <div style="font-size: 16px;">
          <p>Message:</p>
          <p>${formData.message}</p>
        </div>
      </div>
    </body>
    </html>`,
  });

  return new Response('', {
    status: 200
  })
}