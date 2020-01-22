using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MvcRouting.Model
{
    public class Employee
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Department { get; set; }
        public string firstName { get; set; }

        public string lastName { get; set; }
        public string password { get; set; }
        public string confirmPassword { get; set; }

        public string gender { get; set; }

        public int txtEmpPhone { get; set; }
        public string date { get; set; }
        public int height { get; set; }
        public int weight { get; set; }
    }
}
