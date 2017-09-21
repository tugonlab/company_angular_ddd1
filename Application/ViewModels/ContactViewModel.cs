using System;
namespace Application.ViewModels
{
    public class ContactViewModel
    {
		public Int32 Id { get; set; }
		public String Name { get; set; }
		public String PhoneNumber { get; set; }
		public String Email { get; set; }
		public String Subject { get; set; }
		public String Message { get; set; }
    }
}
