public with sharing class ValidateAccountDetailsKyc {

    private static final Http caller = new http();

    @Auraenabled
    public static KycResponses.VerifyAccount VerifyAccountNumber(string accountNumber){
        HttpRequest req = new HttpRequest();
        req.setEndpoint(KycEndPoints.ConfirmAccount().get(url) + '/' + accountNumber);
        req.setMethod('GET');
        req.setHeader('moduleId', KycEndPoints.ConfirmAccount().get('moduleId'));
        req.setHeader('authorization', KycEndPoints.ConfirmAccount().get('auth'));
        HttpResponse res = caller.send(req);
        if(res.getStatusCode() == 200){
            
        }

        return null;

    }


    public static List<KycResponses.GetDocumentList> getDocumentList(KycRequests.RetrieveDocumentList request){

        HttpRequest req = new HttpRequest();
        req.setEndpoint(KycEndPoints.DSXGetDocumentList());
        req.setMethod('GET');
        req.setBody(JSON.serialize(request));
        
        HttpResponse res = caller.send(req);

        if(res.getStatusCode() == 200){

        }

        return new List<KycResponses.GetDocumentList>();

    }

    

    

    




   
}
