using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Model.Enum;

namespace Model.DTO
{
    public class PaymentRequest
    {
        public CurrencyCode Currency { get; set; }
        public string Amount { get; set; }
        public string Description { get; set; }
        public PaymentType PaymentType { get; set; }
    }
}
