using System.Linq;
using System.Net.Mail;

namespace CrossCutting.Services
{
    public class EmailService : IEmailService
    {
        private string _mailAddress = "contato@company.com.br";
        private string _user = "contato@company.com.br";
        private string _server = "mail.company.com.br";
        private string _password = "company!";

        public string MailAddress { get => _mailAddress; set => _mailAddress = value; }
        public string User { get => _user; set => _user = value; }
        public string Server { get => _server; set => _server = value; }
        public string Password { get => _password; set => _password = value; }

        private SmtpClient MailClient
        {
            get
            {
                var client = new SmtpClient(_server);

                client.Port = 587;
                client.Credentials = new System.Net.NetworkCredential(_user, _password);
                client.EnableSsl = false;
                return client;
            }
        }



        public void SendEmail(MailAddress sender, MailAddress destinatary, string subject, string content, bool asHtml = true)
        {
            var mail = new MailMessage(sender, destinatary);
            mail.Subject = subject;
            mail.Body = content;
            mail.IsBodyHtml = asHtml && content.Contains('<');
            mail.ReplyToList.Add(sender);
            MailClient.Send(mail);
        }

        public void SendEmail(string destinatary, string subject, string content, bool asHtml = true)
        {
            SendEmail(new MailAddress(_mailAddress), new MailAddress(destinatary), subject, content, asHtml);
        }

        public void SendEmail(string destinatary, string destinataryName, string subject, string content, bool asHtml = true)
        {
            SendEmail(new MailAddress(_mailAddress), new MailAddress(destinatary, destinatary + " " + destinataryName), subject, content, asHtml);
        }

        public void SendEmail(string sender, string senderName, string destinatary, string destinataryName, string subject, string content, bool asHtml = true)
        {
            SendEmail(new MailAddress(_mailAddress, sender + " " + senderName), new MailAddress(destinatary, destinatary + " " + destinataryName), subject, content, asHtml);
        }

        public void SendEmail(string sender, string destinatary, string destinataryName, string subject, string content, bool asHtml = true)
        {
            SendEmail(new MailAddress(_mailAddress, sender + " " + destinataryName), new MailAddress(destinatary), subject, content, asHtml);
        }

        public void SendEmail(MailAddress destinatary, string subject, string content, bool asHtml = true)
        {
            SendEmail(new MailAddress(_mailAddress), destinatary, subject, content, asHtml);
        }

        public void SendEmail(MailMessage message)
        {
            MailClient.Send(message);
        }


    }

}




