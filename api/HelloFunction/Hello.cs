using System.Net;
using System.Security.Principal;
using HelloFunction.DTO.Request;
using HelloFunction.DTO.Response;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace HelloFunction
{
    public class Hello
    {
        private readonly ILogger _logger;

        public Hello(ILoggerFactory loggerFactory)
        {
            _logger = loggerFactory.CreateLogger<Hello>();
        }

        [Function("Hello")]
        public async Task<HttpResponseData> Run([HttpTrigger(AuthorizationLevel.Function, "get", "post")] HttpRequestData req)
        {
            _logger.LogInformation("C# HTTP trigger function processed a request.");

            string requestBody = String.Empty;
            using (StreamReader streamReader = new StreamReader(req.Body))
            {
                requestBody = await streamReader.ReadToEndAsync();
            }
            HelloRequest data = JsonConvert.DeserializeObject<HelloRequest>(requestBody);

            var response = req.CreateResponse(HttpStatusCode.OK);
            var hello = new HelloResponse();

            hello.Message = data?.Name == null ? "Hello there" : $"Hello there, {data.Name}";

            await response.WriteAsJsonAsync(hello);

            return response;
        }
    }
}
