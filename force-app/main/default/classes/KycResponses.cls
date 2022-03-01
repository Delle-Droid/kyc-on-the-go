public class KycResponses {
    
    public class GetDocumentList{
        @auraenabled
        public OutCome outcome {get;set;}
        @auraenabled
        public List<string> udis {get;set;}
    }


    public class Outcome {
        @auraenabled
        public string status {get;set;}
        
    }


    /**
     * Structured response for the callout made to the verify account endpoint ..
     */
    public class VerifyAccount{
        //Http Request
    }
}
