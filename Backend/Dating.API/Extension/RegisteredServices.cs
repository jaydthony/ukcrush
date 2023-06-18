﻿using Data.Repository.Implementation;
using Data.Repository.Interface;
using Dating.API.Profiles;
using Dating.API.Service.Implementation;
using Dating.API.Service.Interface;

namespace Dating.API.Extension
{
    public static class RegisteredServices
    {
        public static void ConfigureServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddScoped<IAccountRepo, AccountRepo>();
            services.AddScoped<IAccountService, AccountService>();
            services.AddScoped<IGenerateJwt, GenerateJwt>();
            services.AddScoped<IPayments, Payments>();
            services.AddScoped<ICloudinaryService, CloudinaryService>();
            services.AddScoped<IPaymentRepo, PaymentRepo>();
            services.AddAutoMapper(typeof(ProjectProfile));
            services.AddScoped<IEmailServices, EmailService>();
            services.AddScoped<ICamGirlRepo , CamGirlRepo>();
            services.AddScoped<ICamGirlService , CamGirlService>();
        }
    }
}
