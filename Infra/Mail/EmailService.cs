using System.Linq;
using System.Net.Mail;

namespace Application.Services
{
    public class EmailService : IEmailService
    {
        private string _appMailAddress = "contato@company.com.br";
        private string _appMailUser = "contato@company.com.br";
        private string _appMailServer = "mail.company.com.br";
        private string _appMailPassword = "company!";

        private SmtpClient MailClient
        {
            get
            {
                var client = new SmtpClient(_appMailServer);

                client.Port = 587;
                client.Credentials = new System.Net.NetworkCredential(_appMailUser, _appMailPassword);
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
            SendEmail(new MailAddress(_appMailAddress), new MailAddress(destinatary), subject, content, asHtml);

        }

        public void SendEmail(string destinatary, string destinataryName, string subject, string content, bool asHtml = true)
        {
            SendEmail(new MailAddress(_appMailAddress), new MailAddress(destinatary, destinatary + " " + destinataryName), subject, content, asHtml);

        }

        public void SendEmail(string sender, string senderName, string destinatary, string destinataryName, string subject, string content, bool asHtml = true)
        {
            SendEmail(new MailAddress(_appMailAddress, sender + " " + senderName), new MailAddress(destinatary, destinatary + " " + destinataryName), subject, content, asHtml);

        }

        public void SendEmail(string sender, string destinatary, string destinataryName, string subject, string content, bool asHtml = true)
        {
            SendEmail(new MailAddress(_appMailAddress, sender + " " + destinataryName), new MailAddress(destinatary), subject, content, asHtml);

        }

        public void SendEmail(MailAddress destinatary, string subject, string content, bool asHtml = true)
        {
            SendEmail(new MailAddress(_appMailAddress), destinatary, subject, content, asHtml);

        }

        public void SendEmail(MailMessage message)
        {
            MailClient.Send(message);
        }


    }

}




