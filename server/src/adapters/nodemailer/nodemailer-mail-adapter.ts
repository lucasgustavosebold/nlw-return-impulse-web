import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "7ffc79173c7d01",
    pass: "63db5e624e63de"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe feedget <teste@feedget.com>',
      to: 'Lucas Sebold <lucasgsebold1@gmail.com>',
      subject,
      html: body,
    });
  };
}