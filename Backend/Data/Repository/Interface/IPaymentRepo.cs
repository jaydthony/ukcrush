using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Model.Enitities;
using PayPalCheckoutSdk.Orders;

namespace Data.Repository.Interface
{
    public interface IPaymentRepo
    {
        Task<Payments> GetPaymentById(string OrderId);
        Payments AddPayments(Order order);
        Task<bool> IsPaymentActive(string orderId);
        bool DeactivatePayment(string orderId);
    }
}
