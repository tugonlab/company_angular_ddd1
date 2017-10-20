using System.Net.Mail;

namespace CrossCutting.Services
{
    public interface IEmailService
    {
        string MailAddress { get; set; }
        string User { get; set; }
        string Server { get; set; }
        string Password { get; set; }

        void SendEmail(MailAddress sender, MailAddress destinatary, string subject, string content, bool asHtml = true);
        void SendEmail(MailAddress destinatary, string subject, string content, bool asHtml = true);
        void SendEmail(MailMessage message);
        void SendEmail(string destinatary, string subject, string content, bool asHtml = true);
        void SendEmail(string destinatary, string destinataryName, string subject, string content, bool asHtml = true);
        void SendEmail(string sender, string destinatary, string destinataryName, string subject, string content, bool asHtml = true);
        void SendEmail(string sender, string senderName, string destinatary, string destinataryName, string subject, string content, bool asHtml = true);
    }
}